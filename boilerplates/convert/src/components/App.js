import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Window, TitleBar, Text } from 'react-desktop/windows';
import { ipcRenderer as ipc } from 'electron';

class App extends Component {

  static defaultProps = {
    color: '#cc7f29',
    theme: 'light'
  };
  render() {
    return (

      <Window
        color={this.props.color}
        theme={this.props.theme}
        chrome
        height="300px"
        padding="12px"
      >
        <TitleBar title="My Windows Application" controls/>
        <Text color={this.props.theme === 'dark' ? 'white' : '#333'}>Hello World</Text>
        {this.props.children}
      </Window>
    );
  }
}

export default connect()(App);
