import type { BatteryResultsProps } from "../../models";
import { BatteryCard } from "./BatteryCard";

const BatteryResults: BatteryResultsProps = ({ batteries }) => {
  return (
    <div className="bg-blue-100 p-6 rounded-lg shadow-md mt-6 animate-fade-in">
      <h2 className="text-xl font-bold text-gray-800 mb-6">
        Resultados de Baterías
      </h2>

      <div className="flex flex-col">
        {batteries.map((battery) => (
          <BatteryCard key={battery.reference} battery={battery} />
        ))}
      </div>
    </div>
  );
};

export { BatteryResults };
