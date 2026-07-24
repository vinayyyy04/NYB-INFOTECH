import Patient from "./Patient";
import WithAuthorization from "./WithAuthorization";

const ProtectedRecords = WithAuthorization(Patient);

function Authorization() {
  return <ProtectedRecords/>;
}

export default Authorization;