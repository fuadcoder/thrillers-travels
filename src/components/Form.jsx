import { FaUserAlt } from "react-icons/fa";
import { MdFlightLand, MdFlightTakeoff } from "react-icons/md";
import { GiFiles } from "react-icons/gi";

export default function Form() {
  return (
    <form action="" className="mx-6">
          <p className="text-xs mb-2 text-slate-500 font-semibold">
            Depart from
          </p>
          <div className="relative text-slate-500 mb-2">
            <MdFlightTakeoff className="absolute left-3 top-3 text-xl cursor-pointer" />
            <input
              type="text"
              id="departs"
              placeholder="London - All Airports, England, UK"
              maxLength="32"
              minLength="10"
              required
              className="w-full pl-10 py-3 text-sm text-sla bg-white border border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />
          </div>
          <p className="text-xs mb-2 text-slate-500 font-semibold">Arrive at</p>

          <div className="relative text-slate-500 mb-6">
            <MdFlightLand className="absolute left-3 top-3 text-xl cursor-pointer" />
            <input
              type="text"
              id="arrive"
              placeholder="New York - All Airports, New York, USA"
              maxLength="32"
              minLength="10"
              required
              className="w-full pl-10 py-3 text-sm bg-white border border-slate-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6"
            />
          </div>

          <div className="flex space-x-6 mb-6">
            <div>
              <p className="text-xs mb-2 text-slate-500 font-semibold">
                Departure Date
              </p>
              <input
                type="date"
                id="departure"
                min="1"
                max="50"
                required
                className="w-full px-4 py-2 text-sm text-slate-500 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
            </div>
            <div>
              <p className="text-xs mb-2 text-slate-500 font-semibold">
                Return Date
              </p>
              <input
                type="date"
                id="return"
                required
                className="w-full px-4 py-2 text-sm text-slate-500 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
            </div>
          </div>

          <div className="flex space-x-6 mb-2">
          <div>
              <p className="text-xs mb-2 text-slate-500 font-semibold">
                Class
              </p>
              <div className="relative text-slate-500 mb-6">
                <GiFiles className="absolute left-3 top-3 text-sm cursor-pointer" />
                <input
                type="text"
                id="passengers"
                placeholder="Economy"
                required
                className="w-full px-4 py-2 text-sm text-slate-500 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              </div>
              
            </div>
            <div>
              <p className="text-xs mb-2 text-slate-500 font-semibold">
                Passengers
              </p>
              <div className="relative text-slate-500 mb-6">
                <FaUserAlt className="absolute left-3 top-3 text-sm cursor-pointer" />
                <input
                type="number"
                id="passengers"
                placeholder="0"
                required
                className="w-full px-4 py-2 text-sm text-slate-500 bg-white border border-gray-300 rounded transition duration-200 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              </div>
            </div>
          </div>
          <button
          type="submit"
          className="mb-6 w-full bg-blue-600 px-7 py-3 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg active:bg-blue-800 active:shadow-lg transition duration-200 ease-in-out"
        >
          Find Flight
        </button>
        </form>
  )
}
