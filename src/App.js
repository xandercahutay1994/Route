import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom'
import Root from './Root';
import routes from './routes';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Root>
          zcz
        </Root>
        <Switch>
          {
            routes.map((route,i) => {
              return <Route key={i} exact strict path={route.path} component={route.component}/>
            })
          }
        </Switch>
      </div>

    );
  }
}

export default App;
