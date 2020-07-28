import React, {Component} from 'react'
import {fetchSingleCable} from '../store/singleCable'
import {connect} from 'react-redux'

export class CableSpecs extends Component {
  // componentDidMount(){
  //     this.props.getSingleCable(this.props.cablecableId)
  // }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    console.log('this.props on CableSpecs', this.props)
    return (
      <div>
        <h1>TITLE</h1>
      </div>
    )
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
