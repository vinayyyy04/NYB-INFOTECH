import { useReducer } from "react";

const reducer = (state, action) => {

  switch(action.type){

    case "deposit":
      return {balance: state.balance + 1000};

    case "withdraw":
      return {balance: state.balance - 500};

    default:
      return state;
  }

}

function UseReducer(){

const [state, dispatch] = useReducer(reducer,{balance:5000});

return(

<>
<h2>Balance : {state.balance}</h2>

<button onClick={()=>dispatch({type:"deposit"})}>
Deposit
</button>

<button onClick={()=>dispatch({type:"withdraw"})}>
Withdraw
</button>

</>

)

}

export default UseReducer;