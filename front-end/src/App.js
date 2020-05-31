import React, { Component } from 'react'

//backEnd integration

// Redux
import { connect } from 'react-redux'

// Local imports
import { setText } from './appActions'

class Children extends Component {
  setText() {
    this.props.setText('Aquele texto')
  }
  render() {
    return (
      <>
        <button onClick={() => this.setText()}>Mudar texto</button>
        <h1>{this.props.app.text}</h1>
      </>
    )
  }
}

const mapStateToProps = ({ app }) => {
  return {
    app
  }
}

export default connect(mapStateToProps, {
  setText
})(Children)
