import type { ButtonProps } from "../../models";

import { useVehicleStore } from "../../stores";
import { toPascalCase } from "../../utils";

const Button: ButtonProps = ({ label }) => {
  const { handelIsCard } = useVehicleStore();
  return (
    <button
      value="sdfasdf"
      onClick={handelIsCard}
      className="btn btn-primary w-full mt-2 text-white"
    >
      {`Buscar Baterías ${toPascalCase(label)}`}
    </button>
  );
};

export { Button };
