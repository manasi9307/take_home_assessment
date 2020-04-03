import React from 'react';
import {BrowserRouter as Router, Route , Switch}  from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Index from './components/layout/Index';
import {Provider} from './context';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      users:{}
    }

  }


// componentDidMount(){
  
//   fetch(`https://api.github.com/users`)
//   .then(response => response.json())
//   .then(data =>{
//     console.log(data)
//     this.setState({
//       users:data
//     })
//   })
// }

 render(){
   
   return(
     <Provider>
   <Router>
     <React.Fragment>
     <Navbar />
     <div>
       <Switch>
         <Route exact path="/" component={Index} />
       </Switch>
     </div>
     </React.Fragment>
     </Router>
     </Provider>
   );
 }

}

export default App;
