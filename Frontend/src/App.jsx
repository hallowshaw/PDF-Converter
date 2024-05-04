import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Toggle dark mode by adding/removing "dark" class to the root HTML element
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
