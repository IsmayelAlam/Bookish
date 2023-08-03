import { useState } from "react";
import { Link } from "react-router-dom";

const subjects = {
  Arts: [
    "Architecture",
    "Art Instruction",
    "Art History",
    "Dance",
    "Design",
    "Fashion",
    "Film",
    "Graphic Design",
    "Music",
    "Music Theory",
    "Painting",
    "Photography",
  ],
  Animals: ["Bears", "Cats", "Kittens", "Dogs", "Puppies"],
  Fiction: [
    "Fantasy",
    "Historical Fiction",
    "Horror",
    "Humor",
    "Literature",
    "Magic",
    "Mystery & detective story",
    "Plays",
    "Poetry",
    "Romance",
    "Science Fiction",
    "Short Stories",
    "Thriller",
    "Young Adult",
  ],
  "Science & Mathematics": [
    "Biology",
    "Chemistry",
    "Mathematics",
    "Physics",
    "Programming",
  ],
  "Business & Finance": [
    "Management",
    "Entrepreneurship",
    "Business Economics",
    "Business Success",
    "Finance",
  ],
  Children: [
    "Kids Books",
    "Stories in Rhyme",
    "Baby Books",
    "Bedtime Books",
    "Picture Books",
  ],
  History: [
    "Ancient Civilization",
    "Archaeology",
    "Anthropology",
    "World War II",
    "Social Life and Customs",
  ],
  "Health & Wellness": [
    "Cooking",
    "Cookbooks",
    "Mental Health",
    "Exercise",
    "Nutrition",
    "Self-help",
  ],
  Biography: [
    "Autobiographies",
    "History",
    "Politics and Government",
    "World War II",
    "Women",
    "Kings and Rulers",
    "Composers",
    "Artists",
  ],
  "Social Sciences": [
    "Anthropology",
    "Religion",
    "Political Science",
    "Psychology",
  ],
};

const keys = Object.keys(subjects);

export default function Subject() {
  const [active, setActive] = useState("Arts");

  return (
    <div className="sm:w-10/12 sm:mx-auto w-max pt-5 px-2 flex text-grayish01 text-sm sm:text-lg capitalize">
      <ul className="border-r-2 border-border02">
        <h2 className="text-xl font-semibold underline mb-10">Subjects</h2>
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
      <ul className="space-y-2 sm:mx-5 mx-2 mt-20 sm:w-auto">
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
  );
}
