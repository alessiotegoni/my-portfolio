export default function Navbar() {
  return (
    <header className="header">
      <nav className="flex items-center justify-between gap-5">
        <a href="#home" className="nav_link">
          Home
        </a>
        <a href="#skills" className="nav_link">
          Skills
        </a>
        <a href="#projects" className="nav_link">
          Projects
        </a>
      </nav>
    </header>
  );
}
