import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { MantineProvider, createTheme } from "@mantine/core";

import Home from "./pages/Home.tsx";
import Features from "./pages/Features.tsx";
import Gallery from "./pages/Gallery.tsx";
import HireDetails from "./pages/HireDetails.tsx";
import Events from "./pages/Events.tsx";
import Contact from "./pages/Contact.tsx";

// @ts-expect-error ignore type error
import "@fontsource/gilda-display";
// @ts-expect-error ignore type error
import "@fontsource/alex-brush";

import "@mantine/core/styles.css";
import "./global.css";

const theme = createTheme({
  white: "#f4f4f4",
  black: "#1c1f21",
  fontFamily: "Gilda Display, serif",
  headings: { fontFamily: "Alex Brush, cursive" },
  components: {
    Button: {
      styles: {
        root: { color: "#f4f4f4", background: "#2A2D2E" },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/features" element={<Features />} />

          <Route path="/gallery/space" element={<Gallery />} />
          <Route path="/gallery/art" element={<Gallery />} />

          <Route path="/hire-details" element={<HireDetails />} />

          <Route index path="/events" element={<Events />} />
          <Route path="/events/workshops" element={<Events />} />
          <Route path="/events/life-drawing" element={<Events />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </MantineProvider>
  </StrictMode>,
);
