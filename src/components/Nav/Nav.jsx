import "./Nav.css";

const Nav = ({topic,back,account,cart}) => {
  return (
    <nav id="navbar">
      <div className="nav-container" >
        <a href="/">
          <img className="back-icons" src={back} alt="Back" />
        </a>
      </div>
      <div>
        <h1 style={{marginLeft:"40px"}} className="topic">{topic}</h1>

      </div>
      <div className="profile-container">
        <a href="">
        <img className="nav-icons" src={account} alt="Account" />
        </a>
        <a href="/cart">
          <img className="nav-icons" src={cart} alt="Cart" />
        </a>
      </div>
    </nav>
  );


};

export default Nav;