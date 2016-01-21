import React, { Component, PropTypes } from 'react';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };

  render() {
    const styles = require('./App.scss');
    return (
      <div>
        <div className={styles.appContent}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
