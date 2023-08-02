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
    "Mystery and detective stories",
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
  const [active, setActive] = useState("");

  return (
    <div className=" mt-5 flex">
      <ul>
        {keys.map((key) => (
          <li key={key}>
            <div
              className="px-2 py-2 w-64 hover:bg-slate-300"
              to={key}
              onClick={() => setActive(key)}
            >
              {key}
            </div>
          </li>
        ))}
      </ul>
      <ul>
        {subjects[active || "Arts"]?.map((key) => (
          <Link
            key={key}
            to={{ pathname: "/search", search: `title=${key}&page=1` }}
          >
            <div className="px-2 py-2 w-64" to={key}>
              {key}
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
