import React from 'react'
import PropTypes from "prop-types"

export default function Header(props){
    return(
       <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light d-none d-sm-block">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.brand}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
       
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="container d-md-none">
  <div className="row">
    <div className="col-3 bg-dark pb-2 ">
    <button className=" btn font mt-2 text-white" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-border-width" viewBox="0 0 16 16">
  <path d="M0 3.5A.5.5 0 0 1 .5 3h15a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-2zm0 5A.5.5 0 0 1 .5 8h15a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1zm0 4a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5z"/>
</svg></button>

<div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabindex="-1" id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
  <div className="offcanvas-header bg-dark text-white">
    <h5 className="offcanvas-title" id="offcanvasScrollingLabel">Sa_Chi</h5>
    <button type="button" className="btn-close text-reset btn-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>

    
  </div>
  <div className="offcanvas-body">
  <p>hello this is offcanvas </p>
  </div>
</div>
</div>

    <div className="col-9 bg-dark">
    <form>
        <input className="form-control pe-5 mt-2" type="search" placeholder="Search anything..." aria-label="Search"/>
      </form>
    </div>
    
  </div>
</div>
       </div>
    )
}

Header.defaultProps={
  brand:"not given"
}

Header.protoTypes={
    brand: PropTypes.string
}
