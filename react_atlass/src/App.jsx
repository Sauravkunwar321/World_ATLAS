import "./App.css";
import React from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home";
import { Error } from "./Pages/Error";
import { CountryDetails } from "./Components/CountryDetails";
import App from "./Components/AppLayout";

import { Routes, Route,} from "react-router";



const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Country" element={<Country />} />
        <Route path="Country/:id" element={<CountryDetails />} />
      </Route>

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
