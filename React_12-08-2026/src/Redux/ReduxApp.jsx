import { Provider } from "react-redux";

import { store } from "./Store";
import Counter from "./Counter";

function ReduxApp() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default ReduxApp