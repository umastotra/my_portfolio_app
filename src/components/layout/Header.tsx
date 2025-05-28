import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        {/* Center: Navigation links */}
        <ul className="nav-links">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#projects">PROJECTS</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
