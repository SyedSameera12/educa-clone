 // src/components/Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Education Technologies. All Rights Reserved.</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#004aad",
    color: "white",
    padding: "15px 0",
    textAlign: "center",
    marginTop: "30px",
  },
};

export default Footer;