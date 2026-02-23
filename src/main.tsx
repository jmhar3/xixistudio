import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider } from "@mantine/core";

import Home from "./pages/Home.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";

import "@mantine/core/styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
