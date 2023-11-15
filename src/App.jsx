import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lottie from "lottie-react";
import underConstruction from "./assets/underConstruction.json";
function App() {
  return (
    <>
      <div
        style={{
          width: "30rem",
        }}
      >
        <Lottie animationData={underConstruction} loop={true} />
      </div>
    </>
  );
}

export default App;
