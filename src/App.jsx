import Footer from "./components/sections/Footer/Footer";
import Navbar from "./components/sections/Navbar/Navbar";
// import ProfileCover from "./components/sections/ProfileCover/ProfileCover";
// import Sidebar from "./components/sections/Sidebar/Sidebar";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, [])
  return (
    <main className="min-h-screen relative bg-gray-50 dark:bg-black pb-10 transition duration-200">
      {/* <ProfileCover /> */}
      <div className="container w-full mx-auto px-4">
        <div className="flex flex-wrap justify-center px-4">
          {/* <div className="w-full lg:w-1/3 ">
            <Sidebar />
          </div> */}
          <div className="md:w-9/12 w-full">
            <Navbar />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
