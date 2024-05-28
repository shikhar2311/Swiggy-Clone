import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/header";
import Body from "./Components/body";
import Footer from "./Components/footer";
import { IMG_CDN_URL } from "./constants";

/**
    Header
      - Logo
      - Nav Items
      - Cart 
    Body 
      - Search Bar
      - Restraunt List
        - Restraunt Card
          - Image
          - Name 
          - Rating
          - Cusines 
    Footer
      - Links
      - Copyrights
      
    */

// const heading = React.createElement(
//   "h1",
//   {
//     id: "title",
//     key: "h2",
//   },
//   "Namaste React"
// );

// JSX ??





{
  /* <div class="header">
  <h1>Namaste React</h1>
  <ul>
    <li>About Us</li>
    <li>support</li>
    <li>home</li>
  </ul>
</div>; */
}

// const container = React.createElement(
//   "div",
//   {
//     id: "container",
//   },
//   [React.createElement(
//     "h1",
//     {
//       id: "title",
//       key: "h1",
//     },
//     "Heading1"
//   ),
//   React.createElement("ul",{},[React.createElement(
//     "li",
//     {},
//     "About Us"
//   ),React.createElement("ul",{},[React.createElement(
//     "li",
//     {},
//     "About Us"
//   ),React.createElement("ul",{},[React.createElement(
//     "li",
//     {},
//     "About Us"
//   ),]),
// ]
// );

// console.log(heading);

const burgerking = {
  name: "Burger King",
  image: "https://content.jdmagicbox.com/comp/delhi/i6/011pxx11.xx11.221119222118.l3i6/catalogue/burger-king-delhi-restaurants-3khitnvqtb.jpg" ,
  cusines: ["Burgers", "American"],
  rating: "4.2",
};

// props



const AppLayout = () =>{
  return (
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);
