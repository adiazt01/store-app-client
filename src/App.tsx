import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./views/landing/LandingPage";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/app" />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
