import type { AsideVehicleProps } from "../../../models";

const AsideVehicle: AsideVehicleProps = ({ vehicle, handleClose }) => {
  return (
    <div className="drawer-side z-99" style={{ width: "calc(100% - 16px)" }}>
      <label
        htmlFor="my-drawer-4"
        aria-label="close sidebar"
        className="drawer-overlay"
        onClick={handleClose}
      ></label>
      <div className="bg-base-200 text-base-content min-h-full w-96 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">Vehicle Details</h3>
          <button onClick={handleClose} className="btn btn-sm btn-circle">
            ✕
          </button>
        </div>
        {vehicle && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Brand</label>
              <p className="text-sm bg-base-100 p-2 rounded">
                {vehicle.brand ?? "-"}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Pattern</label>
              <p className="text-sm bg-base-100 p-2 rounded">
                {vehicle.pattern ?? "-"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Type</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.type ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirmation
                </label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.confirmation ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">
                  # Battery
                </label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.batteryNumber ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Cube</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.cube ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">NB</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.nb ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Agm</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.agm ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Gold</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.gold ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Gold 2</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.gold2 ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Red</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.red ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Red 2</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.red2 ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Efb</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.efb ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Efb 2</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.efb2 ?? "-"}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1">Velko</label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.velko ?? "-"}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">
                  Velko 2
                </label>
                <p className="text-sm bg-base-100 p-2 rounded">
                  {vehicle.velko2 ?? "-"}
                </p>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Created At
              </label>
              <p className="text-xs bg-base-100 p-2 rounded">
                {new Date(vehicle.created_at).toLocaleString()}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Updated At
              </label>
              <p className="text-xs bg-base-100 p-2 rounded">
                {new Date(vehicle.updated_at).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { AsideVehicle };
