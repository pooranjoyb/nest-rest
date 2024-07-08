import { useEffect, useState } from "react";
import { base_url } from "./main";
import axios from "axios";

interface EXPENSE {
  id: number;
  createdAt: string;
  updatedAt: string;
  exp_name: string;
  exp_amt: string;
  description: string;
}

function Expenses() {
  const [exps, setExps] = useState<EXPENSE[]>([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const token = localStorage.getItem("token");
      const data = await axios.get(`${base_url}/expenses/all-expenses`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setExps(data.data as EXPENSE[]);
    };

    fetchExpenses();
  }, []);

  if (exps.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full mx-auto mt-2">
      <div className="flex w-full py-3 gap-2">
        <div className="p-4 w-full bg-yellow-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl leading-none w-full">{exps.length}</div>
          <div className="mt-2">Expenses</div>
        </div>
        <div className="p-4 w-full bg-yellow-100 rounded-xl text-gray-800">
          <div className="font-bold text-2xl leading-none w-full">5,5</div>
          <div className="mt-2">Tracked hours</div>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
        <div className="block w-full overflow-x-auto rounded-xl">
          <table className="items-center bg-transparent w-full border-collapse">
            <thead className="bg-[#fde5ff]">
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Expense ID
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Expense Name
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Expense Amount
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Expense Description
                </th>
              </tr>
            </thead>

            <tbody>
              {exps.map((data, index) => (
                <tr key={index}>
                  <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                    {data.id}
                  </th>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                    {data.exp_name}
                  </td>
                  <td className="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    {data.exp_amt}
                  </td>
                  <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                    <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                    {data.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Expenses;
