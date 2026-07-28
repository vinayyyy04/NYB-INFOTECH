function Fetch(){
    return(
        fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Rahul",
    job: "Software Engineer",
  }),
})
  .then((response) => response.json())
  .then((employee) => {
    console.log(employee);
  })
    )
}

export default Fetch;