import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Home from "./Home"
import CaseDetails from "./CaseDetails";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';  

function App() {
  return (
    <div >
        <Switch>
          <Route exact path ="/">
            <Home />
          </Route>
          <Route exact path ="/login">
            <Login />
          </Route>
          <Route exact path ="/matter">
            <CaseDetails />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
