import React from 'react';

class App extends React.Component{
  state = {
    fullName:"Hamouda ben abdennebi",
    bio:"i am tunisian and i live in la marsa",
    imgSrc:"./profile.jpg",
    profession:"web student at GOMYCODE",
    show: false,
    time:0
  }
  componentDidMount=() =>{
    setInterval(()=>{
      let time = new Date()
      time = time.getHours()+':'+time.getMinutes()
      this.setState({time:time})
    },1000)
    
  }
  handleClick=()=>this.setState({show: !this.state.show})
  render(){
    return(
      <>

      {
        this.state.show && (
          <>
            <h1>fullName : {this.state.fullName}</h1>
            <p>bio : {this.state.bio}</p>
            <img src={this.state.imgSrc} alt={"hello"}/>
            <p>profession : {this.state.profession}</p>
            <p>{this.state.time}</p>
          </>
        )

      }
        <button onClick={this.handleClick}> ClickMe</button>
      </>
    )
  }
}

export default App;
