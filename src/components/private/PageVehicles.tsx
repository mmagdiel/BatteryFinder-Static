import { useState } from "react";
import { AuthVehicles } from "../../hocs";

//import CircularLinkedList from "namastey-circular-linked-list";
//const list = new CircularLinkedList([1, 2, 3, 4, 5, 6, 7, 8]);
// import { addBearer } from "../utils";
// import { queryAuth } from "../services"
const PageVehicles = () => {
  const [page, setState] = useState<number>(1);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  //const [isDisable, setIsDisable] = useState<boolean>(false);
  const handleNext = () => setState((page) => page + 1);
  const handlePrev = () => setState((page) => page - 1);
  const handleDisable = () => setIsDisable(true);
  const handleAble = () => setIsDisable(false);
  //const handleDisable = () => setIsDisable(true);
  // usePublicPage
  //  const [token, _] = usePublicPage();
  //  const bearerToken = addBearer(token);
  //  const fetch = queryAuth(bearerToken);
  //  return <AuthProducts fetch={fetch} />;
  return (
    <AuthVehicles
      params={page}
      handleDisable={handleDisable}
      handleAble={handleAble}
    >
      <div className="flex items-center justify-center gap-4 px-4">
        <button
          onClick={handlePrev}
          disabled={page === 1}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          Previous Page
        </button>
        <span className="px-4 py-2 bg-gray-100 rounded-lg font-medium text-gray-700">
          Page {page}
        </span>
        <button
          onClick={handleNext}
          disabled={isDisable}
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          Next Page
        </button>
      </div>
    </AuthVehicles>
  );
};

export { PageVehicles };
