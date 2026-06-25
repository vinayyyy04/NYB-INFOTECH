async function getData() {
try {

let response = await Promise.resolve({
    name: "Vinayy",
    username: "Vinay2003",
    email: "chvinayk5@gmail.com"
});

document.getElementById("result").innerHTML = `<p><b>Name:</b> ${response.name}</p><p><b>Username:</b> ${response.username}</p><p><b>Email:</b> ${response.email}</p> `;

} catch (error) {
    document.getElementById("result").innerHTML = error.message;
}

}
function clearData() {
    document.getElementById("result").innerHTML = "";
}