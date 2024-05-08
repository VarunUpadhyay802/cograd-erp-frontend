import React from "react";
import Card from "../components/Card";

const Extra = () => {
  return (
    <>
      <div className="p-4 flex gap-3 flex-row flex-wrap justify-center items-center">
        <Card
          link="/expenses"
          title="Add Expenses"
          subtext="................................"
          image={" /add-transaction.png"}
        />
        <Card
          link="/driver"
          title="Add driver (bus)"
          subtext="......................................"
          image={" /assignment.png"}
        />
        <Card
          link="/staffs"
          title="Add Staff Members"
          subtext="..................................."
          image={" /add-transaction.png"}
        />
      </div>
    </>
  );
};

export default Extra;
