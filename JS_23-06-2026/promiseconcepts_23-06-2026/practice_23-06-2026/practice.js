async function getEmployee() {
    try {
         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const employee = await response.json();

        let employeee ={
        name:"Vinay",
        email:"chvinayk5gmail.com",
        phone:7569972931
    }

        // Object Destructuring
        const { name, email, phone } = employeee;

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);

    } catch (error) {
        console.log("Error:", error);
    }
}

getEmployee();