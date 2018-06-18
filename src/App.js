import React, { Component } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import logo from './logo.svg';
import './App.css';
import { Steps, Button, message,Layout } from 'antd';
const Step = Steps.Step;


const steps = [{
  title: 'First',
  content: <Form1/>,
}, {
  title: 'Second',
  content: <Form2/>,
}, {
  title: 'Last',
  content: <Form3/>,
}];


class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        current: 0,
      };
    }
    next() {
      const current = this.state.current + 1;
      this.setState({ current });
    }
    prev() {
      const current = this.state.current - 1;
      this.setState({ current });
    }
  render() {
    const { current } = this.state;
    return (
      <Layout style={{padding:50}}>
            <Steps current={current}>
              {steps.map(item => <Step key={item.title} title={item.title} />)}
            </Steps>
            <div className="steps-content">{steps[this.state.current].content}</div>
            <div className="steps-action">
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary" onClick={() => message.success('Processing complete!')}>Done</Button>
              }
              {
                this.state.current > 0
                &&
                <Button style={{ marginLeft: 8 }} onClick={() => this.prev()}>
                  Previous
                </Button>
              }
            </div>
        </Layout>
    );
  }
}

export default App;
