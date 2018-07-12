import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts } from 'pages';
import Menu from 'components/Menu';

class App extends Component {
    //Route= path가 동일하면 component속 컴포넌트를 가져옴
    //Switch= 안에있는 거중 하나만 골라서 가져옴
    render() {
        return (
            <div>
                <Menu />
                <Route exact path="/" component={Home} />
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/Posts" component={Posts} />
            </div>
        );
    }
}

export default App;
