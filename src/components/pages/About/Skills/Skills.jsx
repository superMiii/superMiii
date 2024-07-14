import SkillItem from "./SkillItem";

const skillData = [
  {
    id: 1,
    title: "Html, Css",
    percentage: "90%",
  },
  {
    id: 2,
    title: "Javascript",
    percentage: "80%",
  },
  {
    id: 3,
    title: "PHP",
    percentage: "80%",
  },
  {
    id: 4,
    title: "TailwindCSS, Bootstrap",
    percentage: "85%",
  },
  {
    id: 5,
    title: "ReactJS",
    percentage: "75%",
  },
  {
    id: 6,
    title: "ExpressJS",
    percentage: "60%",
  },
  {
    id: 7,
    title: "Laravel",
    percentage: "75%",
  },
  {
    id: 8,
    title: "CodeIgniter",
    percentage: "75%",
  },
  {
    id: 9,
    title: "Postgresql, MySQL",
    percentage: "75%",
  },
  {
    id: 10,
    title: "Git",
    percentage: "80%",
  },
];

const Skills = () => {
  return (
    <div className="py-4">
      <div className="flex flex-wrap p-8 md:mx-4 bg-white dark:bg-zinc-900 rounded-md shadow-md" data-aos="fade-up">
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 dark:text-gray-50 font-bold mb-4">Skills</h3>
          </div>
        </div>
        {skillData.map((skill, id) => (
          <SkillItem skill={skill} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
