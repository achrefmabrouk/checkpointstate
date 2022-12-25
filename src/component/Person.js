import React from "react";
class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      fullname: "Achref Mabrouk",
      bio: "I am a Full Stack JS Student",
      img: <img src="./photo1.jpg" alt="photo" width="300px"></img>,
    };
  }
  

  render() {
    return <div>
        <h3>{this.state.fullname}</h3><br/>
        <h3> {this.state.bio}</h3><br/>
        {this.state.img}
    </div>;
  }
}
export default Person;
