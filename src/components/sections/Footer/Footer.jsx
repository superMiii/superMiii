const Footer = () => {
  return (
    <footer className="bg-white dark:bg-zinc-900 p-4 absolute bottom-0 left-0 w-full">
      <div className="container mx-auto px-4">
        <p className="text-sm text-gray-400 dark:text-gray-50 text-center">
          Designed and Developed by
          <a
            className="text-rose-800 dark:text-rose-500"
            href="https://id.linkedin.com/in/fahmi-nurfalah/"
            rel="nofollow"
            target="_blank"
          >
            {" "}
            Fahmi
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
