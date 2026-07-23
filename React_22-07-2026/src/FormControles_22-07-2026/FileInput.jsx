import { useState } from "react";

function FileInput() {
  const [fileName, setFileName] = useState("");

  const handleFile = (e) => {
    setFileName(e.target.files[0]?.name || "");
  };

  return (
    <>
      <input type="file" onChange={handleFile} />
      <p>{fileName}</p>
    </>
  );
}

export default FileInput;