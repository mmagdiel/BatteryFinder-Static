import type { BatteryCardProps } from "../../models";
import { urlShowImageBy } from "../../utils";

const BatteryCard: BatteryCardProps = ({ battery }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/20 my-3">
      <div className="mb-4">
        <header>
          <h3 className="font-bold text-primary">{battery.description}</h3>
        </header>
        <div className="flex flex-wrap items-start md:items-center">
          <aside className="min-w-3xs">
            <img
              width={280}
              alt={battery.description}
              src={`${urlShowImageBy(battery.image)}`}
            />
          </aside>
          <main className="p-2 md:px-4 grow">
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Referencia: </span>
              {battery.reference}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Garantia: </span>
              {battery.warranty}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Tipo: </span>
              {battery.type}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Caja: </span>
              {battery.cube}
            </p>
          </main>
          <article className="p-2 md:px-4 grow">
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Largo: </span>
              {battery.high}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Ancho: </span>
              {battery.high}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">Alto: </span>
              {battery.long}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">AH: </span>
              {battery.ah}
            </p>
            <p className="text-gray-700">
              <span className="font-bold text-gray-900">CCA: </span>
              {battery.cca}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export { BatteryCard };
