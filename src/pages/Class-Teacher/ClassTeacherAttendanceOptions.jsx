import Card from "../../components/Card";

const ClassTeacherAttendanceOptions = () => {
  return (
    <>
      <div className="p-4 flex gap-3 flex-row flex-wrap justify-center items-center">
        <Card
          link="/student-mark"
          title="Mark Attendance of Students"
          subtext=".........................."
          image={" /add-transaction.png"}
        />
        <Card
          link="/student-mark-see"
          title="See attendance "
          subtext=".........................."
          image={" /add-transaction.png"}
        />

        {/* <Card 
        link="/view/teacherAttendance" 
        title="View Teacher Attendance"
        subtext="Check attendance records for all teachers."
        image={" /add-transaction.png"}
      /> */}
      </div>
    </>
  );
};

export default ClassTeacherAttendanceOptions;
