const API_URL = "https://jsonplaceholder.typicode.com/users";

// GET
export const getEmployees = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

// POST
export const addEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(employee),
  });

  return response.json();
};