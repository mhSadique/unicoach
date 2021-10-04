import React from 'react';
import {
    BrowserRouter as Router,
    Switch, 
    Route
} from 'react-router-dom'
import Main from '../Main/Main';
import Services from '../Services/Services';
import Mentors from '../Mentors/Mentors';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import NotFound from '../NotFound/NotFound';


const Header = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/services' component={Services} />
                <Route path='/mentors' component={Mentors} />
                <Route path='/about' component={About} />
                <Route path='*' component={NotFound} />
            </Switch>
        </Router>
    );
};
export default Header;