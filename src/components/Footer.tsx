import logo from "../assets/logo.png";


const Footer = () => {
  return (
    <footer className="border-primary text-white mt-12">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <img src={logo.src} alt="Colsaisa logo" className="p-2" />
        </div>

        <div className="border-t border-primary mt-8 pt-6 text-center text-neutral-300">
          <p className="text-gray-700">
            &copy; {new Date().getFullYear()} BatteryFinder. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
