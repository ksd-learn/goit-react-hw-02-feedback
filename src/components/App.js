import { Component } from "react";
import { Section } from './section/Section';

export class App extends Component {

    state = {
      good: 1,
      neutral: 0,
      bad: 1,
    };
  
  updateState = propertyState => {
    this.setState(prevState => (
      {
      [propertyState]: prevState[propertyState] + 1
      }
    ))
  };

  render() { 
    return (
      <>
        <Section title="Please leave feedback" states={this.state} />
      </>
    );
  }
}
