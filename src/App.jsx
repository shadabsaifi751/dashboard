import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./dashboard/NotFound";
import ComingSoon from "./dashboard/ComingSoon";
import HomePage from "./components/HomePage/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ComingSoon />} />
        <Route path="/income" element={<ComingSoon />} />
        <Route path="/promote" element={<ComingSoon />} />
        <Route path="/help" element={<ComingSoon />} />
        <Route path="/customers" element={<ComingSoon />} />
      </Route>
        <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
