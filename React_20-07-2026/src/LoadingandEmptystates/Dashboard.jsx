function Dashboard({employee}){

    return(

        <div>

            <h1>Welcome {employee.name}</h1>

            <h2>Role : {employee.role}</h2>

            <h3>Login Successful </h3>

        </div>

    )

}

export default Dashboard;