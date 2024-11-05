import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import { useEffect } from "react";
import Home from "./Pages/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import Location from "./Pages/Location/Location";
import Footer from "./Component/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import PriceList from "./Pages/PriceList/PriceList";
import MasterPlan from "./Pages/MasterPlan/MasterPlan";
import FloorPlan from "./Pages/FloorPlan/FloorPlan";
import SiteVisit from "./Pages/SiteVisit/SiteVisit";
import Disclaimer from "./Pages/Disclaimer/Disclaimer";
import Amenities from "./Pages/Amenities/Amenities";

function App() {

  const title = "Prestige Siddharth Vihar - Prestige City Ghaziabad Floor Plan Price List Payment Plan"
  const descriptions = "Prestige Siddharth Vihar is located at the prime location of Ghaziabad, it is a residential project with elegant designed homes and airy apartment"

  // remove inspect and copy element
  //  useEffect(() => {
  //   const handleRightClick = (e) => {
  //     e.preventDefault();
  //   };

  //   const handleSelect = (e) => {
  //     e.preventDefault();
  //     return false;
  //   };

  //   document.addEventListener('selectstart', handleSelect);
  //   document.addEventListener('contextmenu', handleRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', handleRightClick);
  //     document.removeEventListener('selectstart', handleSelect);
  //   };
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home title={title} descriptions={descriptions} />} />
          <Route
            path="/amenities"
            exact
            element={
              <Amenities title={"Amenities - The Prestige City"} descriptions={"Amenities"} />} />
          <Route
            path="/gallery"
            exact
            element={
              <Gallery title={"Gallery - The Prestige City"} descriptions={"Gallery"} />} />
          <Route
            path="/price-list"
            exact
            element={
              <PriceList title={"Price List - The Prestige City"} descriptions={"Price List"} />} />
          <Route
            path="/master-plan"
            exact
            element={
              <MasterPlan title={"Master Plan - The Prestige City"} descriptions={"Master Plan"} />} />
          <Route
            path="/floor-plan"
            exact
            element={
              <FloorPlan title={"Master Plan - The Prestige City"} descriptions={"Master Plan"} />} />
          <Route
            path="/location"
            exact
            element={
              <Location title={"Location - The Prestige City"} descriptions={"Location"} />} />
          <Route
            path="/site-visit"
            exact
            element={
              <SiteVisit title={"Site Visit - The Prestige City"} descriptions={"Site Visit"} />} />
          <Route
            path="/disclaimer"
            exact
            element={
              <Disclaimer title={"Disclaimer - The Prestige City"} descriptions={"Disclaimer"} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
