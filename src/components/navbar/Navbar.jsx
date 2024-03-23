import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
      <NavLink to="/" className={styles.brand}>Projeto <span>Pangeia</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="CharCreate" className={({ isActive }) => (isActive ? styles.active : "")}>CharCreate</NavLink>
        </li>
        <li>
          <NavLink to="/BuildCalculator" className={({ isActive }) => (isActive ? styles.active : "")}>BuildCalculator</NavLink>
        </li>
        <li>
          <NavLink to="/ItemCalculator" className={({ isActive }) => (isActive ? styles.active : "")}>ItemCalculator</NavLink>
        </li>
        <li>
          <NavLink to="/CraftSystem" className={({ isActive }) => (isActive ? styles.active : "")}>CraftSystem</NavLink>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;