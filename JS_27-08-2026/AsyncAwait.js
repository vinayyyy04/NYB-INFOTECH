function getData() {
  return Promise.resolve("Data received");
}

async function showData() {
  const result = await getData();

  console.log(result);
}

showData();