import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {LengthComp} from './LengthComp'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email} = props

  function onSubmit() {
    if (email) {
      return <Redirect to="/length/" />
    }
  }

  return (
    <div>
      <h3>Welcome, {email}</h3>
      <div>
        <div className="customBuilderEnter">
          <img src="BlackBTPA.jpg" />
        </div>
        <div className="EnterShopButton">
          <a className="btn" href="/length">
            <button type="button" className="button5">
              Enter The Cable Shop
            </button>
          </a>
        </div>
        {/* <LengthComp /> */}
      </div>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
