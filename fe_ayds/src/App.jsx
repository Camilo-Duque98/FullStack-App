import { Fragment, useState } from "react";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import Home from "./views/Pages/Home";
import Login from "./views/Pages/Login";

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div>
        <Navbar />
        {/* <Login /> */}
        <Home />
        <Modal>Hola</Modal>
      </div>
    </Fragment>
  );
}

export default App;
