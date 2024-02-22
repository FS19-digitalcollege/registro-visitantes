import { useState } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Ways from "./routes";

import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/md-light-indigo/theme.css"

const App = () => {
  const [estaLogado, setEstaLogado] = useState(true);
  const contexts = {
    estaLogado,
    setEstaLogado
  }
  return (
    <AuthContext.Provider value={contexts}>
      <Ways />
    </AuthContext.Provider>
  );
}

export default App;