import { Route, Switch } from 'react-router-dom';
import Stories from '../containers/Shows/Shows';
import Story from '../containers/Show/Show';
import './App.css';
import Nav from '../containers/Nav/Nav';

function App() {
  return (
    <div className="app">
      <Nav />
      <Switch>
        <Route exact path="/" component={Stories} />
        <Route exact path="/show/:id" component={Story} />
      </Switch>
    </div>
  );
}

export default App;
