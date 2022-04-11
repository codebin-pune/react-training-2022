import react from 'react';
import { Link } from 'react-router-dom';

const Header = ({HeaderText}) => {
    return (
        <div>
            <h1>{HeaderText}</h1>
            <nav>
              <Link to="/">Product</Link>
              <Link style={{margin:10}}to="/about">About</Link>
              <Link style={{margin:10}} to="/taskpage">Taskhere</Link>  
              <Link to="/cartprjao" >Cart page</Link>
              <br />
              <Link to="/image">image</Link>
            </nav>
        </div>
    )
}

export default Header;