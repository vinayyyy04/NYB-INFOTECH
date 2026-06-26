//mini application using API
//weather forcast
async function getWeather() {
    let city = document.getElementById("city").value.trim();
    let result = document.getElementById("result");

if (city === "") {
    result.innerHTML = "Please enter a city name.";
return;
 }

try {
    let response = await fetch(`https://wttr.in/${city}?format=j1`);

if (!response.ok) {
throw new Error("Failed to fetch weather data.");
}

let data = await response.json();

const temperature = data.current_condition[0].temp_C;
const description = data.current_condition[0].weatherDesc[0].value;
const humidity = data.current_condition[0].humidity;

 result.innerHTML = `<strong>City:</strong> ${city}<br><strong>Temperature:</strong> ${temperature} °C<br><strong>Condition:</strong> ${description}<br><strong>Humidity:</strong> ${humidity}%`;
} catch (error) {
 result.innerHTML = "Error: Unable to fetch weather data.";
console.error(error);
}
}

//country information

//  async function getCountry() {
//     const country = document.getElementById("country").value.trim();
//     const output = document.getElementById("output");

// if (country === "") {
//     output.innerHTML = "Please enter a country name.";
// return;
// }

// try {
//     const response = await fetch(`https://corsproxy.io/?https://restcountries.com/v3.1/name/india`);

// if (!response.ok) {
//     throw new Error("Country not found.");
// }

// const data = await response.json();

// output.innerHTML = `<h3>${data[0].name.common}</h3><p><strong>Capital:</strong> ${data[0].capital[0]}</p><p><strong>Population:</strong> ${data[0].population.toLocaleString()}</p><p><strong>Region:</strong> ${data[0].region}</p><p><strong>Currency:</strong> ${Object.values(data[0].currencies)[0].name}</p>`;

// } catch (error) {
// output.innerHTML = "Country not found.";
// console.log(error);
// }

// }


//random jokegenerator.

async function getJoke() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();

  document.getElementById("joke").innerHTML =`${data.setup}<br><br>${data.punchline}`;
}


//github profile viewer


async function getProfile() {
  let username = document.getElementById("username").value;

  const response = await fetch(`https://api.github.com/users/${username}`);
  const data = await response.json();

  document.getElementById("profile").innerHTML = `<img src="${data.avatar_url}" width="100"><h3>${data.name}</h3><p>Followers: ${data.followers}</p>`;
}


// Create Project
//       ↓
// git init
//       ↓
// Create/Edit Files
//       ↓
// git status
//       ↓
// git add -A
//       ↓
// git commit -m "Message"
//       ↓
// git push origin main 
