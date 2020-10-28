import logo from './logo.svg';
import './App.css';
import ToDoList from './components/ToDoList';
import DoneListContainer from './containers/DoneListContainer';
import {HashRouter, BrowserRouter, Route, Link, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Link to="/">Go Home, Young Prog</Link>
          <Link to="/donepage">Go Done, Young Prog</Link>
          <Switch>
            <Route path="/donepage" component={DoneListContainer}></Route>
            <Route path="/" component={ToDoList}></Route>
          </Switch>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
