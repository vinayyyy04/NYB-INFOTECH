import axios from "axios";

function Axios(){
    return(
        axios
  .post("https://jsonplaceholder.typicode.com/users", {
    name: "Rahul",
    job: "Software Engineer",
  })
  .then((response) => {
    console.log(response.data);
  })
    )
}
export default Axios;
