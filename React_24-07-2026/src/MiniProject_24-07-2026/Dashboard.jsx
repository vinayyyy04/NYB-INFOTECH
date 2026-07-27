import { useEffect, useState } from "react";
import CarCard from "./CarCard";
import AddCar from "./AddCar";
import Loading from "./Loading";
import creta from "../assets/creta-1.webp";
import thar from "../assets/TharRoxx.jpg";

function Dashboard() {

  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    setTimeout(() => {

      setCars([
        {
          id:1,
          name:"Hundai Creta",
          price:"₹16.5 Lakh",
          image:creta,
        },
        {
          id:2,
          name:"Thar Roxx",
          price:"₹17.4 Lakh",
          image:thar,
        }
      ]);

      setLoading(false);

    },2000);

  },[]);

  if(loading){
    return <Loading/>
  }

  return(

    <div>

      <h1>Xuv's</h1>

      <AddCar cars={cars} setCars={setCars}/>

      <div className="container">

      {
        cars.map((car)=>(
          <CarCard key={car.id} car={car}/>
        ))
      }

      </div>

    </div>

  )

}

export default Dashboard;