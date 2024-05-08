import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeesDetails } from "../../utils/parentSlice";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ParentFeeDetails = () => {
  const totalFeesDetails = useSelector(
    (state) => state.parents.totalFeesDetails
  );

  const totalFeesPaidDetails = useSelector(
    (state) => state.parents.totalFeesPaidDetails
  );

  const totalFees = useSelector((state) => state.parents.totalFees);

  const token = Cookies.get("parentToken");
  const decodedToken = jwtDecode(token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (decodedToken.id) {
      dispatch(fetchFeesDetails(decodedToken.id));
      console.log(decodedToken.id);
    }
  }, [dispatch, token]);

  const convertDate = (timestamp) => {
    return new Date(timestamp).toLocaleString();
  };
  return (
    <div>
      <div className="text-3xl mb-2 text-gray-600 font-bold">
        Fees Structure
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Student
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Class
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Fees (in &#8377;)
              </th>
            </tr>
          </thead>
          <tbody>
            {totalFeesDetails.length > 0 &&
              totalFeesDetails.map((data, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 text-gray-900 capitalize whitespace-nowrap dark:text-white"
                  >
                    {data.studentId.name}
                  </th>
                  <td className="px-6 py-4 capitalize text-center">
                    {data.studentId.className.className}
                  </td>
                  <td className="px-6 py-4 text-center">{data.fees}</td>
                </tr>
              ))}
            <tr>
              <td></td>
              <td></td>
              <td className="px-6 py-4 text-black font-bold text-center">
                Total - {totalFees}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-8 text-3xl mb-2 text-gray-600 font-bold">
        Fees Paid
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 text-center py-3">
                Fees Paid (in &#8377;)
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Remaining Fees (in &#8377;)
              </th>
            </tr>
          </thead>
          <tbody>
            {totalFeesPaidDetails.length > 0 &&
              totalFeesPaidDetails.map((data, index) => (
                <tr
                  key={index}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 text-center  dark:text-white">
                    {data.paidAmount}
                  </td>
                  <td className="px-6 py-4  text-center">
                    {convertDate(data.date)}
                  </td>
                  <td className="px-6 py-4 text-center">
                    {data.remainingAmount}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParentFeeDetails;
