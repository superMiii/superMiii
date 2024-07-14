/* eslint-disable react/prop-types */

const ServiceItem = (props) => {
  const { id, icon, title, description } = props.service;
  return (
    <div className="w-full lg:w-1/2">
      <div
        className="my-4 md:mx-4 shadow p-6 flex gap-5 rounded-md bg-white dark:bg-zinc-900 group hover:shadow-md"
        data-aos={id % 2 == 0 ? "fade-left" : "fade-right"}
      >
        <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-rose-100 text-rose-800 transition duration-200 group-hover:bg-rose-800 group-hover:text-white">
          {icon}
        </div>
        <div className="w-4/5">
          <h3 className="text-lg font-medium text-gray-800 dark:text-gray-50 mb-2">{title}</h3>
          <p className="text-gray-400 dark:text-gray-50 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
