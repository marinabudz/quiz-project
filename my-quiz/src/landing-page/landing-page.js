import React from "react";
import Header from "./header/header";
import Offer from "./what-offer/what-offer";
import GetStarted from "./get-started/get-started";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import Chatbot from "../chatbot/chatbot";

const LandingPage = () => (
  <React.Fragment>
    <Header />
    <Offer />
    <GetStarted />
    <Contact />
    <Footer />
    <Chatbot />
  </React.Fragment>
);
export default LandingPage;
