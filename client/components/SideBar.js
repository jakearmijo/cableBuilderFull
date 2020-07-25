import React from 'react'

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidenav">
        <div className="sideElm">
          <a href="#home">HOME</a>
        </div>
        <div>
          <a className="sideElm" href="length">
            LENGTH
          </a>
        </div>
        <div className="sideElm">
          <a href="#cable">CABLE</a>
        </div>
        <div className="sideElm">
          <a href="#input">INPUT</a>
        </div>
        <div className="sideElm">
          <a href="#output">OUTPUT</a>
        </div>
        <div className="sideElm">
          <a href="#input">EXTRAS</a>
        </div>
      </div>
    </div>
  )
}
