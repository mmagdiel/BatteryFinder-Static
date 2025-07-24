import type { LayoutProps } from "../models";

const Header: LayoutProps = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-primary text-white shadow-md">
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">
                Compatibilidades de Bateria
              </h1>
            </div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export { Header };
