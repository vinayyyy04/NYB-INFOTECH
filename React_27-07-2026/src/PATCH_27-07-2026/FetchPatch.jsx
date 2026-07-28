function FetchPatch(){
    return(
        fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    job: "Team Lead",
  }),
})
  .then((response) => response.json())
  .then((employee) => {
    console.log(employee);
  })

    )
}

export default FetchPatch;