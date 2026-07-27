const withAuthentication=(Component)=>{

return function(props){

const isLoggedIn=true;

return isLoggedIn ? <Component {...props}/> : <h2>Please Login</h2>

}

}

export default withAuthentication;