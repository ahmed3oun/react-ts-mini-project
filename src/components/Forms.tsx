import { Component } from "react";
import {} from "./style.scss";

class Forms extends Component {
  state = {
    first_name: "",
    last_name: "",
  };

  setFirstName = (event: any) => {
    this.setState({ first_name: event.target.value });
  };

  setLastName = (event: any) => {
    this.setState({ last_name: event.target.value });
  };

  submitForm = (event: any) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            value={this.state.first_name}
            onChange={this.setFirstName}
          />
          <input
            type="text"
            value={this.state.last_name}
            onChange={this.setLastName}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
