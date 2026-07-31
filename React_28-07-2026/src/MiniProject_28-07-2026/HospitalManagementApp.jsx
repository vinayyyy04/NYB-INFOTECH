import "../App.css";
import usePatients from "./usePatients";
import withLoading from "./withLoading";
import PatientList from "./PatientList";

const PatientWithLoading = withLoading(PatientList);

function App() {
  const { patients, loading } = usePatients();

  return (
    <PatientWithLoading
      patients={patients}
      loading={loading}
    />
  );
}

export default App;