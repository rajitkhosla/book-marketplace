import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Container} from "@material-ui/core"

import Book from './pages/Book';
import Index from "./pages/Index";

function App() {
  return (
    <Container>
      <Router>
        <Route path='/' exact component={Index} />
        <Route path='/books' exact component={Book} />
      </Router>
      </Container>
  );
}

export default App;
