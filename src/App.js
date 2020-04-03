import React from 'react';
import {BrowserRouter as Router, Route , Switch}  from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import Profile from './components/users/Profile';
import {Provider} from './context';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      users:{}
    }

  }




 render(){
   
   return(
     <Provider>
   <Router>
     <React.Fragment>
     <Navbar />
     <div>
       <Switch>
         <Route exact path="/" component={Index} />
         <Route exact path="/profile/:login" component={Profile} />
       </Switch>
     </div>
     </React.Fragment>
     </Router>
     </Provider>
   );
 }

}

export default App;
