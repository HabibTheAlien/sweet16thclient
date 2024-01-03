import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-diraction: column;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 60px;
`;

const Turing = () => {
  const [key, setKey] = useState("");
  const [data, setData] = useState("");
  const [output, setOutput] = useState("");

  function encryptData(data, key) {
    let encryptedData = "";
    for (let i = 0; i < data.length; i++) {
      const charCode = data.charCodeAt(i) ^ key.charCodeAt(i % key.length);
      encryptedData += String.fromCharCode(charCode);
    }
    return encryptedData;
  }

  function decryptData(encryptedData, key) {
    return encryptData(encryptedData, key); // XOR cipher is symmetric, so decryption is the same as encryption
  }

  // Example usage:
  const originalData = "Hello, this is a secret message!";
  const encryptionKey = "myEncryptionKey";

  //   const encryptedData = encryptData(originalData, encryptionKey);
  //   console.log("Encrypted data:", encryptedData);

  //   const decryptedData = decryptData(encryptedData, encryptionKey);
  //   console.log("Decrypted data:", decryptedData);
  const encript = () => {
    setOutput(encryptData);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "90%" }}>
      <input
        type="text"
        onChange={(e) => setKey(e.target.value)}
        placeholder="Key"
      />
      <input
        onChange={(e) => setData(e.target.value)}
        style={{ margin: "10px 0px", padding: "10px" }}
        type="text"
        placeholder="Data"
      />
      <button onClick={encript}>Submit</button>
      {output && <p>{output}</p>}
    </div>
  );
};

export default Turing;
