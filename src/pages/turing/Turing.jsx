import React, { useState } from "react";
import "./turing.css";

function Turing() {
  const [originalData, setOriginalData] = useState("");
  const [encryptionKey, setEncryptionKey] = useState("");
  const [encryptedData, setEncryptedData] = useState("");

  const encryptData = () => {
    let encryptedResult = "";
    for (let i = 0; i < originalData.length; i++) {
      const charCode =
        originalData.charCodeAt(i) ^
        encryptionKey.charCodeAt(i % encryptionKey.length);
      encryptedResult += String.fromCharCode(charCode);
    }
    setEncryptedData(encryptedResult);
  };

  return (
    <div className="turingContainer">
      <textarea
        type="text"
        value={originalData}
        className="data"
        rows="10"
        placeholder="Data"
        onChange={(e) => setOriginalData(e.target.value)}
      />

      <input
        type="text"
        className="key"
        placeholder="Key"
        value={encryptionKey}
        onChange={(e) => setEncryptionKey(e.target.value)}
      />
      <button className="btn" onClick={encryptData}>
        Submit
      </button>
      {encryptedData && (
        <div className="output">
          <strong>Output:</strong>
          <p>{encryptedData}</p>
        </div>
      )}
    </div>
  );
}

export default Turing;
