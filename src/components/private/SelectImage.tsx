import type { SelectImageProps } from "../../models";
import type { HandleVoid, HandleEventVoid } from "../../models";

import { TOKEN, configToken } from "../../models";
import { useLocalStorageState } from "ahooks";
import { updateImage } from "../../services";
import { addBearer } from "../../utils";
import { useState } from "react";

const SelectImages: SelectImageProps = ({ id, images }) => {
  const [token, _] = useLocalStorageState(TOKEN, configToken);
  const [idWithImage, setIdWithImage] = useState<string>("");
  const [idWithOutImage, setIdWithOutImage] = useState<string>("");
  const [isWithBtn, setIsWithBtn] = useState<boolean>(true);
  const [isWithOutBtn, setIsWithOutBtn] = useState<boolean>(true);

  const { withImage, withOutImage } = images;
  const handleSelectWithOut: HandleEventVoid = (e) => {
    setIdWithOutImage(e.currentTarget.value);
    setIsWithOutBtn(false);
  };
  const handleSelectWith: HandleEventVoid = (e) => {
    setIdWithImage(e.currentTarget.value);
    setIsWithBtn(false);
  };
  const handleClickWith: HandleVoid = async () => {
    try {
      const body = { id: idWithImage };
      const header = { Authorization: addBearer(token) };
      await updateImage(id, body, header);
      window.location.href = "/auth/images";
    } catch (error) {
      console.error(`Error synchronizing products:`, error);
    }
  };
  const handleClickWithOut: HandleVoid = async () => {
    try {
      const body = { id: idWithOutImage };
      const header = { Authorization: addBearer(token) };
      await updateImage(id, body, header);
      window.location.href = "/auth/images";
    } catch (error) {
      console.error(`Error synchronizing products:`, error);
    }
  };

  return (
    <>
      {withOutImage.length > 0 && (
        <div className="flex justify-between">
          <label className="block text-sm font-medium text-gray-700 w-full">
            <select
              value={idWithOutImage}
              onChange={handleSelectWithOut}
              className="select select-bordered"
            >
              <option value="" disabled hidden>
                Asociala a un producto
              </option>
              {withOutImage.map((item) => (
                <option key={`${item.id}`} value={item.id}>
                  {item.reference}
                </option>
              ))}
            </select>
          </label>
          <button
            className="ml-2 w-36 px-4 py-2 bg-success text-white rounded-lg hover:bg-blue-600 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
            onClick={handleClickWithOut}
            disabled={isWithOutBtn}
          >
            Asignado
          </button>
        </div>
      )}
      <div className="flex justify-between">
        <label className="block text-sm font-medium text-gray-700 w-full">
          <select
            value={idWithImage}
            onChange={handleSelectWith}
            className="select select-bordered "
          >
            <option value="" disabled hidden>
              Cambia la imagen del producto
            </option>
            {withImage.map((item) => (
              <option key={`${item.id}`} value={item.id}>
                {item.reference}
              </option>
            ))}
          </select>
        </label>
        <button
          className="ml-2 w-36 px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-600 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
          onClick={handleClickWith}
          disabled={isWithBtn}
        >
          Cambiando
        </button>
      </div>
    </>
  );
};

export { SelectImages };
