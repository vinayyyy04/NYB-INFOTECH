// import React from "react";

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
//     </>
//   );
// }

// // Parent Component
// function Parent() {
//   const offer = "10% Discount Available";

//   return <Child offer={offer} />;
// }

// // Child Component
// function Child(props) {
//   return <h2>Offer: {props.offer}</h2>;
// }

// // Sibling Components
// function SiblingOne(props) {
//   return <h3>Sales Department: {props.message}</h3>;
// }

// function SiblingTwo(props) {
//   return <h3>Service Department: {props.message}</h3>;
// }

// // Class Component
// class Welcome extends Component {
//   render() {
//     return <h2>Welcome to Our Car Showroom!</h2>;
//   }
// }

// // Main App Component
// function App() {
//   const message = "Showroom opens at 9:00 AM";

//   return (
//     <>
//       <Header />

//       {/* JSX Expression */}
//       <h2>Today's Date: {new Date().toLocaleDateString()}</h2>

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

// export default App;




import React, { Component, useState } from "react";

// Functional Component
function Header() {
  return (
    <>
      <h1>Car Showroom</h1>
    </>
  );
}

// Functional Component using Props
function Car(props) {
  return (
    <>
      <h2>Car Name: {props.name}</h2>
      <h3>Price: ₹{props.price}</h3>
    </>
  );
}

// State Management Component
function Likes() {
  const [likes, setLikes] = useState(0);

  return (
    <>
      <h2>Likes: {likes}</h2>

      <button onClick={() => setLikes(likes + 1)}>
        Like Car
      </button>

    </>
  );
}

// Child Component
function Child(props) {
  return (
    <>
      <h2>Special Offer</h2>
      <p>{props.offer}</p>

    </>
  );
}

// Parent Component
function Parent() {
  const offer = "10% Discount Available";

  return <Child offer={offer} />;
}

// Sibling Component 1
function SiblingOne(props) {
  return (
    <>
      <h2>Sales Department</h2>
      <p>{props.message}</p>
    </>
  );
}

// Sibling Component 2
function SiblingTwo(props) {
  return (
    <>
      <h2>Service Department</h2>
      <p>{props.message}</p>
    </>
  );
}

// Class Component
class Welcome extends Component {
  render() {
    return (
      <>
        <h2>Welcome to Our Car Showroom!</h2>
      </>
    );
  }
}

// Main Mini Project Component
function Miniproject() {
  const message = "Showroom opens at 9:00 AM";

  return (
    <>
      {/* Functional Component */}
      <Header />

      {/* JSX Expression */}
      <h2>Today's Date: {new Date().toLocaleDateString()}</h2>

      {/* Props */}
      <Car
        name="Hyundai Creta"
        price={1800000}
      />

      {/* State */}
      <Likes />

      {/* Parent to Child Communication */}
      <Parent />

      {/* Sibling Communication */}
      <SiblingOne message={message} />
      <SiblingTwo message={message} />

      {/* Class Component */}
      <Welcome />
    </>
  );
}

export default Miniproject;