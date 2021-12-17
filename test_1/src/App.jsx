import {Redirect, Route, Switch} from "react-router-dom";
import Header from "./Components/Header/Header";
import Login from "./Components/Login/Login";
import ContainerCabinet from "./Components/Cabinet/ContainerCabinet";
import RegisterContainer from "./Components/Register/RegisterContainer";


function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/cabinet" />} />
        <Route path="/cabinet" render={() => <ContainerCabinet />} />
        <Route path="/login" render={() => <Login />} />
        <Route path="/register" render={() => <RegisterContainer />} />
        <Route path="*" render={() => <div>404 NOT FOUND</div>} />
      </Switch>
    </>
  );
}

export default App;
