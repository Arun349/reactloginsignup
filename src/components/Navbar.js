import React from 'react'

function Navbar() {
    return (
        <div>
            <div className="App">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <p className="navbar-brand" >
                            Management System
                        </p>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={'/sign-in'}>
                                        Sign In
                                    </Link> */}
                                </li>
                                <li className="nav-item">
                                    {/* <Link className="nav-link" to={'/sign-up'}>
                                        Sign up
                                    </Link> */}
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
            </div>
            )
}

            export default Navbar