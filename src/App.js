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
import {Modal, Button } from 'react-bootstrap'
import Customize from './Components/Customize/Customize'
import exitIntent from 'exit-intent-mobile'
import Leading from './Components/Programs/Lead/lead';
import MyModel from './Components/Modal/Model'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import ContactUs from './Components/ContactUs/ContactUs';

class App extends Component {

  state={open:false}

  setModalShow =(flag)=>{
    
    this.setState({
      open:false,
      walkedOut:false
    })
  }





  render() {
    
    // const removeExitIntent = exitIntent({
    //   maxDisplays: 99999,                    // default 99999
    //   eventThrottle: 100,                    // default 200
    //   showAfterInactiveSecondsDesktop: 60,   // default 60
    //   showAfterInactiveSecondsMobile: 30,    // default 40
    //  showAgainAfterSeconds: 10000000000000000,             // default 10
    //   onExitIntent: () => {
    //     !this.state.walkedOut 
    //     ?

    //     this.setState({open:true,walkedOut:true})
    //     :
    //     this.setState({open:false})
    //   },
    //   debug: false,
    // })

    

    return (
      <BrowserRouter>
     
              <Route path ="/" render ={(props)=><Header />}></Route>

              <Route path ="/" exact render ={(props)=><Promotion />}></Route>

              <Route path ="/about-azita" exact render ={(props)=> <About /> }></Route>

              <Route path ="/work-with-azita" exact render ={(props)=> <Work /> }></Route>


              <Route path ="/thinking-into-results" exact render ={(props)=> <ThinkingIntoAction /> }></Route>

              <Route path ="/lead-the-field" exact render ={(props)=> <Leading /> }></Route>

              <Route path ="/complimentary-session" exact render ={(props)=> <Customize /> }></Route>

              <Route path ="/contact-azita" exact render ={(props)=> <ContactUs /> }></Route>


              <Route path ="/" exact render ={(props)=><MiniPromotion />}></Route>
           
              <Route path="/" exact render ={(props)=><PersonalDevelopment /> }></Route>


              <Route path="/" exact render ={(props)=><MiniBio/> }></Route>


              <Route path="/" exact render ={(props)=><Benefits /> }></Route>


              <Route path="/" render ={(props)=> <Footer /> }></Route>

              <MyModel open={this.state.open} heading="test" body="pest" footer="" setModalShow={this.setModalShow}/>
        
      </BrowserRouter>
    );
  }
}

export default App;
