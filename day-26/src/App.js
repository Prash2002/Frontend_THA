import "./App.css";
import Form from "./components/Form";

import { useSelector } from "react-redux";

function App() {
  const formfill = useSelector((state) => state.form);
  return (
    <div className="App">
      <Form />
      <div>Name: {formfill.name}</div>
      <div>Email: {formfill.email}</div>
    </div>
  );
}

export default App;
