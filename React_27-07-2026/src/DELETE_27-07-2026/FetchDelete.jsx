function FetchDelete(){
    return(
        fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((response) => {
    if (response.ok) {
      console.log("Employee Deleted Successfully");
    }
  })
  .catch((error) => console.log(error))
    )
}
export default FetchDelete;