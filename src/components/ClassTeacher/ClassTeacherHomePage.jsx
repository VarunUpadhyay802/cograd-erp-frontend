import axios from "axios";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const ClassTeacherHomePage = () => {
  const totalUsers = 650;
  const totalTeachers = 30;
  const totalIncome = 10000;
  const totalExpense = 4000;

  const [classTeacherDetails, setClassTeacherDetails] = useState(null);
  const [className, setClassName] = useState(null);

  useEffect(() => {
    // Fetch class teacher details
    const fetchClassTeacherDetails = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/classTeacher/get/details" // Replace with your API endpoint
         , { withCredentials: true }
        );
        setClassTeacherDetails(response);
        console.log(response)
        // setClassName(response.data.details)
        // console.log(className);
      } catch (error) {
        console.error("Error fetching class teacher details:", error);
      }
    };

    fetchClassTeacherDetails();
  }, []);
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14 ">
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
          
            </div>
            <CountUp
              end={totalTeachers}
              duration={3}
              className="text-2xl text-green-500"
            />
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/teacher.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">
              Total Subjects
            </div>
            <div className="text-2xl text-green-500">
            {className}
            </div>
          </div>
          {/* <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
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
          </div> */}
          {/* <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
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
          </div> */}
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

export default ClassTeacherHomePage;
