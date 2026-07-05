import { Routes, Route, BrowserRouter } from "react-router-dom";
import LayOutLogin from "./login/LayOutLogin";
import PanelLayOut from "./minerva/components/PanelLayOut";



function App() {
  return (

    <BrowserRouter>
    <Routes>

      <Route path="/" element={<LayOutLogin />} />
      <Route path="/minerva" element={<PanelLayOut/>}/>
     

    </Routes>
    </BrowserRouter>
  );
}

export default App;