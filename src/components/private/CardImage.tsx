import type { CardImageProps } from "../../models";
import type { ChangeEvent } from "react";

import { urlImagesBy, addBearer } from "../../utils";
import { TOKEN, configToken } from "../../models";
import { useLocalStorageState } from "ahooks";
import { useState, useEffect } from "react";
import { Upload } from "lucide-react";

const CardImage: CardImageProps = ({ label }) => {
  const [token, _] = useLocalStorageState(TOKEN, configToken);
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");
  const [fileDataURL, setFileDataURL] = useState<string>("");

  useEffect(() => {
    let fileReader: FileReader | undefined;
    let isCancel = false;
    if (file) {
      fileReader = new FileReader();
      fileReader.onload = (e) => {
        const result = e.target?.result;
        if (result && !isCancel && typeof result == "string") {
          setFileDataURL(result);
        }
      };
      fileReader.readAsDataURL(file);
    }
    return () => {
      isCancel = true;
      if (fileReader && fileReader.readyState === 1) {
        fileReader.abort();
      }
    };
  }, [file]);

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target?.files?.[0] ?? null;
    setFile(selectedFile);
  };

  const handleClick = () => {
    const formData = new FormData();
    formData.append("image", file as Blob);

    fetch(urlImagesBy(), {
      method: "POST",
      body: formData,
      headers: { Authorization: addBearer(token) },
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
        window.location.href = "/auth/images";
      });
  };

  return (
    <div className="card bg-base-100 shadow-xl transition-all duration-200">
      <figure className="px-4 pt-4">
        <label
          id="file-input"
          className="w-full h-64 bg-base-200 rounded-lg flex flex-col items-center justify-center relative overflow-hidden"
        >
          <input type="file" onChange={handleFile} className="hidden" />
          {fileDataURL && <img src={fileDataURL} />}
          <Upload className="w-12 h-12 mx-auto text-base-content/30 mb-2" />
        </label>
      </figure>
      <div className="card-body">
        <h3>{message}</h3>
        <button
          className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-600 transition-colors disabled:cursor-not-allowed disabled:bg-gray-300"
          onClick={handleClick}
          disabled={!fileDataURL}
        >
          {label}
        </button>
      </div>
    </div>
  );
};

export { CardImage };
