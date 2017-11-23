import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header_ex from './header.1' 
import Content from './content' 
import Contacts from './Contacts' 

class App extends Component {
  sayHey(){
    alert("hey");
  }

  render() {
    var myTitle="it is my title";
    let pStyle = {
      color: 'aqua',
      backgroundColor: 'black'
    };

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.11
        </p>
        <p style = {pStyle}>{1 == 1 ? 'True' : 'False'}</p>
        <p>123</p>
        <button onClick={this.sayHey}>Click Me</button>
        <Header_ex/> 
        <Content/>
        <Contacts/>
      </div>
    );
    /*234*/
  }
}

// App.defaultProps = {
//   //headerTitle: 'Default header',
//   contentTitle: '123123'//,
//   //contentBody: undefined
// };

// class Header extends React.Component {
//   render(){
//       return (
//           <h1>Header</h1>
//       );
//   }
// }

// class Content extends React.Component {
//   render(){
//       return (
//           <div>
//               <h2>Content</h2>
//               <p> Hey! </p>
//           </div>
//       );
//   }
// }

export default App;
