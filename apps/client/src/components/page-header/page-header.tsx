import { UserRole } from "@project/shared-types";
import MainNav from "./main-nav/main-nav"
import { MainNavListProps } from "./main-nav/main-nav-list";

const enum ClassNameUserStatus {
  Logged = 'header--logged header',
  Admin = 'header--admin header',
  NotLogged = 'header',
}

export default function PageHeader({ user }: MainNavListProps):JSX.Element {
  const getClassNameUserStatus = () => {
    if (user) {
      if (user.role === UserRole.Admin) {
        return ClassNameUserStatus.Admin;
      }
      if (user.role === UserRole.User) {
        return ClassNameUserStatus.Logged;
      }      
    }

    return ClassNameUserStatus.NotLogged;
  }

  return(
    <header className={getClassNameUserStatus()} id="header">
      <div className="container">
        <div className="header__wrapper"><a className="header__logo logo"><img className="logo__img" width="70" height="70" src="src/assets/img/svg/logo.svg" alt="Логотип" /></a>
          <MainNav user={user}/>
          <div className="header__container">
            <span className="header__user-name">Имя</span>
            <a className="header__link" href="login.html" aria-label="Перейти в личный кабинет">
              <svg className="header__link-icon" width="12" height="14" aria-hidden="true">
                <use xlinkHref="#icon-account"></use>
              </svg>
              <span className="header__link-text">Вход</span>
            </a>
            <a className="header__cart-link" href="cart.html" aria-label="Перейти в корзину">
              <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
                <use xlinkHref="#icon-basket"></use>
              </svg>
              <span className="header__cart-count">2</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}