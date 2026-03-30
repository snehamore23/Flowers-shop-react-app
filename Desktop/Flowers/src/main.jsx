import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import OurService from "./views/OurService/OurService";
import Contact from "./views/Contact/Contact";
import NotFound from "./views/NotFound/NotFound";


const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/our-service" element={<OurService />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);



