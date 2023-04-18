import { Fragment} from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Pages/Home";
function App() {
  return (
    <Fragment>
      <div>
        <Navbar />
        {/* <Login /> */}
        <Home />
      </div>
    </Fragment>
  );
}

export default App;
