const SubjectCards = ({ subjectsList }) => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {subjectsList.map((subject, index) => (
        <div key={index}>
          <div className="max-w-sm">
            <a
              href="#"
              className="block p-6 bg-white border border-gray-200 rounded-lg shadow-lg transition-transform transform hover:-translate-y-1 hover:shadow-xl hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <p className="text-gray-600 bg-orange-300 rounded-md text-center">
                {subject.className?.className || "Unknown"}
              </p>
              <h5 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">
                {subject.subName.toUpperCase()}
              </h5>
              <h5 className="mb-2 text-xl text-gray-900 dark:text-white">
                {subject.subCode.toUpperCase()}
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                Teacher: {subject.teacher?.name ?? "Not Added"}
              </p>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SubjectCards