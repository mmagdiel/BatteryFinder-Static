import logo from "../../assets/logo.png";

const HeaderLogin = () => {
  return (
    <div className="flex flex-col text-center mb-6 ">
      <img src={logo.src} alt="Colsaisa logo" className="p-4" />
      <h3 className="text-base-content/70 mt-2">Sign in to your account</h3>
    </div>
  );
};

export { HeaderLogin };
