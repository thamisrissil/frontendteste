const Page = () => {

    return (
        <div className="page">
        <nav className="nav-app">
          <div class="container-nav container">
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <a>
                  <i className="far fa-check-square"></i>
                </a>
                <a>
                  <i className="far fa-comment-alt"></i>
                </a>
                <a>
                  <i className="far fa-envelope"></i>
                </a>
                <a>
                  <i className="far fa-calendar"></i>
                </a>
                <a>
                  <i className="far fa-star"></i>
                </a>
                <li>
                  <a className="nav-link" href="#">English</a>
                </li>
              </ul>
            </div>
            <div className="d-flex align-items-center">
              <a className="text-reset me-3" href="#">
                <i className="fas fa-bell"></i>
              </a>
              <i className="fas fa-search"></i>
              <span className="badge rounded-pill">1</span>
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                John Doe
                <img
                  src="https://mdbootstrap.com/img/new/avatars/2.jpg"
                  className="rounded-circle"
                  height="25"
                  alt=""
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">My profile</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Settings</a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
};
export default Page;
