import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

class Main extends Component {
    render() {
        return (
            <Switch>
                <Route path='/first' component={FirstComponent} />
                <Route path='/second' component={SecondComponent} />
                <Route path='/third' component={ThirdComponent} />
            </Switch>
        )
    }
}

export default Main;