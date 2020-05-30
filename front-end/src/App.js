import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import {setText} from './appActions'

class Children extends Component {
    setText() {
        this.props.setText('Aquele texto')
    }
    render() {
        return (
            <Fragment>
                <button onClick={() => this.setText()}>Mudar texto</button>
                <h1>{this.props.app.text}</h1>
            </Fragment>
        )
    }
}


const mapStateToProps = ({app}) => {
  return{
    app
  }
}

export default connect(mapStateToProps,{
  setText
})(Children)
