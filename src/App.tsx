import { Route, Routes } from "react-router-dom";

import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import { Layout } from "./components/Layout/Layout";
import { Contacts } from "./pages/Contacts";
import Entertainment from "./pages/Entertainment/Entertainment";
import EntertainmentCurrent from "./pages/EntertainmentCurrent/EntertainmentCurrent";
import { Home } from "./pages/Home/Home";
import { HouseItem } from "./pages/HouseItem";
import { Houses } from "./pages/Houses";
import { Kitchen } from "./pages/Kitchen";
import { Nearest } from "./pages/Nearest";
import { NotFound } from "./pages/NotFound";
import { Rules } from "./pages/Rules";
import {NewGallery} from "./pages/NewGallery/NewGallery";

function App() {
  return (
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/form" element={<Home />} />
          <Route path="houses" element={<Houses />} />
          <Route path="houses/form" element={<Houses />} />
          <Route path="houses/:id" element={<HouseItem />} />
          <Route path="houses/:id/form" element={<HouseItem />} />
          <Route path="dish" element={<Kitchen />} />
          <Route path="dish/form" element={<Kitchen />} />
          <Route path="rule" element={<Rules />} />
          <Route path="rule/form" element={<Rules />} />
          <Route path="info" element={<Contacts />} />
          <Route path="entertainments" element={<Entertainment />} />
          <Route path="entertainments/form" element={<Entertainment />} />
          <Route path="entertainments/:id" element={<EntertainmentCurrent />} />
          <Route
            path="entertainments/:id/form"
            element={<EntertainmentCurrent />}
          />
          <Route path="galleries" element={<NewGallery />} />
          <Route path="galleries/form" element={<NewGallery />} />
          <Route path="nearests" element={<Nearest />} />
          <Route path="nearests/form" element={<Nearest />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ErrorBoundary>
  );
}

export default App;
