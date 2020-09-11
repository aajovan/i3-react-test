import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import Navigacija from "./Navigacija";
import Footer from "./Footer";
import Prva from "./Prva";
import PrvaDEMO from "./PrvaDEMO";
import Druga from "./Druga";
import DrugaDEMO from "./DrugaDEMO";
import IndexDEMO from "./IndexDEMO";
import NoMatch from "./NoMatch";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import podaci from "./sample.json";

class App extends Component {
  constructor() {
    super();
    this.state = { podaci: "", error: false };
  }
  render() {
    return (
      <div>
        {this.state.podaci ?
          <div className="stranica d-flex flex-column">

            <Router>

              <Navigacija
                logo={{ path: "/", src: this.state.podaci.logoSrc }}
                left={[
                  { title: this.state.podaci.stranice[0].naziv, path: "/prva" },
                  { title: this.state.podaci.stranice[1].naziv, path: "/druga" }
                ]}
                right={[
                  {
                    title: "Dropdown demo", path: "/submenu", dropdown: [

                      { title: "Submenu1 DEMO", path: "/test" },
                      { title: "Submenu2 DEMO", path: "/test2" }]
                  },

                  { title: "stranica 4 demo", path: "/treca" }]}
              />
              <div className="d-flex flex-column content container pt-5 pt-lg-3">
                <Switch>
                  <Route exact path="/">
                    <IndexDEMO />
                  </Route>
                  <Route exact path="/prva">
                    <Prva data={this.state.podaci.stranice[0]} />
                  </Route>
                  <Route exact path="/druga">
                    <Druga data={this.state.podaci.stranice[1]} />
                  </Route>
                  <Route exact path="/treca">
                    <Druga data={this.state.podaci.stranice[2]} />
                  </Route>
                  <Route exact path="/submenu/test">
                    <PrvaDEMO data={this.state.podaci.stranice[0]} />
                  </Route>
                  <Route exact path="/submenu/test2">
                    <DrugaDEMO data={this.state.podaci.stranice[1]} />
                  </Route>
                  <Route path="*">
                    <NoMatch />
                  </Route>
                </Switch>

              </div>
            </Router>
            <Footer text="2020." />

          </div>
          : <div>Učitavanje</div>
        }
      </div>
    );
  }
  componentDidMount() {

    this.setState({ podaci: podaci }, () => console.log(this.state.podaci))

  }
}


export default App;
