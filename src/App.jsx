import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./dashboard/Home";
import NotFound from "./dashboard/NotFound";
import ComingSoon from "./dashboard/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ComingSoon />} />
        <Route path="/income" element={<ComingSoon />} />
        <Route path="/promote" element={<ComingSoon />} />
        <Route path="/help" element={<ComingSoon />} />
        <Route path="/customers" element={<ComingSoon />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
