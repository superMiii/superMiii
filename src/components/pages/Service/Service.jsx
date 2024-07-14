import { FaBootstrap, FaCode, FaCss3, FaHtml5, FaLaravel, FaReact } from "react-icons/fa";
import ServiceItem from "./ServiceItem";

const serviceData = [
  {
    id: 1,
    icon: <FaCss3 />,
    title: "Web Design",
    description:
      "Designing and prototyping a web app using tool Figma",
  },
  {
    id: 2,
    icon: <FaCode />,
    title: "Fullstack Web Development",
    description:
      "Building apps (Frontend & Backend) using modern stack (Laravel, CodeIgniter, Node, React, Bootstrap, TailwindCSS)",
  },
  {
    id: 3,
    icon: <FaReact />,
    title: "Frontend Development",
    description:
      "Building UI web & mobile apps using modern tech stack (React, NextJS, React Native)",
  },
  {
    id: 4,
    icon: <FaLaravel />,
    title: "Backend Development",
    description:
      "Building Rest API or Monolith apps using modern stack (ExpressJS, Lumen, Laravel, CodeIgniter, NextJS)",
  },
];

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {serviceData.map((service, id) => (
          <ServiceItem service={service} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Service;
