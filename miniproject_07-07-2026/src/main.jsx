import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



// import React, { Component, useState } from "react";

// // Functional Component
// function Header() {
//   return (
//     <>
//       <h1>Car Showroom</h1>
//       <hr />
//     </>
//   );
// }

// // Functional Component using Props
// function Car(props) {
//   return (
//     <>
//       <h2>Car Name: {props.name}</h2>
//       <h3>Price: ₹{props.price}</h3>
//       <hr />
//     </>
//   );
// }

// // State Management
// function Likes() {
//   const [likes, setLikes] = useState(0);

//   return (
//     <>
//       <h2>Likes: {likes}</h2>
//       <button onClick={() => setLikes(likes + 1)}>
//         Like Car
//       </button>
//       <hr />
//     </>
//   );
// }

// // Child Component
// function Child(props) {
//   return (
//     <>
//       <h2>Offer: {props.offer}</h2>
//       <hr />
//     </>
//   );
// }

// // Parent Component
// function Parent() {
//   const offer = "10% Discount Available";

//   return <Child offer={offer} />;
// }

// // Sibling Components
// function SiblingOne(props) {
//   return (
//     <>
//       <h3>Sales Department</h3>
//       <p>{props.message}</p>
//       <hr />
//     </>
//   );
// }

// function SiblingTwo(props) {
//   return (
//     <>
//       <h3>Service Department</h3>
//       <p>{props.message}</p>
//       <hr />
//     </>
//   );
// }

// // Class Component
// class Welcome extends Component {
//   render() {
//     return (
//       <>
//         <h2>Welcome to Our Car Showroom!</h2>
//         <hr />
//       </>
//     );
//   }
// }

// // Mini Project Component
// function MiniProject() {
//   const message = "Showroom opens at 9:00 AM";

//   return (
//     <>
//       <Header />

//       {/* JSX Expression */}
//       <h2>Today's Date: {new Date().toLocaleDateString()}</h2>
//       <hr />

//       {/* Props */}
//       <Car name="Hyundai Creta" price={1800000} />

//       {/* State */}
//       <Likes />

//       {/* Parent to Child Communication */}
//       <Parent />

//       {/* Sibling Communication */}
//       <SiblingOne message={message} />
//       <SiblingTwo message={message} />

//       {/* Class Component */}
//       <Welcome />
//     </>
//   );
// }

// export default MiniProject;