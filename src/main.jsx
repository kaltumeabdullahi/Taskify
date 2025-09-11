import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "./index.css";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/contact.jsx";
import Services from "./pages/services.jsx";
import Navbar from "./components/navbar/navbar.jsx";
import { AppProvider } from "./state/app-context.jsx";
import TodoApp from "./todo-app.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/todo" element={<TodoApp />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  </StrictMode>
);
