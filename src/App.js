import "./App.css";
import Home from "./View/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signin from "./View/Authentication/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import News from "./components/News";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/signin" component={Signin} />
      <ProtectedRoute exact path="/home" component={Home} />
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/News">
            <News />
          </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
