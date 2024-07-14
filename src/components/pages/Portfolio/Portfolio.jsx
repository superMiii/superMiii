import image1 from "../../../images/portfolio/project-01.jpg";
import image2 from "../../../images/portfolio/project-02.jpg";
import image3 from "../../../images/portfolio/project-03.jpg";
import hris from "../../../images/portfolio/hris.png";
import sme from "../../../images/portfolio/project_sme.png";
import tokobajusri from "../../../images/portfolio/tokobajusri.jpeg";
import saktigo from "../../../images/portfolio/saktigo.png";
import perpussmanli from "../../../images/portfolio/perpussman5.png";
import puncakbuluh from "../../../images/portfolio/puncakbuluh.jpeg";
import PortfolioItem from "./PortfolioItem";

const portfolioData = [
  {
    id: 1,
    image: image1,
    title: "Distributor (ERP)",
    link: "https://apps.dialoguegroup.net/sim/",
    description:
      "applications (ERP) to support distributor companies in dialogue groups such as sales force and marketing tools",
  },
  {
    id: 2,
    image: image2,
    title: "Production Web Apps",
    link: "https://apps.dialoguegroup.net/dg/",
    description:
      "application to support production companies in dialogue groups to handle materials and finished goods which will later be sold to distributor companies",
  },
  {
    id: 3,
    image: hris,
    title: "Human Resource Information System (HRIS)",
    link: "https://apps.dialoguegroup.net/hris/",
    description:
      "application used for the HR team to manage employee data, payroll, HR processes, and decision making regarding employees.",
  },
  {
    id: 4,
    image: image3,
    title: "Budgeting Support",
    link: "https://apps.dialoguegroup.net/budgeting/",
    description:
      "application used by the finance team to manage budgeting for work stationery, office and household supplies",
  },
  {
    id: 5,
    image: image3,
    title: "Digico",
    link: "https://apps.dialoguegroup.net/digico/",
    description:
      "application used by all employees in the dialogue group to organize and manage tasks given by their superiors",
  },
  {
    id: 6,
    image: sme,
    title: "Share My Events (REST API)",
    link: "https://sharemyevents.netlify.app",
    description:
      "an application that displays a list of the latest and most updated events with a recommendation system feature in it",
  },
  {
    id: 7,
    image: tokobajusri,
    title: "Toko Baju Sri",
    link: "#",
    description:
      "application that displays catalogs of clothing stores and boutiques",
  },
  {
    id: 8,
    image: saktigo,
    title: "SaktiGo",
    link: "#",
    description:
      "application to search for candidates and search for jobs like jobstreet",
  },
  {
    id: 9,
    image: perpussmanli,
    title: "Repository Perpustakaan SMAN 5 Sukabumi",
    link: "#",
    description:
      "application that can store student written work",
  },
  {
    id: 10,
    image: puncakbuluh,
    title: "Puncak Buluh",
    link: "#",
    description:
      "application regarding information on tourist attractions in Puncak Buluh complete with a list of accommodation and facilities available there",
  },
];

const Portfolio = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {portfolioData.map((portfolio, id) => (
          <PortfolioItem portfolio={portfolio} key={id} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
