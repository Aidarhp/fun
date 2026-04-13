import Logo from "../../assets/header/Group 444.png";
const header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <ul className="header_container_list">
          <li className="header_container_list_item-1">
            <img src={Logo} alt="Logo" />
          </li>
          <li className="header_container_list_item-2">
            <ul>
              <li> <a href="#">Home</a></li>
              <li> <a href="#">Courses</a></li>
              <li> <a href="#">Carreers</a></li>
              <li> <a href="#">blog</a></li>
              <li> <a href="#">About Us</a></li>
            </ul>
          </li>
          <li className="header_container_list_item-3">
            <ul className="header_container_list_item-3_list">
              <li className="header_container_list_item-3_list_item">
                <div className="header_container_list_item-3_list_item_login">
                  <a href="#">Login</a>
                </div>
                <div className="header_container_list_item-3_list_item_signup">
                  <a href="#">Sign Up</a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default header;
