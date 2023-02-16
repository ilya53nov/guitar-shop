import MainNavList, { MainNavListProps } from "./main-nav-list";

export default function MainNav({ user }: MainNavListProps):JSX.Element {
  return(
    <nav className="main-nav">
      <MainNavList user={user} />
    </nav>
  );
}