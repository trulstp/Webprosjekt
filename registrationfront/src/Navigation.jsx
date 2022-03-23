import React from "react";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import App from './App';
import FindStudent from './FindStudent';
import StudentList from './StudentList';
import Update from './Update';

const Navigation = () => {
    return (
        <Router>
            <div className="navigation">
                <Link to="/">
                    List of students
                </Link>

                <Link to="/search">
                    Search
                </Link>

                <Link to="/new">
                    Add new student
                </Link>

                <Link to="/update">
                    Update student
                </Link>
            </div>

            <Switch>
                <Route path="/" exact>
                    <StudentList />
                </Route>

                <Route path="/search" >
                    <FindStudent />
                </Route>

                <Route path="/new" >
                    <App />
                </Route>

                <Route path="/update" >
                    <Update />
                </Route>                
            </Switch>
        </Router>
    )
}

export default Navigation