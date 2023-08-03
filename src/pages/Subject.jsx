import { useState } from "react";
import { Link } from "react-router-dom";
import { subjects } from "../assets/subjects";

const keys = Object.keys(subjects);

export default function Subject() {
  const [active, setActive] = useState("Arts");

  return (
    <div>
      <h2 className="text-2xl font-semibold underline mb-10 text-center text-grayish01 pt-5  sm:hidden">
        Subjects
      </h2>
      <div className="sm:w-10/12 sm:mx-auto w-max pt-5 px-2 flex text-grayish01 text-sm sm:text-lg capitalize">
        <ul className="border-r-2 border-border02">
          {keys.map((key) => (
            <li key={key}>
              <div
                className={`px-2 py-2 my-2 mx-1 sm:mx-5 sm:w-64 rounded-full cursor-pointer border-2  font-semibold ${
                  active === key
                    ? "bg-bg02 border-border01"
                    : "border-transparent"
                }`}
                to={key}
                onClick={() => setActive(key)}
              >
                {key}
              </div>
            </li>
          ))}
        </ul>
        <ul className="space-y-2 sm:mx-5 mx-2 sm:w-auto">
          {subjects[active]?.map((subject) => (
            <Link
              key={subject}
              to={{ pathname: "/search", search: `title=${subject}&page=1` }}
            >
              <div
                className="px-2 py-2 sm:w-64 sm:m-2 hover:bg-bg02 sm:border-2 border-transparent rounded-full transition-all duration-100 hover:border-border01"
                to={subject}
              >
                {subject}
              </div>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
