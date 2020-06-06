import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FiUpload } from "react-icons/fi";

import "./styles.css";

interface Props {
  onFileUploaded: (file: File) => void;
}

const Dropzone: React.FC<Props> = ({ onFileUploaded }) => {
  const [selectedFileURL, setSelectedFileURL] = useState("");

  const onDrop = useCallback(
    (files) => {
      const file = files[0];
      const fileURL = URL.createObjectURL(file);
      setSelectedFileURL(fileURL);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className='dropzone' {...getRootProps()}>
      <input {...getInputProps()} accept='image/*' />

      {selectedFileURL ? (
        <img src={selectedFileURL} alt='Thumbnail' />
      ) : (
        <p>
          <FiUpload />
          {isDragActive
            ? "Solte a image aqui..."
            : "Arraste e solte um arquivo aqui, ou clique para escolher um."}
        </p>
      )}
    </div>
  );
};

export default Dropzone;
