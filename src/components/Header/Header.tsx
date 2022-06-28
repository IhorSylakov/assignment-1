import { Link, NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { postSlice } from '../../store/reducers/PostSlice';
import './Header.css';

export default function Header() {
  const dispatch = useAppDispatch();
  const {token} = useAppSelector(state => state.postReducer);

  const handleClickLogout = () => {
    dispatch(postSlice.actions.setToken(''))
    localStorage.removeItem('token');
  }

  return(
    <header className="header" data-testid="header">
      <Link
        to="assignment-1/"
        className="header__logo"
      >
        Logo_
      </Link>
      <nav>
        <ul className="header__nav">
          <li>
            <NavLink
              to="assignment-1/about"
              className="header__link"
            >
              about
            </NavLink>
          </li>
          {!token ? 
            <li>
              <NavLink
                to="assignment-1/"
                className="header__link"
              >
                login
              </NavLink>
            </li>
          :
            <>
              <li>
                <NavLink
                  to="assignment-1/"
                  className="header__link"
                >
                  Dashboard
                </NavLink>
              </li>
              <li>
                <button
                  onClick={() => handleClickLogout()}
                  className="header__link"
                >
                  logout
                </button>
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
}
