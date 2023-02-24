import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import React, { Component } from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  
  // state = {
  //   progress: 0
  // }

  // setProgress = (progress) => {
  //   this.setState({progress: progress})
  // }
  state = {
    reload: false
  }

  setReload = (value) => {
    this.setState({ reload: value })
  }


  render() {
    return (
      <div>
        <Router>
          <NavBar setReload={this.setReload} />
          
          <Switch>
            <Route exact path="/">
              <News  key="general" pageSize={9} country="us" category="general"   reload={this.state.reload}/>
            </Route>
            <Route exact path="/business">
              <News  key="business" pageSize={9} country="us" category="business"  reload={this.state.reload} />
            </Route>
            <Route exact path="/entertainment">
              <News  key="entertainment" pageSize={9} country="us" category="entertainment"  reload={this.state.reload} />
            </Route>
            <Route exact path="/general">
              <News  key="general" pageSize={9} country="us" category="general"  reload={this.state.reload} />
            </Route>
            <Route exact path="/health" >
              <News  key="health" pageSize={9} country="us" category="health"  reload={this.state.reload} />
            </Route>
            <Route exact path="/science">
              <News  key="science" pageSize={9} country="us" category="science"  reload={this.state.reload} />
            </Route>
            <Route exact path="/sports">
              <News  key="sports" pageSize={9} country="us" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News  key="technology" pageSize={9} country="us" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
