import { useVehicleStore } from "../../stores";
import type { SelectProps } from "../../models";
import { getVehicleMapper } from "../../utils";

const Select: SelectProps = ({ type, list }) => {
  const { brand, handleBrand } = useVehicleStore();
  const label = getVehicleMapper(type);
  return (
    <div className="mb-4">
      <label
        htmlFor={label}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {`Marca del vehículo ${label}`}
      </label>
      <select
        id={label}
        value={brand}
        onChange={handleBrand}
        className="select select-bordered w-full"
      >
        <option disabled={true} />
        {list.map((item, key) => (
          <option key={`${key}_${item}`}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export { Select };
