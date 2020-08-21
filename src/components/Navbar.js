import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Zach's Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Projects</a>
                        <a className="nav-link" href="#">Contact</a>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;