// src/pages/Home.js
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section style={styles.hero}>
        <div>
          <h1 style={styles.heroTitle}>Empowering Education for All</h1>
          <p style={styles.heroSubtitle}>
            We provide innovative learning solutions for a brighter future.
          </p>
          <button style={styles.heroButton}>Learn More</button>
        </div>
      </section>

      {/* About Preview */}
      <section style={styles.section}>
        <h2>Who We Are</h2>
        <p>
          Education Technologies is dedicated to delivering cutting-edge
          educational tools and resources to empower learners and educators
          worldwide.
        </p>
      </section>

      {/* Services */}
      <section style={styles.section}>
        <h2>Our Services</h2>
        <div style={styles.serviceGrid}>
          <div style={styles.serviceCard}>Online Courses</div>
          <div style={styles.serviceCard}>Skill Development</div>
          <div style={styles.serviceCard}>Educational Consulting</div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const styles = {
  hero: {
    height: "80vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    padding: "0 20px",
  },
  heroTitle: { fontSize: "3rem", marginBottom: "10px" },
  heroSubtitle: { fontSize: "1.2rem", marginBottom: "20px" },
  heroButton: {
    padding: "10px 20px",
    backgroundColor: "#ffb703",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  section: {
    padding: "50px 20px",
    textAlign: "center",
  },
  serviceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginTop: "20px",
  },
  serviceCard: {
    backgroundColor: "#f4f4f4",
    padding: "20px",
    borderRadius: "10px",
    fontWeight: "bold",
  },
};

export default Home;