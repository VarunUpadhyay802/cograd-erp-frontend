import { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { setStudentData } from "../../utils/studentListSlice";
import { setTeacherData } from "../../utils/teacherListSlice";
import axios from "axios";

const SchoolHomePage = () => {
 
  
  const totalIncome = 10000;
  const totalExpense = 4000;
  const dispatch = useDispatch();
  const { totalStudents, studentList } = useSelector((state) => state.studentList);
  const { totalTeachers, teacherList } = useSelector((state) => state.teacherList);
  const totalUsers = totalStudents;
  const totalTeachersD = totalTeachers;
  useEffect(()=>{
    if (studentList.length === 0) {
      axios.get("http://localhost:4000/student/get/list", {
       withCredentials: true,
     })
       .then((response) => {
         dispatch(setStudentData(response.data)); // set the data in Redux
       })
       .catch((error) => {
         console.error('Error fetching student data:', error);
       });
   }
  },[dispatch, studentList,])

  useEffect(()=>{
    if (teacherList.length === 0) {
      axios.get("http://localhost:4000/teacher/get/list", {
       withCredentials: true,
     })
       .then((response) => {
         dispatch(setTeacherData(response.data)); // set the data in Redux
       })
       .catch((error) => {
         console.error('Error fetching student data:', error);
       });
   }
  },[dispatch, teacherList,])

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