import axios from "axios";
function AxiosDelete(){
    return(

axios
  .delete("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => {
    console.log("Employee Deleted Successfully");
    console.log(response.status);
  })
  .catch((error) => console.log(error))
    )
}

export default AxiosDelete;