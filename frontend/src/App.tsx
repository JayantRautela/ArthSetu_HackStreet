import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Schemes from "./pages/Schemes";
import SchemeResults from "./pages/SchemeResults";
import SchemeDetails from "./pages/SchemeDetails";
import Chat from "./pages/Chat";
import TaxResults from "./pages/TaxResults";
import TaxForm from "./pages/TaxForm";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schemes" element={<Schemes />} />
      <Route path="/schemes/results" element={<SchemeResults />} />
      <Route path="/schemes/:id" element={<SchemeDetails />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/tax" element={<TaxForm />} />
      <Route path="/tax/results" element={<TaxResults />} />
    </Routes>
  );
}
