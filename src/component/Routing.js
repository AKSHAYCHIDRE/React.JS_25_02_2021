import React from 'react';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Routing() {
    return(
        <Router>
            <div>
                <h2>Page Routing here</h2>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>   
                    <li>
                        <Link to="/about">About</Link>
                    </li>   
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>   
                </ul>
            </div>
            <Switch>
                <Route path="/about">
                    <About></About>
                </Route>
                <Route path="/contact">
                    <Contact></Contact>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}

function Home () {
    return <h2>Home page</h2>;
}

function About () {
    return <h2>About page</h2>;
}

function Contact () {
    return <h2>Contact page</h2>;
}
