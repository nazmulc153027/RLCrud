import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './Nav';
import Contact from './Contact';
import Item from './Item';
import Edititem from './Edititem'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
         <Router>
         <Nav/>
            <Switch>
                <Route exact path="/" component={Contact} />
                <Route path="/add-item" component={Item} />
                <Route path="/edit-item/:id" component={Edititem}/>
            </Switch>
    </Router>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
