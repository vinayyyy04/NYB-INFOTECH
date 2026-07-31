import React, {
  lazy,
  Suspense,
  useMemo,
  useCallback
} from "react";

import BikeList from "./BikeList";
import Home from "./Home";
import useCounter from "./UseCounter";
import withBorder from "./WithBorder";

const About = lazy(() => import("./About"));

const HomeWithBorder = withBorder(Home);

function BikeShowRoomApp() {

  const bikes = [
    {id:1,name:"Hunter 350",price:180000},
    {id:2,name:"Classic 350",price:220000},
    {id:3,name:"Meteor 350",price:240000},
    {id:4,name:"Himalayan",price:330000},
  ];

  const {count,increment}=useCounter();

  const totalPrice=useMemo(()=>{
      console.log("Calculating...");
      return bikes.reduce((sum,bike)=>sum+bike.price,0);
  },[]);

  const handleClick=useCallback(()=>{
      increment();
  },[increment]);

  return (

    <div className="container">

      <h1>🏍 Bike Showroom</h1>

      <HomeWithBorder />

      <BikeList bikes={bikes}/>

      <h2>Total Price : ₹{totalPrice}</h2>

      <button onClick={handleClick}>
        Increase Counter
      </button>

      <h2>Counter : {count}</h2>

      <Suspense fallback={<h2>Loading About...</h2>}>
        <About/>
      </Suspense>

    </div>

  );

}

export default BikeShowRoomApp;