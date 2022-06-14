import { Link } from 'react-router-dom';
import imgurLogo from '../../assets/icons/svg/imgurLogo.svg';

const Navbar = () => {
  return (
    <header className='navbar'>
      <Link to='/'>
        <div className='logo'>
          <img src={imgurLogo} alt='imgur logo' />
        </div>
      </Link>
      {/* searchbox */}
      {/* profile */}
    </header>
  );
};

export default Navbar;
