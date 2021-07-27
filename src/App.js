import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/Home" component={Home} exact />
          <Route path="/" component={Home} exact />
          <Route component={Home} />
        </Switch> 
      </BrowserRouter>
    </>
  );
};

export default App;
