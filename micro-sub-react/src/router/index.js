import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'

export default function AppRoute() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
    </Switch>
  )
}