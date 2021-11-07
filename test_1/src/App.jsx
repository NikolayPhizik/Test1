import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Cabinet from "./Components/Cabinet/Cabinet";
import Login from "./Components/Login/Login";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cabinet" />} />
        <Route path="/cabinet" render={() => <Cabinet />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </>
  );
}

export default App;
