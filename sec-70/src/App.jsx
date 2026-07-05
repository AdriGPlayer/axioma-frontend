
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayOutHome from "./components/home/LayOutHome";
function App() {
  return (
      <BrowserRouter> 
        <div className="App">
          <Routes>
            <Route path="/" element={<LayOutHome />} />
          </Routes>
        </div>
      </BrowserRouter>

      
    
    
  )
}

export default App
