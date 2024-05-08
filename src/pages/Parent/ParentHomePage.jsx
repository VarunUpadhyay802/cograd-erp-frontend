import { useEffect } from "react";
import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeesDetails } from "../../utils/parentSlice";
import useFetchUserFromJwt from "../../utils/useFetchUserFromJwt";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ParentHomePage = () => {
  const totalFees = useSelector((state) => state.parents.totalFees);
  const totalPaidAmount = useSelector((state) => state.parents.totalPaidAmount);

  const remainingAmount = useSelector((state) => state.parents.remainingAmount);

  const token = Cookies.get("parentToken");
  const decodedToken = jwtDecode(token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (decodedToken.id) {
      dispatch(fetchFeesDetails(decodedToken.id));
      console.log(decodedToken.id);
    }
  }, [dispatch, token]);

  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/students.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Total fees</div>
            <div className="text-2xl text-green-500">
              &#8377;{" "}
              <CountUp
                end={totalFees}
                duration={3}
                className="text-2xl text-green-500"
              />
            </div>
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/teacher.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">Fees Paid</div>
            <div className="text-2xl text-green-500">
              &#8377;{" "}
              <CountUp
                end={totalPaidAmount}
                duration={3}
                className="text-2xl text-green-500"
              />
            </div>
          </div>
          <div className="border p-2 py-4 flex flex-col gap-2 items-center rounded-md shadow-sm bg-white">
            <img src="/teacher.png" alt="" className="h-10 w-10" />
            <div className="mt-1 font-poppins font-semibold">
              Remaining Fees
            </div>
            <div className="text-2xl text-green-500">
              &#8377;{" "}
              <CountUp
                end={remainingAmount}
                duration={3}
                className="text-2xl text-green-500"
              />
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

export default ParentHomePage;
