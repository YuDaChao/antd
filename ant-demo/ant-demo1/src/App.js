import React, { Component } from 'react';
import './App.css';
import { Button, Radio, Icon } from 'antd'
class App extends Component {
    state = {
        size: 'default',
    }
    handleSizeChange = (e) => {
        this.setState({ size: e.target.value })
    }
  render() {
      const size = this.state.size
    return (
      <div className="App">
        <Radio.Group value={size} onChange={this.handleSizeChange}>
            <Radio.Button>Large</Radio.Button>
            <Radio.Button>Default</Radio.Button>
            <Radio.Button>Small</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}

export default App;

