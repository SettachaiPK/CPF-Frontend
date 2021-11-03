import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomePage } from "./views";
import VerifyPage from "./views/auth/VerifyPage";
import SignInPage from "./views/auth/SignInPage";
import Topnav from "./components/Topnav";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/sign-in" component={SignInPage} />
        <Route exact path="/verify" component={VerifyPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
