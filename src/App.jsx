import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./dashboard/Home";
import NotFound from "./dashboard/NotFound";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/product" element={<Home />} />
        <Route path="/income" element={<Home />} />
        <Route path="/promote" element={<Home />} />
        <Route path="/help" element={<Home />} />
        <Route path="/customers" element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
