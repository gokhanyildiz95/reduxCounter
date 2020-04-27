import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {degreaseCounter} from '../redux/actions/counterActions'

class DecreaseCounter extends Component {
    render() {
        return (
            <div>
                <button onClick={e=>{
                    this.props.dispatch(degreaseCounter())
                }}>
                1 azalt</button>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch){
    return{action:bindActionCreators(degreaseCounter,dispatch)}
}

export default connect(mapDispatchToProps)(DecreaseCounter);