import React, {Component} from 'react'
import SideBar from './SideBar'
import {fetchCables} from '../store/cable'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import CableSpecs from './CableSpecs'

export class CableComp extends Component {
  constructor() {
    super()
    this.state = {
      cable: ''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.getCables()
  }

  handleClick(event) {
    this.setState({
      cable: event.target.value
    })
    console.log('EVENT INFO CABLECOMP', event.target)
  }

  render() {
    const cables = this.props.cables
    return (
      <div className="cableComp">
        <SideBar />
        <article className="lengthArticle">
          <div className="articleheader">
            <span className="selectcable">
              2. SELECT <strong>CABLE</strong>
            </span>
          </div>
          <div className="cableMAIN">
            <h2 className="cableTypeTitle">TOUR HARD</h2>
            <div className="tourhardDIV">
              <div className="cablesList">
                {cables &&
                  cables
                    .filter(cable => cable.cableType === 'Tour Hard')
                    .map(cable => (
                      <div
                        key={cable.id}
                        value={cable.name}
                        onClick={this.handleClick}
                      >
                        <div className="singleCableDiv">
                          <h3>Name:{cable.name}</h3>
                          <img className="cableImg" src={cable.imageUrl} />
                          <h4>Price: ${cable.price}</h4>
                          <h5>Description:</h5>
                          <p>{cable.description}</p>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
            <h2 className="cableTypeTitle">STANDARD</h2>
            <div className="tourhardDIV">
              {cables &&
                cables
                  .filter(cable => cable.cableType === 'Standard')
                  .map(cable => (
                    <div key={cable.id} className="singleCableDiv">
                      <Link className="firstNameLink" to={`/cable/${cable.id}`}>
                        <h3>Name:{cable.name}</h3>
                      </Link>
                      <img className="cableImg" src={cable.imageUrl} />
                      <h4>Price: ${cable.price}</h4>
                      <h5>Description:</h5>
                      <p>{cable.description}</p>
                    </div>
                  ))}
            </div>
          </div>
        </article>
        <div>
          <CableSpecs cables={cables} cable={this.state} />
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
