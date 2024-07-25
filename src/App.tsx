import { Switch, Redirect, Route } from "react-router-dom";

import { Chat } from "./views/Chat";

export const App = () => {
  return (
    <Switch>
      {/* <PublicRoute component={Login} exact path="/" />
      <PrivateRoute component={Chat} exact path="/chat" /> */}
      <Route exact path="/" render={() => <Chat />} />
      <Redirect to="/" />
    </Switch>
  );
};
