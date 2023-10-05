import React, { useState } from "react";
import "./App.css";
import PrintScreen from "./pages/Print";
import { Print } from "./utils/print";
const App = () => {
  const [showPage, setShowPage] = useState(false);
  const printPage = async () => {
    setShowPage(true);
    setTimeout(() => {
      Print();
    }, 3000);
  };
  return (
    <>
      {!showPage ? (
        <div
          style={{
            display: "flex",
            height: "100vh",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={printPage}
            style={{
              background: "black",
              display: "flex",
              alignItems: "center",
              borderRadius: 10,
              padding: 10,
            }}
          >
            <img
              src={require("../src/assets/printer.png")}
              alt="print"
              style={{ height: 20, width: 20 }}
            />
            <span style={{ color: "white", marginLeft: 10, fontSize: 14 }}>
              Print
            </span>
          </button>
        </div>
      ) : (
        <PrintScreen />
      )}
    </>
  );
};

export default App;
