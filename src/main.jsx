import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Home,
  About,
  InvestmentMentorship,
  DataServices,
  CloudHosting,
  Outsourcing,
  TechnologyServices,
  OfficeWorkspace,
  WhyMarkOne,
  Contact,
} from "./pages";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="investment-and-mentorship"
        element={<InvestmentMentorship />}
      />
      <Route path="data-services" element={<DataServices />} />
      <Route path="cloud-and-hosting" element={<CloudHosting />} />
      <Route path="outsourcing" element={<Outsourcing />} />
      <Route path="technology-services" element={<TechnologyServices />} />
      <Route path="office-and-workspace" element={<OfficeWorkspace />} />
      <Route path="why-mark-one" element={<WhyMarkOne />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
