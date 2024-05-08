import CircularProgressWithLabel from "./CircularProgressWithLabel";

const StudentMarksheet = () => {
  return (
    <div>
      <div className="text-3xl font-bold mb-4">Marksheet</div>
      <div>
        <div className="text-xl font-bold mb-2">Formative Assessment 1</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-sm text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Subject
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Total
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Marks Obtained
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Maths
                </th>
                <td className="px-6 py-4 text-center">20</td>
                <td className="px-6 py-4 text-center">6</td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(6 / 20) * 100} />
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Science
                </th>
                <td className="px-6 py-4 text-center">20</td>
                <td className="px-6 py-4 text-center">18</td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(18 / 20) * 100} />
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Social
                </th>
                <td className="px-6 py-4 text-center">20</td>
                <td className="px-6 py-4 text-center">17</td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(17 / 20) * 100} />
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Hindi
                </th>
                <td className="px-6 py-4 text-center">20</td>
                <td className="px-6 py-4 text-center">14</td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(14 / 20) * 100} />
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
                >
                  English
                </th>
                <td className="px-6 py-4 text-center">20</td>
                <td className="px-6 py-4 text-center">15</td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(15 / 20) * 100} />
                </td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 text-base text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Overall
                </th>
                <td className="px-6 py-4 text-base text-center font-bold text-gray-900">
                  100
                </td>
                <td className="px-6 py-4 text-base text-center font-bold text-gray-900">
                  70
                </td>
                <td className="px-6 py-4">
                  <CircularProgressWithLabel value={(70 / 100) * 100} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentMarksheet;
