/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Card from "../components/Card";


const SubjectOptions = ({ cardData }) => {
  return (
    <div className="p-4 flex gap-3">
        
    <Card link="/subjectsOption/add" title="Add Subjects">
      <p>Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab nobis.</p>
    </Card>
    <Card link="/subjectsOption/view" title="See  Subjects">
      <p>Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab nobis.</p>
    </Card>

    {/* <Card title="Contact Us">
      <p>Feel free to reach out to us via email or phone.</p>
    </Card> */}
  </div>
  );
};

export default SubjectOptions;
