import { useState } from "react";
import { AuthVehicles } from "../../hocs";

const PageVehicles = () => {
  const [page, setState] = useState<number>(1);
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const handleNext = () => setState((page) => page + 1);
  const handlePrev = () => setState((page) => page - 1);
  const handleDisable = () => setIsDisable(true);
  const handleAble = () => setIsDisable(false);

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
