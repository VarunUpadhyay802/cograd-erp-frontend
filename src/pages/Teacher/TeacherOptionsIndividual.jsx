import React from 'react'
import Card from '../../components/Card'
const TeacherOptionsIndividual = () => {
  return (
    <>
         <div className="p-4 flex gap-3 flex-row flex-wrap justify-center items-center">
      <Card 
        link="/teacher-mark-self" 
        title="Mark Your own attendance "
        subtext=".............. "
        image={" /add-transaction.png"}
      />

      <Card 
        link="/teacher-mark-see" 
        title="See your own attendance"
        subtext=".............. "
        image={" /add-transaction.png"}
      />

   
    </div> 
    </>
  )
}

export default TeacherOptionsIndividual
