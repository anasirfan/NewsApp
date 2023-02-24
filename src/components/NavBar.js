import {Link} from "react-router-dom";
import React, { Component } from 'react'

export class NavBar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">NewsBites</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/business'}>Business</Link></li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/entertainment'}>Entertainment</Link></li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/general'}>General</Link></li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/health'}>Health</Link></li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/science'}>Science</Link></li>  
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + 'Sports'}>Sports</Link></li>
        <li className="nav-item"> <Link onClick={() => this.props.setReload(true)} className="nav-link" to={process.env.PUBLIC_URL + '/technology'}>Technology</Link></li>     
      </ul>
      '/about'
    </div>
  </div>
</nav>
      </div>
    )
  }
}

export default NavBar