 import axios from "axios";

function Axios(){
    return(

axios
  .get("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error))
    )
}

export default Axios;