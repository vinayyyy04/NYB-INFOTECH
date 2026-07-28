        import axios from "axios";

function AxiosPut(){
    return(

axios
  .put("https://jsonplaceholder.typicode.com/users/1", {
    id: 1,
    name: "vinay Kumar",
    job: "junior Software Engineer",
  })
  .then((response) => {
    console.log(response.data);
  })
    )
}

export default AxiosPut;