function FetchPut(){
    return(
        fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    id: 1,
    name: "vinay Kumar",
    job: "junior Software Engineer",
  }),
})
  .then((response) => response.json())
  .then((employee) => {
    console.log(employee);
  })
    )
}

export default FetchPut;