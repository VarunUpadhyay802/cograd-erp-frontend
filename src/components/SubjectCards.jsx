import React from 'react'

const SubjectCards = ({subjectsList}) => {
  return (
    <div className='flex flex-col gap-3'>
    {subjectsList.map((subject,index)=>(
        <div key={index} >
         
<a href="#" className="block gap-3 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{subject.subName.toUpperCase()}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">Teacher:{!subject.teacher?"not added":subject.teacher}</p>
</a>

        </div>
    ))}
    </div>
  )
}

export default SubjectCards