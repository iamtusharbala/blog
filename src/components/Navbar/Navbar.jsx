import "./Navbar.css";

function Navbar({ theme = 'light', onToggleTheme }) {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          tbk.
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#about">
                about
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#workExp">
                workExp
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#skills">
                skills
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#certs">
                certs
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#blogs">
                blogs
              </a>
            </li>
          </ul>
          <div class="ms-auto d-none d-lg-flex align-items-center">
            <button
              type="button"
              class="p-0 border-0 bg-transparent d-flex align-items-center justify-content-center theme-toggle"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              onClick={onToggleTheme}
            >
              {theme === 'dark' ? (
                <i className="fa-solid fa-sun fa-xl"></i>
              ) : (
                <i className="fa-solid fa-moon fa-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
