import React from "react";
import Person from "./component/Person";
import Timer from "./component/Timer";
import './app.css'


class App extends React.Component {
  constructor(){
    super ()
    this.state = {
    show : false
  }
}

  toggle = ()=> {
    this.setState({show : !this.state.show})
  }
render (){
          return (
            
    <div style= {{textAlign:'center', width:'300px', margin:'0 auto', marginTop:'150px', gap:'100px' }} className="App">
      {this.state.show && <Person/>}
      {this.state.show && <Timer/>}
      <button onClick={this.toggle}>SHOW PROFILE</button>
    </div>
    
  )
}
}



export default App;
