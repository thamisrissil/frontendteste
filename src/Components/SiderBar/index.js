import './style.css';

export const SiderBar = () => {

  return (

    <div className="sidebar">

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
  );
};