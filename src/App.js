import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';
import { Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Promotion from './Components/Promotion/Promotion'
import PersonalDevelopment from './Components/PersonalDevelopment/PersonalDevelopment'
import MiniBio from './Components/MiniBio/MiniBio'
import Benefits from './Components/Benefits/Benefits'
import Footer from './Components/footer/footer'
import MiniPromotion from './Components/MiniPromotion/MiniPromotion'
import About from './Components/about/about'
import Work from './Components/Work/Work'
import ThinkingIntoAction from './Components/Programs/Thinking/thinking';
import Customize from './Components/Customize/Customize'
import Leading from './Components/Programs/Lead/lead';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     
              <Route path ="/" render ={(props)=><Header />}></Route>

              <Route path ="/" exact render ={(props)=><Promotion />}></Route>

              <Route path ="/about-azita" exact render ={(props)=> <About /> }></Route>

              <Route path ="/work-with-azita" exact render ={(props)=> <Work /> }></Route>


              <Route path ="/thinking-into-results" exact render ={(props)=> <ThinkingIntoAction /> }></Route>

              <Route path ="/lead-the-field" exact render ={(props)=> <Leading /> }></Route>

              <Route path ="/complimentary-session" exact render ={(props)=> <Customize /> }></Route>


              <Route path ="/" exact render ={(props)=><MiniPromotion />}></Route>
           
              <Route path ="/" exact render ={(props)=><PersonalDevelopment /> }></Route>


              <Route path ="/" exact render ={(props)=><MiniBio/> }></Route>


              <Route path ="/" exact render ={(props)=><Benefits /> }></Route>


              <Route path ="/" render ={(props)=> <Footer /> }></Route>


        
      </BrowserRouter>
    );
  }
}

export default App;
