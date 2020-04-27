import React from "react";
import "./App.css";
import io from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };

    this.socket = io();
    this.socket.on("chat message", (msg) => {
      this.setState({ messages: [...this.state.messages, msg] });
    });
  }

  sendMessage = (e) => {
    console.log(e)
    e.preventDefault(); // prevents page reloading
    this.socket.emit("chat message", e.target.value);
    e.target.value = "";
  };

  render() {
    return (
      <div className="App">
        <ul id="messages"></ul>
        <form action="" onSubmit={e=>this.sendMessage(e)}>
          <input id="m" autocomplete="off" />
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default App;
