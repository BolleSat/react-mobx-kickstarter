import { Switch, Route, withRouter } from 'react-router-dom';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import HomeComponent from './components/HomeComponent';
import Navigation from './components/Navigation';
import React from "react";

@withRouter
class App extends React.Component {
    render() {
        return (
            <div>
                <Navigation>
                    <Switch>
                        <Route exact path='/page1' component={FirstComponent} />
                        <Route exact path='/page2' component={SecondComponent} />
                        <Route component={HomeComponent} />
                    </Switch>
                </Navigation>
            </div>
        );
    }
}

export default App;
