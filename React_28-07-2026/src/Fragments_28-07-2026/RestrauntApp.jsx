import Restaurant from "./OnlineFoodDelivery";
import Menu from "./Menu";
import OrderSummary from "./OrderSummary";

function RestrauntApp() {
  return (
    <>
      <h1>🍽️ Online Food Delivery App</h1>
      <hr />

      <Restaurant />
      <hr />

      <Menu />
      <hr />

      <OrderSummary />
    </>
  );
}

export default RestrauntApp;