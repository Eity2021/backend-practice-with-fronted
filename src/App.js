import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home";
import UpdateForm from "./UpdateForm/UpdateForm";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="updateForm/:id" element={<UpdateForm />} />
      </Routes>
    </div>
  );
}

export default App;
