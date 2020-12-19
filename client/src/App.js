import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Reeds from "./components/Reeds";
import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/abpit" component={About} />
          <Route path="/reeds" component={Reeds} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
