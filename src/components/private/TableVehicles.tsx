import type { TableVehiclesProps, VehicleType } from "../../models";
import type { Vehicles, Vehicle } from "../../models";

import { deleteProduct, updateProduct, createProduct } from "../../services";
import { useState, useEffect } from "react";
import { ModalVehicle } from "./table";
import { Layout } from "./Layout";
import { HeadVehicle, BodyVehicle, AsideVehicle } from "./table";
import { TableTitle } from "./TableTitle";

const TableVehicles: TableVehiclesProps = ({ list, children }) => {
  const [idToDelete, setIdToDelete] = useState<number>(0);
  const [vehicles, setVehicles] = useState<Vehicles>(list);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isAsideOpen, setIsAsideOpen] = useState<boolean>(false);
  const [vehicleAside, setVehicleAside] = useState<Vehicle | null>(null);
  const [unsavedChanges, setUnsavedChanges] = useState<Set<number>>(new Set());
  const [deletedItems, setDeletedItems] = useState<Set<number>>(new Set());
  const [newVehicles, setNewVehicles] = useState<Set<number>>(new Set());

  useEffect(() => {
    setVehicles(list);
  }, [list]);

  const getTotalChanges = () => unsavedChanges.size + deletedItems.size;

  const handleSyncChanges = async () => {
    try {
      const deletePromises = Array.from(deletedItems)
        .filter((id) => id > 0) // Only delete existing products from API
        .map((id) => deleteProduct(id));

      const createPromises = Array.from(newVehicles)
        .filter((id) => !deletedItems.has(id))
        .map(async (id) => {
          const vehicle = vehicles.find((p) => p.id === id);
          if (vehicle) {
            const vehicleData = {
              brand: vehicle.brand,
              pattern: vehicle.pattern,
              nb: vehicle.nb,
              gold: vehicle.gold,
              gold2: vehicle.gold2,
              red: vehicle.red,
              red2: vehicle.red2,
              agm: vehicle.agm,
              efb: vehicle.efb,
              efb2: vehicle.efb2,
              velko: vehicle.velko,
              velko2: vehicle.velko2,
              cube: vehicle.cube,
              batteryNumber: vehicle.batteryNumber,
              confirmation: vehicle.confirmation,
              type: vehicle.type,
              updated_at: new Date().toISOString(),
            };
            const response = await createProduct(vehicleData);
            if (response.data) {
              setVehicles((prev) =>
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
        .filter((id) => !deletedItems.has(id) && !newVehicles.has(id))
        .map((id) => {
          const vehicle = vehicles.find((p) => p.id === id);
          if (vehicle) {
            const vehicleData = {
              brand: vehicle.brand,
              pattern: vehicle.pattern,
              nb: vehicle.nb,
              gold: vehicle.gold,
              gold2: vehicle.gold2,
              red: vehicle.red,
              red2: vehicle.red2,
              agm: vehicle.agm,
              efb: vehicle.efb,
              efb2: vehicle.efb2,
              velko: vehicle.velko,
              velko2: vehicle.velko2,
              cube: vehicle.cube,
              batteryNumber: vehicle.batteryNumber,
              confirmation: vehicle.confirmation,
              type: vehicle.type,
            };
            return updateProduct(id, vehicleData);
          }
          return Promise.resolve();
        });

      await Promise.all([
        ...deletePromises,
        ...createPromises,
        ...updatePromises,
      ]);

      setVehicles((prev) => prev.filter((p) => !deletedItems.has(p.id)));
      setDeletedItems(new Set());
      setUnsavedChanges(new Set());
      setNewVehicles(new Set());
      console.log(`All products synchronized successfully`);
    } catch (error) {
      console.error(`Error synchronizing products:`, error);
    }
  };

  const handleDiscardChanges = () => {
    setVehicles((prev) => prev.filter((p) => !newVehicles.has(p.id)));
    setUnsavedChanges(new Set());
    setDeletedItems(new Set());
    setNewVehicles(new Set());
  };

  const handleAddNew = () => {
    const tempId = -(Math.max(...vehicles.map((p) => Math.abs(p.id)), 0) + 1); // Use negative ID for new products
    const newVehicle = {
      id: tempId,
      brand: "",
      pattern: "",
      nb: "",
      gold: "",
      gold2: "",
      red: "",
      red2: "",
      agm: "",
      efb: "",
      efb2: "",
      velko: "",
      velko2: "",
      cube: "",
      batteryNumber: "",
      confirmation: "",
      type: "heavy" as VehicleType,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    setVehicles((vehicles) => [...vehicles, newVehicle]);
    setNewVehicles((prev) => new Set([...prev, tempId]));
    setUnsavedChanges((prev) => new Set([...prev, tempId]));
  };

  const handleCellEdit = (id: number, field: string, value: string) => {
    setVehicles(
      vehicles.map((p) =>
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

  const handleViewVehicle = (id: number) => {
    const vehicle = vehicles.find((p) => p.id === id);
    setVehicleAside(vehicle || null);
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
        setVehicles((prev) => prev.filter((p) => p.id !== id));
        setDeletedItems((prev) => {
          const newDeleted = new Set(prev);
          newDeleted.delete(id);
          return newDeleted;
        });
      } else if (newVehicles.has(id)) {
        // This is a new product, create it via API
        const vehicle = vehicles.find((p) => p.id === id);
        if (vehicle) {
          const vehicleData = {
            brand: vehicle.brand,
            pattern: vehicle.pattern,
            nb: vehicle.nb,
            gold: vehicle.gold,
            gold2: vehicle.gold2,
            red: vehicle.red,
            red2: vehicle.red2,
            agm: vehicle.agm,
            efb: vehicle.efb,
            efb2: vehicle.efb2,
            velko: vehicle.velko,
            velko2: vehicle.velko2,
            cube: vehicle.cube,
            batteryNumber: vehicle.batteryNumber,
            confirmation: vehicle.confirmation,
            type: vehicle.type,
            updated_at: new Date().toISOString(),
          };
          const response = await createProduct(vehicleData);

          if (response.data) {
            // Replace the temporary product with the one from API
            setVehicles((prev) =>
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
            setNewVehicles((prev) => {
              const newSet = new Set(prev);
              newSet.delete(id);
              return newSet;
            });
          }
        }
      } else {
        // This is an existing product, update it
        const vehicle = vehicles.find((p) => p.id === id);
        if (vehicle) {
          const vehicleData = {
            brand: vehicle.brand,
            pattern: vehicle.pattern,
            nb: vehicle.nb,
            gold: vehicle.gold,
            gold2: vehicle.gold2,
            red: vehicle.red,
            red2: vehicle.red2,
            agm: vehicle.agm,
            efb: vehicle.efb,
            efb2: vehicle.efb2,
            velko: vehicle.velko,
            velko2: vehicle.velko2,
            cube: vehicle.cube,
            batteryNumber: vehicle.batteryNumber,
            confirmation: vehicle.confirmation,
            type: vehicle.type,
          };
          await updateProduct(id, vehicleData);
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
      setVehicles((prev) => prev.filter((p) => p.id !== idToDelete));
      console.log(`Vehicles ${idToDelete} deleted successfully`);
    } catch (error) {
      console.error(`Error deleting vehicle ${idToDelete}:`, error);
      setDeletedItems((prev) => new Set([...prev, idToDelete]));
    } finally {
      setIsModalOpen(false);
      setIdToDelete(0);
    }
  };

  const TableTitleProps = {
    title: "Vehicles",
    getTotalChanges,
    handleSyncChanges,
    handleDiscardChanges,
    handleAddNew,
  };

  const ModalProps = {
    label: "Delete Vehicles",
    list: vehicles,
    handleCancelDelete,
    handleDelete: handleConfirmDelete,
    isModalOpen,
    idToDelete,
  };

  const BodyProps = {
    vehicles,
    deletedItems,
    unsavedChanges,
    handleEdit,
    handleSyncItem,
    handleViewVehicle,
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
              <table className="table table-zebra w-full overflow-y-auto">
                <HeadVehicle />
                <BodyVehicle {...BodyProps} />
              </table>
            </div>
          </div>
        </div>
        {children}
        <ModalVehicle {...ModalProps} />
        <AsideVehicle handleClose={handleClose} vehicle={vehicleAside} />
      </div>
    </Layout>
  );
};

export { TableVehicles };
