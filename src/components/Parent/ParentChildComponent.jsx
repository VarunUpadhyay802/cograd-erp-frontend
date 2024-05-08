import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { fetchParentDetails } from "../../utils/parentSlice";

const ParentChildComponent = () => {
  const parentDetails = useSelector((state) => state.parents.parentDetails);

  const token = Cookies.get("parentToken");
  const decodedToken = jwtDecode(token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (decodedToken.id) {
      dispatch(fetchParentDetails(decodedToken.id));
    }
  }, [dispatch, token]);

  console.log(parentDetails);
  return (
    <div className="h-full w-full flex items-center justify-center gap-4 flex-wrap">
      {parentDetails &&
        parentDetails.students.map((data, index) => (
          <div
            key={index}
            className=" bg-violet-950 text-white flex flex-col gap-2 items-center shadow-md border-black rounded-2xl px-2 py-5 h-auto w-[16rem]"
          >
            <img
              src={data.studentId.profile}
              alt=""
              className="h-20 w-20 rounded-full"
            />
            <div className="text-xl font-bold capitalize">
              {data.studentId.name}
            </div>

            <div className="flex gap-2 items-center justify-center text-sm">
              <div>
                <div>Reg No</div>
                <div className="">Roll No</div>
                <div>Email</div>
                <div className="">Class</div>
                <div className="">Contact</div>
              </div>
              <div>
                <div>: 1234</div>
                <div>: 1234</div>
                <div>: {data.studentId.email}</div>
                <div>: {data.studentId.className.className}</div>
                <div>: 1234567890</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ParentChildComponent;
