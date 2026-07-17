import Navbar from "./NavBar";
import CarList from "./CarList";
import Booking from "./Booking";

import UserContext from "./UserContext.jsx";


function Garage() {

  return (
    <UserContext.Provider value="Vinayy">

      <Navbar/>

      <CarList/>

      <Booking/>


    </UserContext.Provider>
  );
}

export default Garage;