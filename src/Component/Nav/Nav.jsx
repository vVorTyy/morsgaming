import React from "react";
import "./Nav.css";
import img from "../../images/111.png";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <section id="nav">
      <div class="container">
        <nav className="navber">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link"  to="/about">about</Link>
          <Link className="nav-link" to="/team">team</Link>
          <img src={img} alt="" />
          <Link className="nav-link" to="/player">player</Link>
          <Link className="nav-link" to="/blog">blog</Link>
          <Link className="nav-link" to="/contact">contact</Link>
        </nav>
      </div>
    </section>
  );
}
