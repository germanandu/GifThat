import './App.css'
import ListOfGifs from './components/ListOfGifs';
import Home from './components/Home'
import {Route} from "wouter"

function App() {
  return (
    <div className="app">
      <div className="container">
        <Route path="/gif/:keyword"
        component={ListOfGifs} />
        <Route exact path="/" component={Home} />
      </div>
    </div>
  );
}

export default App;
