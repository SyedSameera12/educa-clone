// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Education</h2>
      <ul style={styles.links}>
        <li>Home</li>
        <li>About</li>
        <li>Association</li>
        <li>Gallery</li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    backgroundColor: "#004aad",
    color: "white",
  },
  logo: { margin: 0 },
  links: {
    display: "flex",
    gap: "20px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    cursor: "pointer",
  },
};

export default Navbar;