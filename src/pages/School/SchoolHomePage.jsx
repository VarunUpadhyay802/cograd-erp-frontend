import { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { fetchSchoolStudentList } from "../../utils/studentListSlice";
import { fetchTeachers } from "../../utils/teacherSlice";

const SchoolHomePage = () => {
  const totalIncome = 10000;
  const totalExpense = 4000;

  const dispatch = useDispatch();

  const totalStudents = useSelector(
    (state) => state.studentList.schoolStudentList
  );
  const totalTeachers = useSelector((state) => state.teachers.teachers);
  const loading = useSelector((state) => state.teachers.loading);
  const totalUsers = totalStudents.length;
  const totalTeachersD = totalTeachers.length;
  const status = useSelector((state) => state.studentList.status);

  useEffect(() => {
    dispatch(fetchTeachers());
    dispatch(fetchSchoolStudentList());
  }, [dispatch]);

  if (loading || status !== "idle") {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/students.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">
              Total Students
            </div>
            <CountUp
              end={totalUsers}
              duration={3}
              className="text-2xl text-green-500"
            />
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/teacher.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">
              Total Teachers
            </div>
            <CountUp
              end={totalTeachersD}
              duration={3}
              className="text-2xl text-green-500"
            />
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/cost.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total Income</div>
            <div className="text-2xl text-green-500">
              &#8377;{" "}
              <CountUp
                end={totalIncome}
                duration={3}
                className="text-2xl text-green-500"
              />
            </div>
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/expense.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">
              Total Expenses
            </div>
            <div className="text-2xl text-red-500">
              &#8377;{" "}
              <CountUp
                end={totalExpense}
                duration={3}
                className="text-2xl text-red-500"
              />
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-4 mt-4">
          <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">
            Upcoming Events
          </div>
          <div className="md:flex-1 h-178 border p-3 rounded-md shadow-sm bg-white">
            Important Notices
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolHomePage;
