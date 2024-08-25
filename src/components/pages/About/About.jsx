/* eslint-disable react/prop-types */
import Skills from "./Skills/Skills";
import {
  FaFacebookF,
  FaGithub,
  FaGitlab,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import profile from "../../../images/profile.jpeg";

const socials = [
  {
    id: 1,
    icon: <FaFacebookF />,
    link: "https://facebook.com/fahminurfalah",
  },
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/superMiii",
  },
  {
    id: 3,
    icon: <FaGitlab />,
    link: "https://gitlab.com/fahmin09",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    link: "https://linkedin.com/in/fahmi-nurfalah",
  },
  {
    id: 5,
    icon: <FaInstagram />,
    link: "https://instagram.com/fahminurfalah_",
  },
];
const About = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        <div className="p-8 my-4 md:mx-4 bg-white dark:bg-zinc-900 rounded-md shadow-md" data-aos="fade-up">
          <div className="md:mx-4">
            <div className="w-24 h-24 rounded-md overflow-hidden mx-auto mb-5">
              <img src={profile} alt="fahminurfalah" className="w-full" />
            </div>
            <div className="text-center">
              <h1 className="text-xl text-gray-800 dark:text-gray-50 font-bold mb-1">Fahmi Nurfalah</h1>
              <p className="text-sm text-gray-400 dark:text-gray-50 mb-3">
                Fullstack Web Developer at
                <a href="https://dialoguegroup.net" target="_blank" className="text-rose-800 pl-1">
                  Dialogue Group
                </a>
              </p>
              <a
                href="/public/resume_fahmi_new.pdf"
                className="inline-block mb-3 rounded-full bg-rose-800 text-center border-0 py-1 px-3 text-white leading-7 tracking-wide hover:bg-rose-950"
                download="Resume Fahmi" target="_blank"
              >
                Download Resume
              </a>
              <ul className="flex flex-wrap justify-center">
                {socials.map((social, id) => (
                  <SocialIcon social={social} key={id} />
                ))}
              </ul>
            </div>
            <div className="text-start pt-4">
              <h3 className="text-md mb-2 uppercase font-medium text-gray-800 dark:text-gray-50">
                About Me
              </h3>
              <p className="text-gray-400 dark:text-gray-50 text font-light leading-relaxed">
                A Man who love tech and still learning on programming web dev with
                almost 2 years of experience in real project using modern stack.
              </p>
            </div>
          </div>
        </div>
        <Skills />
      </div>
    </section>
  );
};

export default About;

const SocialIcon = (props) => {
  const { icon, link } = props.social;
  return (
    <li className="m-2">
      <a
        href={link}
        target="_blank"
        className="w-8 h-8 bg-rose-100 rounded text-rose-950 flex items-center justify-center hover:text-white hover:bg-rose-800"
      >
        {icon}
      </a>
    </li>
  );
};
