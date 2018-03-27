import React, { Component } from 'react';
import Nav from './Nav/Nav';

class App extends Component {
 state ={
   toggler: false,
 }



  toggleHandler = () => {
    const doesShow = this.state.toggler;
    this.setState({
      toggler: !doesShow,
      madlib:{
        
      }
    }); 
    console.log('poop');

  }

  render() {
    const style = {};
    // const orange = mycss.orange;
    // let colorOrange = [];
    if (this.state.toggler){
      style.opacity = 1.0;
    }
    return (
      <div>
        <Nav scoop={style} hover={this.toggleHandler} />
        {
          this.state.toggler ? 
            <div className="here">
              <h1>QUENTIN IS HERE!!!!</h1>
            </div> :
            <div className="here">
              <h4>quentin is gone...</h4>
            </div>
        }
      </div>
    );
  }
}

export default App;
