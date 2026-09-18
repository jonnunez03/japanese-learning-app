import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/vocabulary">Vocabulary</NavLink>
        <NavLink to="/sentence-builder">Sentence Builder</NavLink>
        <NavLink to="/word-forms">Word Forms</NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default AppLayout;
