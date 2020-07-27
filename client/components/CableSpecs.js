import React, {Component} from 'react'
import {fetchSingleCable} from '../store/singleCable'
import {connect} from 'react-redux'

export class CableSpecs extends Component {
  render() {
    return <div></div>
  }
}

const mapStateToProps = state => ({
  cable: state.cable
})

const mapDispatchToProps = dispatch => {
  return {
    getSingleCable: id => dispatch(fetchSingleCable(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CableSpecs)
