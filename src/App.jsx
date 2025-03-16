import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Service from "./components/Service/Service";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="service" element={<Service />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
