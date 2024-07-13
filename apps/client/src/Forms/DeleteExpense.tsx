import { useState } from "react";
import { base_url } from "../main";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DeleteExpense() {
  const [exp_name, setExp_name] = useState("");

  const submitHandler = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${base_url}/expenses/delete-expense`,
        {
          exp_name: exp_name,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res);
      toast.success('Expense Deleted!')
    } catch (error) {
        toast.error("Expense doesn't exist!")
      console.error("Error submitting expense:", error);
    }
  };

  return (
    <div>
      <div className="w-full mt-10 mx-auto">
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-green-600 peer"
              placeholder=" "
              value={exp_name}
              onChange={(e) => setExp_name(e.target.value)}
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Expense name
            </label>
          </div>
        </div>

        <button
          onClick={submitHandler}
          className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Delete
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default DeleteExpense;
