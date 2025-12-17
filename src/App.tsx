import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IndexHome from "./Pages/Home/Index";
import IndexDevelopment from "./Pages/Development/Index";
import IndexDataAnalyse from "./Pages/DataAnalyse/Index";
import IndexIntegrations from "./Pages/Integrations/Index";
import IndexAbout from "./Pages/About/Index";

function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<IndexHome />} />
        <Route path="/development" element={<IndexDevelopment />} />

        <Route path="/analytics" element={<IndexDataAnalyse  />} />
  
        <Route path="/integrations" element={<IndexIntegrations  />} />

        <Route path="/about" element={<IndexAbout  />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;