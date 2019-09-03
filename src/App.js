import React, { Component } from "react";
import Bookings from "./Bookings";
import "./App.css";
import Heading from "./components/Heading";
import TouristInfoCards from "./components/TouristInfoCards";
import Footer from "./components/Footer";
import Search from "./Search";

class App extends Component {
  render() {
    const footerArray = [
      "123 Fake Street, London, E1 4UD",
      "hello@fakehotel.com",
      "0123 456789"
    ];
    return (
      <div className="App">
        <Heading headingHeader="CYF HOTEL" />
        <Search />
        <div className="cards-container">
          <TouristInfoCards
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg/1000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall.jpg"
            cityName="London"
            link="https://www.visitlondon.com/"
            ButtonName="Click Here"
          />
          <TouristInfoCards
            source="https://www.visitmanchester.com/imageresizer/?image=%2Fdmsimgs%2Fchristmas-markets-at-albert-square_1__441639496.jpg&action=ProductDetailFullWidth2"
            link="https://www.visitmanchester.com//"
            cityName="Manchester"
            ButtonName="Click Here"
          />
          <TouristInfoCards
            source="https://www.visitbritain.com/sites/default/files/styles/consumer_campaigns_hero_mobile/public/paragraphs_bundles/hero/glasgow_riverfront_2.jpg?itok=dwP6arDN"
            link="https://peoplemakeglasgow.com/"
            cityName="Glasgow"
            ButtonName="Click Here"
          />
        </div>
        <Bookings />
        <Footer array={footerArray} />
      </div>
    );
  }
}

export default App;
