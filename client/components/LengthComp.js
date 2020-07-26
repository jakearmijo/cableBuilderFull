import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Navbar} from './navbar'
import SideBar from './SideBar'
import Button from 'react-bootstrap/Button'

export const LengthComp = () => {
  const [length, setLength] = useState('')
  // const [cable, getCableLength] = useState('')

  // const addLength = (length) => {
  //   getCableLength(...cable, {length: length})
  // }

  const handleSubmit = evt => {
    evt.preventDefault()
    setLength(length)
  }
  return (
    <div className="lengthComp">
      <SideBar />
      <article className="lengthArticle">
        <div className="articleheader">
          <span className="selectlengthhead">
            1. SELECT <strong>LENGTH</strong>
          </span>
        </div>

        <div className="notice">
          <img
            src="https://www.sinasoid.com/v/builder/images/length/measurement.png"
            alt="We measure cable length from where the plugs meet the cable."
          />
        </div>

        <div className="lengthChoices">
          <div className="patch-cable">
            <img
              className="inactive"
              src="https://www.sinasoid.com/v/builder/images/length/silhouette/patch-gray.png"
              alt="Patch Cable"
            />
            <div className="name">
              <span>Patch</span>
              <div className="desc">
                <span>3-35 in</span>
              </div>
            </div>
          </div>
          <div className="instrument-cable">
            <img
              className="inactive"
              src="https://www.sinasoid.com/v/builder/images/length/silhouette/instrument-gray.png"
            />
            <div className="name">
              <span>INSTRUMENT</span>
              <div className="desc">
                <span>3-35 ft</span>
              </div>
            </div>
          </div>
          <div className="speaker-cable">
            <img
              className="inactive"
              src="https://www.sinasoid.com/v/builder/images/length/silhouette/xlr-gray.png"
            />
            <div className="name">
              <span>XLR/TRS</span>
              <div className="desc">
                <span>1-100 ft</span>
              </div>
            </div>
          </div>
          <div className="speaker-cable">
            <img
              className="inactive"
              src="https://www.sinasoid.com/v/builder/images/length/silhouette/speaker-gray.png"
            />
            <div className="name">
              <span>SPEAKER</span>
              <div className="desc">
                <span>1-20 ft</span>
              </div>
            </div>
          </div>
        </div>
        <div className="lengthForm">
          <div className="lengthruler">
            <div className="slidecontainer">
              <input
                type="range"
                min="3"
                max="300"
                value="10"
                className="slider"
                id="myRange"
              />
            </div>
          </div>
          <form className="lengthForm" onSubmit={handleSubmit}>
            <label>
              Cable Length:
              <input
                type="number"
                value={length}
                onChange={e => setLength(e.target.value)}
              />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
        <footer className="footer">
          <Button variant="dark">Next</Button>{' '}
        </footer>
      </article>
    </div>
  )
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(LengthComp)
