import { Provider } from "react-redux";
import { store } from "./Store";
import ShoppingCart from "./ShoppingCart";

function TaskApp() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default TaskApp;