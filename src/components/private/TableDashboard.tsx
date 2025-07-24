import type { TableDashboardProps } from "../../models";

import { Eye, Weight, Feather, Car, Package } from "lucide-react";
import { Layout } from "..";
import logo from "../../assets/logo.png";

const TableDashboard: TableDashboardProps = ({ dashboard }) => {
  return (
    <Layout>
      <div className="p-6">
        <div className="text-center mb-8 flex justify-between">
          <img src={logo.src} alt="Colsaisa logo" className="p-2" />
          <h1 className="text-2xl font-bold mb-2">
            Compatibilidades de Bateria
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="stat bg-base-200 rounded-lg">
            <div className="stat-figure text-primary">
              <Package className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Products</div>
            <div className="stat-value text-primary">
              {dashboard.count_products}
            </div>
          </div>

          <div className="stat bg-base-200 rounded-lg">
            <div className="stat-figure text-secondary">
              <Car className="w-8 h-8" />
            </div>
            <div className="stat-title">Total Vehicles</div>
            <div className="stat-value text-secondary">
              {dashboard.count_vehicles}
            </div>
          </div>

          <div className="stat bg-base-200 rounded-lg">
            <div className="stat-figure text-primary">
              {dashboard?.most_searched_brand?.brand ?? ""}
            </div>
            <div className="stat-title">Most Visited Brand</div>
            <div className="stat-value text-primary">
              {dashboard?.most_searched_brand?.frequency ?? 0}
            </div>
          </div>

          <div className="stat bg-base-200 rounded-lg">
            <div className="stat-figure text-secondary">
              {dashboard?.most_searched_type?.type == "light" ? (
                <Feather />
              ) : (
                <Weight />
              )}
            </div>
            <div className="stat-title">Most Product Type</div>
            <div className="stat-value text-secondary">
              {dashboard?.most_searched_type?.frequency ?? 0}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Most Searched Products</h2>
              <div className="space-y-2">
                <div className="space-y-2">
                  {dashboard?.most_searched_products.map(({ el, count }) => (
                    <div
                      key={el.id}
                      className="flex justify-between items-center p-2 bg-base-200 rounded"
                    >
                      <span className="flex justify-center items-center">
                        <span className="pr-2">{count}</span>
                        <Eye width={16} height={16} />
                      </span>
                      <span className="font-medium">{el.description}</span>
                      <span className="text-sm text-base-content/70">
                        {el.reference}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Recent Products</h2>
              <div className="space-y-2">
                {dashboard?.recent_products?.slice(0, 5).map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center p-2 bg-base-200 rounded"
                  >
                    <span className="font-medium">{product.description}</span>
                    <span className="text-sm text-base-content/70">
                      {product.reference}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export { TableDashboard };
