function Fetchh (){
    return(
    fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((employees) => {console.log(employees);})
  .catch((error) => console.log(error))
)

};

export default Fetchh;


