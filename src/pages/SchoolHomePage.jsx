
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const SchoolHomePage = () => {
  return <>
    <LogoutButton/>
  <Link to="/expenses">Income/Expense</Link>
  <Link to="/staff">Staff </Link>
  </>;
};

export default SchoolHomePage;
