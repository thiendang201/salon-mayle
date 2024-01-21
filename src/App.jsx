import { Route, Routes } from "react-router-dom";
import { Layout } from "src/layout/Layout";
import { Services } from "src/features/services/Services";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={null} />
        <Route path="news" element={null} />
        <Route path="services" element={<Services />} />
        <Route path="services2" element={<Services />} />
      </Route>
    </Routes>
  );
}

export default App;
