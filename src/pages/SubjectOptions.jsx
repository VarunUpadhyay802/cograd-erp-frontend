/* eslint-disable react/prop-types */

import Card from "../components/Card";

const SubjectOptions = ({ cardData }) => {
  return (
    <div className="flex flex-col gap-4 xs:flex xs:flex-row">
      <Card
        link="/subjectsOption/add"
        title="Add Subjects"
        subtext="Add subjects to a particular Class by entering subname and subcode"
      >
       
      </Card>
      <Card link="/subjectsOption/view" title="See  Subjects"  subtext="Add subjects to a particular Class by entering subname and subcode">
        
      </Card>

      {/* <Card title="Contact Us">
      <p>Feel free to reach out to us via email or phone.</p>
    </Card> */}
    </div>
  );
};

export default SubjectOptions;
