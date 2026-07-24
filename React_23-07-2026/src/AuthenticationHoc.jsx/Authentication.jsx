import Cart from "./Cart";
import withAuth from "./LoginUser";

const ProtectedCart = withAuth(Cart);

function Authentication() {
  return <ProtectedCart />;
}

export default Authentication;