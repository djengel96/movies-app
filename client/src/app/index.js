import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { ShoesList, ShoesInsert, ShoesUpdate, Page4 } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/shoes/list" exact component={ShoesList} />
                <Route path="/shoes/create" exact component={ShoesInsert} />
                <Route
                    path="/shoes/update/:id"
                    exact
                    component={ShoesUpdate}
                />
                <Route path="/shoes/page4" exact component={Page4} />
            </Switch>
        </Router>
    )
}

export default App
