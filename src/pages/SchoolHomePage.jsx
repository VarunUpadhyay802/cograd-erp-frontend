
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";

const SchoolHomePage = () => {
  return  <>
    <div className="flex gap-3">
    <LogoutButton/>
  <Link to="/expenses">Income/Expense</Link>
  <Link to="/staff">Staff </Link>
  <Link to="/class">Staff </Link>
    </div>
  </>;
};

export default SchoolHomePage;
