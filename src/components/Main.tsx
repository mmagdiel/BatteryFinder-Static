import { Batteries } from "../hocs";
import { useVehicleStore } from "../stores";
import { VehicleSelector, EmptyCard, Header } from ".";
import { Footer } from "./Footer";

const Main = () => {
  const { isCard, pattern } = useVehicleStore();
  return (
    <>
      <Header>
        <main className="flex-grow container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <VehicleSelector />
          </div>
          <div className="max-w-4xl mx-auto mt-4">
            {!pattern && isCard && <EmptyCard />}
            {pattern && isCard && <Batteries paths={pattern} />}
          </div>
        </main>
      </Header>
      <Footer />
    </>
  );
};

export { Main };
