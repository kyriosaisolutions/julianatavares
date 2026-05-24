import { Routes, Route } from "react-router-dom";
import RootLayout from "./routes/__root";
import HomePage from "./routes/index";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
}
