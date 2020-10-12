import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import {Switch, Route} from'react-router'
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/home/home";
import {About} from "./pages/about/about";
import {Profile} from "./pages/profile/profile";
import {Alert} from "./components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {GithubState} from "./context/github/githubState";

function App() {
  return (
      <GithubState>
          <AlertState>
              <BrowserRouter>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert
                          alert={{text:'Test alert'}}
                      />
                      <Switch>
                          <Route path="/" exact component={Home}/>
                          <Route path="/about" component={About}/>
                          <Route path="/profile/:name" component={Profile}/>
                      </Switch>
                  </div>
              </BrowserRouter>
          </AlertState>
      </GithubState>



  );
}

export default App;
