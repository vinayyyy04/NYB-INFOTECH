import Home from "./Home";
import Profile from "./Profile";
import Account from "./Account";
import withAuth from "./withAuth";

const ProtectedHome = withAuth(Home);
const ProtectedProfile = withAuth(Profile);
const ProtectedAccount = withAuth(Account);

function Bank() {
  return (
    <>
      <ProtectedHome />
      <ProtectedProfile />
      <ProtectedAccount />
    </>
  );
}

export default Bank;