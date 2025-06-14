import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const hideNav =
    location.pathname === "/sign-in" || location.pathname === "/sign-up";

  return (
    <header className="header">
      <div className="header__inner">
        <Link data-test-id="header-logo" className="header__logo" to="/">
          Travel App
        </Link>
        {!hideNav && (
          <nav data-test-id="header-nav" className="header__nav">
            <ul className="nav-header__list">
              <li className="nav-header__item" title="Bookings">
                <Link
                  data-test-id="header-bookings-link"
                  className="nav-header__inner"
                  to="/bookings"
                >
                  <span className="visually-hidden">Bookings</span>
                  <img src="images/briefcase.svg" alt="bookings" />
                </Link>
              </li>
              <li className="nav-header__item" title="Profile">
                <div
                  data-test-id="header-profile-nav"
                  className="nav-header__inner profile-nav"
                  tabIndex={0}
                >
                  <span className="visually-hidden">Profile</span>
                  <img src="images/user.svg" alt="profile" />
                  <ul
                    data-test-id="header-profile-nav-list"
                    className="profile-nav__list"
                  >
                    <li
                      data-test-id="header-profile-nav-username"
                      className="profile-nav__item"
                    >
                      John Doe
                    </li>
                    <li className="profile-nav__item">
                      <Link
                        data-test-id="header-profile-nav-sign-out"
                        className="profile-nav__sign-out button"
                        to="/sign-in"
                      >
                        Sign Out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
