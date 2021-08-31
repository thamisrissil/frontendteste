import './App.css';
function App() {
  return (
    <div class="wrapper d-flex">
    <div class="sidebar">
        <ul>
            <li><i className="fas fa-home"></i> Dashboard</li>
            <li><i className="far fa-circle"></i> eCommerce</li>
        </ul> <small className="text-muted px-3">APPS</small>
        <ul>
            <li><i className="far fa-envelope"></i> Email</li>
            <li><i className="far fa-comment-alt"></i> Chat</li>
            <li><i className="far fa-check-square"></i> Todo</li>
            <li><i className="far fa-calendar"></i> Calendar</li>
        </ul> <small className="text-muted px-3">UI ELEMENTS</small>
        <ul>
            <li><i className="fas fa-border-all"></i> Grid</li>
            <li><i className="fas fa-tint"></i> Colors</li>
            <li><i className="far fa-credit-card"></i> Card</li>
            <li><i className="fas fa-th-large"></i> Table</li>
            <li><i className="fas fa-archive"></i> Components</li>
        </ul> <small className="text-muted px-3">FORMS</small>
        <ul>
            <li> <i className="far fa-clone"></i> Form Elements</li>
            <li> <i className="fas fa-video"></i> Form Layouts</li>
            <li> <i className="far fa-file-alt"></i> Form Wizard</li>
            <li> <i className="fas fa-check-circle"></i> Validation</li>
        </ul>
    </div>
<div class="page">
<nav class="navbar navbar-expand-lg navbar-light bg-light ">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <a>
          <i class="far fa-check-square"></i>
          </a>
        <a>
        <i class="far fa-comment-alt"></i>
        </a>
        <a>
        <i class="far fa-envelope"></i>
        </a>
        <a>
        <i class="far fa-calendar"></i>
        </a>
        <a>
        <i class="far fa-star"></i>
        </a>
        <li>
          <a class="nav-link" href="#">English</a>
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <i class="fas fa-bell"></i>
      </a>

        <i class="fas fa-search"></i>
        <span class="badge rounded-pill">1</span>
      <a
        class="dropdown-toggle d-flex align-items-center hidden-arrow"
        href="#"
        id="navbarDropdownMenuLink"
        role="button"
        data-mdb-toggle="dropdown"
        aria-expanded="false"
      >
        John Doe
        <img
          src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          class="rounded-circle"
          height="25"
          alt=""
          loading="lazy"
        />
      </a>
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuLink"
      >
        <li>
          <a class="dropdown-item" href="#">My profile</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Settings</a>
        </li>
        <li>
          <a class="dropdown-item" href="#">Logout</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

</div>



  );
}

export default App;
