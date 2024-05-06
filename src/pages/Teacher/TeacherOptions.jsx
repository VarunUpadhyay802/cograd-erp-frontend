import Card from '../../components/Card';

const TeacherOptions = () => {
  
  return (
    <div className="p-4 flex gap-3 flex-row flex-wrap justify-center items-center">
      <Card 
        link="/teacher-all-Attendance" 
        title="Mark Attendance at One Go"
        subtext="Mark attendance for all classes simultaneously."
        image={" /add-transaction.png"}
      />

      <Card 
        link="/teacher-individual-attendance" 
        title="Edit Individual Attendance"
        subtext="Modify attendance records for individual teachers."
        image={" /add-transaction.png"}
      />

      <Card 
        link="/teacherRegistration" 
        title="Teacher Registration"
        subtext="Add new teachers to the system."
        image={" /assignment.png"}
      />

      <Card 
        link="/teacherList" 
        title="All Teachers"
        subtext="List of all the Teachers & access to classTeachers"
        image={" /list.png"}
      />

      <Card 
        link="/view/teacherAttendance" 
        title="View Teacher Attendance"
        subtext="Check attendance records for all teachers."
        image={" /add-transaction.png"}
      />
    </div>
  );
};

export default TeacherOptions;
