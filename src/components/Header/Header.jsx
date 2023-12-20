import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <nav>
          <Link to=''>Home</Link>
          <Link to='/review'>Order</Link>
          <Link to='/about'>About</Link>
          <Link to='/contuct'>Contuct</Link>
          <Link to='/grandpa'>Grandpa</Link>
        </nav>
    );
};

export default Header;