import { Brand } from "../../hocs/Brand";
import { VehicleTypes } from "../../models";
import { useVehicleStore } from "../../stores";
import { toPascalCase, getVehicleMapper } from "../../utils";
import { Pattern } from "../../hocs/Pattern";
import { Button } from "./Button";
import { Weight, Feather } from "lucide-react";

const [heavy, light] = VehicleTypes;
const VehicleSelector = () => {
  const { type, brand, pattern, handleType } = useVehicleStore();
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md animate-fade-in">
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
        Encuentra la batería adecuada para tu vehículo
      </h2>
      <div className="tabs tabs-lift">
        <label className="tab bg-indigo-200" onClick={handleType(light)}>
          <input type="radio" name="my_tabs_4" />
          <Feather width={24} height={24} />
          {toPascalCase(getVehicleMapper(light))}
        </label>
        {type === light && (
          <div className="tab-content bg-base-100 border-base-300 p-6 bg-">
            <Brand type={light} />
            {brand && <Pattern brand={brand} type={type} />}
            {pattern && <Button label="sdfas" />}
          </div>
        )}

        <label className="tab bg-indigo-200" onClick={handleType(heavy)}>
          <input type="radio" name="my_tabs_4" defaultChecked />
          <Weight width={24} height={24} />
          {toPascalCase(getVehicleMapper(heavy))}
        </label>
        {type === heavy && (
          <div className="tab-content bg-base-100 border-base-300 p-6">
            <Brand type={heavy} />
            {brand && <Pattern brand={brand} type={type} />}
            {pattern && <Button label="sdfas" />}
          </div>
        )}
      </div>
    </div>
  );
};

export { VehicleSelector };

/*
            getBrand={getHeavyBrands}
            getModels={getHeavyModels}
            getRefs={getHeavyRefs}
*/
