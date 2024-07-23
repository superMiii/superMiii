import { FaCode, FaCss3, FaCss3Alt, FaGit, FaGitAlt, FaGithub, FaGitlab, FaHtml5, FaJs, FaLaravel, FaPhp, FaPython, FaReact } from "react-icons/fa";
import SkillItem from "./SkillItem";

const styleIcon = `h-10 w-10`;

const skillData = [
  {
    id: 1,
    icon: <FaCss3Alt className={styleIcon} />,
  },
  {
    id: 2,
    icon: <FaHtml5 className={styleIcon} />,
  },
  {
    id: 3,
    icon: <FaJs className={styleIcon} />,
  },
  {
    id: 4,
    icon: <FaPhp className={styleIcon} />,
  },
  {
    id: 5,
    icon: <FaPython className={styleIcon} />,
  },
  {
    id: 6,
    icon: <FaLaravel className={styleIcon} />,
  },
  {
    id: 7,
    icon: <FaReact className={styleIcon} />,
  },
  {
    id: 8,
    icon: <FaGitAlt className={styleIcon} />,
  },
];

const Skills = () => {
  return (
    <div className="py-4 w-full">
      <div
        className="grid flex-wrap p-8 md:mx-4 bg-white dark:bg-zinc-900 rounded-md shadow-md"
        data-aos="fade-up"
      >
        <div className="w-full">
          <div className="md:mx-4">
            <h3 className="text-2xl text-gray-800 dark:text-gray-50 font-bold mb-4">
              Skills
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-8 grid-cols-2 lg:gap-4 gap-2 justify-items-center">
          {skillData.map((skill, id) => (
            <SkillItem skill={skill} key={id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
