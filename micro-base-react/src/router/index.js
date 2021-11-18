import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import SubApp from '../pages/SubApp'

export default function AppRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/sub-app">
        <SubApp />
      </Route>
    </Switch>
  )
}