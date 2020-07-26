import React, {Component} from 'react'
import SideBar from './SideBar'
import {fetchCables} from '../store/cable'
import {connect} from 'react-redux'

export class CableComp extends Component {
  constructor() {
    super()
    this.state = {
      cables: []
    }
  }
  componentDidMount() {
    this.props.getCables()
  }
  render() {
    const cables = this.state.cables
    console.log('cablescablescables', cables)
    return (
      <div className="cableComp">
        <SideBar />
        <div className="articleheader">
          <span className="selectcable">
            2. SELECT <strong>CABLE</strong>
          </span>
        </div>
        <div className="cableMAIN">
          <div className="tourhardDIV">
            <h3>TOUR HARD</h3>
            {console.log('this.props.cables', cables)}
          </div>
          <div className="standardDIV">
            <h3>STANDARD</h3>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = reduxState => {
  return {
    cables: reduxState.cables
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCables: () => dispatch(fetchCables())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CableComp)
