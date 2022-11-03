import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Counter from "./components/counter/Counter";
import { AppProvider } from "./context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
<<<<<<< HEAD
  </React.StrictMode>, // React.StrictMode içine ne yazılırsa proje oradan başlar.
  // providrer içine aldığımız app.js children oluyor
=======
  </React.StrictMode> // React.StrictMode içine ne yazılırsa proje oradan başlar.
  
>>>>>>> b5a91f59f293fd8aa7daa0adb4348af7f61ea6e3
);
