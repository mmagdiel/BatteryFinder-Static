import type { ChooseProps } from "../../models";

import { toPascalCase } from "../../utils";
import { useVehicleStore } from "../../stores";

const Choose: ChooseProps = ({ brand, patterns }) => {
  const { pattern, handlePattern } = useVehicleStore();
  const label = toPascalCase(brand);
  return (
    <div className="mb-4">
      <label
        htmlFor={`${label}`}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {`Modelo de la marca ${label}`}
      </label>
      <select
        id={`${label}`}
        value={pattern}
        onChange={handlePattern}
        className="select select-bordered w-full"
      >
        <option disabled={true} />
        {patterns.map((item, key) => (
          <option
            key={`${key}_${item}`}
            value={`/reference-products/${item.gold}/${item.gold2}/${item.red}/${item.red2}/${item.agm}/${item.efb}/${item.efb2}/${item.velko}/${item.velko2}`}
          >
            {item.pattern}
          </option>
        ))}
      </select>
    </div>
  );
};

export { Choose };
