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

export default function Subject() {
  return (
    <ul className="w-10/12 mx-auto mt-5">
      {Object.entries(subjects).map(([key, value]) => (
        <li key={key} className="px-2 py-2 hover:bg-slate-300">
          {key}
        </li>
      ))}
    </ul>
  );
}
