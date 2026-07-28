import axios from "axios";

function AxiosPatch(){
    return(

axios
  .patch("https://jsonplaceholder.typicode.com/users/1", {
    job: "Team Lead",
  })
  .then((response) => {
    console.log(response.data);
  })
    )
}

export default AxiosPatch;

