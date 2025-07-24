import type { TableProductsProps, Products, Product } from "../../models";

import { deleteProduct, updateProduct, createProduct } from "../../services";
import { useState, useEffect } from "react";
import { ModalProduct } from "./table";
import { Layout } from "./Layout";
import { HeadProduct, BodyProduct, AsideProduct } from "./table";
import { TableTitle } from "./TableTitle";

const TableProducts: TableProductsProps = ({ children, list }) => {
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [products, setProducts] = useState<Products>(list);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [productAside, setProductAside] = useState<Product | null>(null);
  const [unsavedChanges, setUnsavedChanges] = useState<Set<number>>(new Set());
  const [deletedItems, setDeletedItems] = useState<Set<number>>(new Set());
  const [newProducts, setNewProducts] = useState<Set<number>>(new Set());

  useEffect(() => {
    setProducts(list);
  }, [list]);

  const getTotalChanges = () => unsavedChanges.size + deletedItems.size;

  const handleSyncChanges = async () => {
    try {
      const deletePromises = Array.from(deletedItems)
        .filter((id) => id > 0) // Only delete existing products from API
        .map((id) => deleteProduct(id));

      const createPromises = Array.from(newProducts)
        .filter((id) => !deletedItems.has(id))
        .map(async (id) => {
          const product = products.find((p) => p.id === id);
          if (product) {
            const productData = {
              reference: product.reference,
              description: product.description,
              type: product.type,
              ah: product.ah,
              cca: product.cca,
              cube: product.cube,
              long: product.long,
              width: product.width,
              high: product.high,
              warranty: product.warranty,
              updated_at: new Date().toISOString(),
            };
            const response = await createProduct(productData);
            if (response.data) {
              setProducts((prev) =>
                prev.map((p) =>
                  p.id === id
                    ? {
                        ...response.data,
                        created_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                      }
                    : p,
                ),
              );
            }
            return response;
          }
          return Promise.resolve();
        });

      const updatePromises = Array.from(unsavedChanges)
        .filter((id) => !deletedItems.has(id) && !newProducts.has(id))
        .map((id) => {
          const product = products.find((p) => p.id === id);
          if (product) {
            const productData = {
              reference: product.reference,
              description: product.description,
              type: product.type,
              ah: product.ah,
              cca: product.cca,
              cube: product.cube,
              long: product.long,
              width: product.width,
              high: product.high,
              warranty: product.warranty,
            };
            return updateProduct(id, productData);
          }
          return Promise.resolve();
        });

      await Promise.all([
        ...deletePromises,
        ...createPromises,
        ...updatePromises,
      ]);

      setProducts((prev) => prev.filter((p) => !deletedItems.has(p.id)));
      setDeletedItems(new Set());
      setUnsavedChanges(new Set());
      setNewProducts(new Set());
      console.log(`All products synchronized successfully`);
    } catch (error) {
      console.error(`Error synchronizing products:`, error);
    }
  };

  const handleDiscardChanges = () => {
    setProducts((prev) => prev.filter((p) => !newProducts.has(p.id)));
    setUnsavedChanges(new Set());
    setDeletedItems(new Set());
    setNewProducts(new Set());
  };

  const handleAddNew = () => {
    const tempId = -(Math.max(...products.map((p) => Math.abs(p.id)), 0) + 1); // Use negative ID for new products
    const newProduct = {
      id: tempId,
      ah: "0",
      cca: "0",
      cube: "",
      description: "New Product",
      high: "0",
      long: "0",
      reference: "",
      image: "",
      type: "",
      warranty: "",
      width: "0",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setProducts((products) => [...products, newProduct]);
    setNewProducts((prev) => new Set([...prev, tempId]));
    setUnsavedChanges((prev) => new Set([...prev, tempId]));
  };

  const handleCellEdit = (id: number, field: string, value: string) => {
    setProducts(
      products.map((p) =>
        p.id === id
          ? {
              ...p,
              [field]: value,
              updated_at: new Date().toISOString(),
            }
          : p,
      ),
    );
    setUnsavedChanges((prev) => new Set([...prev, id]));
  };

  const handleViewProduct = (id: number) => {
    const product = products.find((p) => p.id === id);
    setProductAside(product || null);
    setIsAsideOpen(true);
  };

  const handleEdit = (id: number, field: string) => (value: string) =>
    handleCellEdit(id, field, value);

  const handleSyncItem = async (id: number) => {
    try {
      if (deletedItems.has(id)) {
        if (id > 0) {
          // Only call API for existing products
          await deleteProduct(id);
        }
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setDeletedItems((prev) => {
          const newDeleted = new Set(prev);
          newDeleted.delete(id);
          return newDeleted;
        });
      } else if (newProducts.has(id)) {
        // This is a new product, create it via API
        const product = products.find((p) => p.id === id);
        if (product) {
          const productData = {
            reference: product.reference,
            description: product.description,
            type: product.type,
            ah: product.ah,
            cca: product.cca,
            cube: product.cube,
            long: product.long,
            width: product.width,
            high: product.high,
            warranty: product.warranty,
            updated_at: new Date().toISOString(),
          };
          const response = await createProduct(productData);

          if (response.data) {
            // Replace the temporary product with the one from API
            setProducts((prev) =>
              prev.map((p) =>
                p.id === id
                  ? {
                      ...response.data,
                      created_at: new Date().toISOString(),
                      updated_at: new Date().toISOString(),
                    }
                  : p,
              ),
            );
            setNewProducts((prev) => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        }
      } else {
        // This is an existing product, update it
        const product = products.find((p) => p.id === id);
        if (product) {
          const productData = {
            reference: product.reference,
            description: product.description,
            type: product.type,
            ah: product.ah,
            cca: product.cca,
            cube: product.cube,
            long: product.long,
            width: product.width,
            high: product.high,
            warranty: product.warranty,
          };
          await updateProduct(id, productData);
        }
      }

      setUnsavedChanges((prev) => {
        const newChanges = new Set(prev);
        newChanges.delete(id);
        return newChanges;
      });

      console.log(`Product ${id} synchronized successfully`);
    } catch (error) {
      console.error(`Error synchronizing Product ${id}:`, error);
    }
  };

  const handleDelete = (id: number) => {
    setIdToDelete(id);
    setIsModalOpen(true);
  };

  const handleCancelDelete = () => {
    setIsModalOpen(false);
    setIdToDelete(0);
  };

  const handleConfirmDelete = async () => {
    try {
      await deleteProduct(idToDelete);
      setProducts((prev) => prev.filter((p) => p.id !== idToDelete));
      console.log(`Product ${idToDelete} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting product ${idToDelete}:`, error);
      setDeletedItems((prev) => new Set([...prev, idToDelete]));
    } finally {
      setIsModalOpen(false);
      setIdToDelete(0);
    }
  };

  const TableTitleProps = {
    title: "Product",
    getTotalChanges,
    handleSyncChanges,
    handleDiscardChanges,
    handleAddNew,
  };

  const ModalProps = {
    label: "Delete Product",
    list: products,
    handleCancelDelete,
    handleDelete: handleConfirmDelete,
    isModalOpen,
    idToDelete,
  };

  const BodyProps = {
    products,
    deletedItems,
    unsavedChanges,
    handleEdit,
    handleSyncItem,
    handleViewProduct,
    handleDelete,
  };

  const handleClose = () => setIsAsideOpen(false);

  return (
    <Layout>
      <div className="drawer drawer-end">
        <input
          id="my-drawer-4"
          type="checkbox"
          className="drawer-toggle"
          checked={isAsideOpen}
          readOnly
        />
        <div className="drawer-content">
          <div className="p-6">
            <TableTitle {...TableTitleProps} />
            <div className="overflow-x-auto">
              <table className="table table-zebra w-full">
                <HeadProduct />
                <BodyProduct {...BodyProps} />
              </table>
            </div>
          </div>
        </div>
        {children}
        <ModalProduct {...ModalProps} />
        <AsideProduct handleClose={handleClose} product={productAside} />
      </div>
    </Layout>
  );
};
export { TableProducts };
