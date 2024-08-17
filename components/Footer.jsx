import React from "react";

export default function Footer() {
  return (
    <div>
      <div style={styles.container}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav style={styles.nav}>
          <a href="/about" style={styles.link}>
            About Us
          </a>
          <a href="/contact" style={styles.link}>
            Contact
          </a>
          <a href="/privacy" style={styles.link}>
            Privacy Policy
          </a>
        </nav>
      </div>
    </div>
  );
}
