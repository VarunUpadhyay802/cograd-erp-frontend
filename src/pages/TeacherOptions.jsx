/* eslint-disable react/prop-types */

import Card from "../components/Card";

// eslint-disable-next-line no-unused-vars
const TeacherOptions = ({ cardData }) => {
  return (
    <div className="p-4 flex gap-3 flex-row flex-wrap justify-center items-center">
      <Card link="/teacher-all-Attendance" title="Mark Attendance at one go">
        <p>
          Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab
          nobis.
        </p>
      </Card>
      <Card
        link="/teacher-individual-attendance"
        title="Edit Teacher's   Attendance"
      >
        <p>
          Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab
          nobis.
        </p>
      </Card>
      <Card link="/teacherRegistration" title="Registration">
        <p>
          Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab
          nobis.
        </p>
      </Card>

      <Card link="/teacherList" title="All Teachers">
        <p>
          Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab
          nobis.
        </p>
      </Card>
      <Card link="/view/teacherAttendance" title="View Teacher's Attendance">
        <p>
          Lorem ipsum dolor sit amet assumenda commodi quidem at tenetur ab
          nobis.
        </p>
      </Card>

      {/* <Card title="Contact Us">
      <p>Feel free to reach out to us via email or phone.</p>
    </Card> */}
    </div>
  );
};

export default TeacherOptions;
