import { UserRdo } from "@project/core";
import { UserRole } from "@project/shared-types";
import AdminMainNavList from "./admin-main-nav-list";
import UserMainNavList from "./user-main-nav-list";

export type MainNavListProps = {
  user: UserRdo | undefined;
}

export default function MainNavList({ user }: MainNavListProps):JSX.Element {
  
  const getMainNavList = () => {
    if (user && user.role === UserRole.Admin) {
      return (<AdminMainNavList />);
    }

    return (<UserMainNavList />);
  }

  return(
    <ul className="main-nav__list">
      {getMainNavList()}
    </ul>
  );
}