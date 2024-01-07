import { useContext } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../context/EmployeeContext";

export const EmployeeList = () => {
  const { employees, removeEmployee } = useContext(EmployeeContext);

  return (
    <>
      {employees.length > 0 ? (
        <>
          <>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-left text-black-500 uppercase"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-left text-black-500 uppercase"
                  >
                    Employee Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-left text-black-500 uppercase"
                  >
                    Employee Designation
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-left text-black-500 uppercase"
                  >
                    Employee Location
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-md font-bold text-right text-black-500 uppercase "
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              {employees.map((employee) => (
                <tbody className="divide-y divide-gray-200" key={employee.id}>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {employee.id}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {employee.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {employee.designation}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                      {employee.location}
                    </td>

                    <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                      <Link to={`/edit/${employee.id}`} title="Edit Employee">
                        <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-edit"
                          >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </div>
                      </Link>
                      <button
                        onClick={() => removeEmployee(employee.id)}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                        title="Remove Employee"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-trash-2"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </>
        </>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">
          No Employee Data is found!
        </p>
      )}
    </>
  );
};

/*
{employees.map((employee) => (
            <div
              className="flex items-center bg-gray-100 mb-10 shadow"
              key={employee.id}
            >
              <div className="flex-auto text-left px-4 py-2 m-2">
                <p className="text-gray-900 leading-none">{employee.name}</p>
                <p className="text-gray-600">{employee.designation}</p>
                <span className="inline-block text-sm font-semibold mt-1">
                  {employee.location}
                </span>
              </div>
              <div className="flex-auto text-right px-4 py-2 m-2">
                <Link to={`/edit/${employee.id}`} title="Edit Employee">
                  <div className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-edit"
                    >
                      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                    </svg>
                  </div>
                </Link>
                <button
                  onClick={() => removeEmployee(employee.id)}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
                  title="Remove Employee"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-trash-2"
                  >
                    <polyline points="3 6 5 6 21 6"></polyline>
                    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                    <line x1="10" y1="11" x2="10" y2="17"></line>
                    <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              </div>
            </div>
          ))}
*/
