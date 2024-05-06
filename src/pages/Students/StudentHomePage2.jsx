import React from "react";
import Card from "../../components/Card";

const StudentHomePage2 = () => {
  return (
    <>
    {/* justify-center */}
      <div className="p-4 flex gap-3 flex-row flex-wrap  items-center">
        <Card
          link="/studentRegistration"
          title="Student Registration"
          subtext="Register the student with all the details "
          image={" /add-transaction.png"}
        />
      </div>
    </>
  );
};

export default StudentHomePage2;
