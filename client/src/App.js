import React, { Component } from 'react';
import './App.css';
import Messages from "./componets/Messages";
import Input from "./componets/Input";

function randomName() {
  const adjectives = [
    "autumn", "hidden", "bitter"
  ];
  const nouns = [
    "waterfall", "river", "breeze"
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
}

class App extends Component {
  state = {
    messages: [],
    user: {
      username: randomName(),
      color: randomColor(),
    }
  }

  constructor() {
    super();
    this.drone = new window.Scaledrone("43apuB3dvgnLd0OX", {
      data: this.state.user
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const user = {...this.state.user};
      user.id = this.drone.clientId;
      this.setState({user});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, user) => {
      const messages = this.state.messages;
      messages.push({user, text: data});
      this.setState({messages});
    });  
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>My Chat App</h1>
        </div>
        <Messages
          messages={this.state.messages}
          currentuser={this.state.user}
        />
        <Input
          onSendMessage={this.onSendMessage}
        />
      </div>
    );
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

}

export default App;
