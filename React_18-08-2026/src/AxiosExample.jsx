import axios from "axios";

function AxiosExample() {
  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data);
      });
  };

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
    </div>
  );
}

export default AxiosExample;