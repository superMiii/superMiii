/* eslint-disable react/prop-types */

const SkillItem = (props) => {
  const { id, icon, title, description } = props.skill;
  return (
    <div className="w-24 h-24 flex flex-wrap items-center justify-center rounded-md text-3xl bg-rose-100 text-rose-800 transition duration-200 hover:bg-rose-800 hover:text-white">
      {icon}
    </div>
  );
};

export default SkillItem;
