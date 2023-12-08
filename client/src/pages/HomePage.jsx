import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mt-1 flex h-[42rem] flex-col items-center bg-bkcs2-fill bg-cover bg-no-repeat">
        <span className=" hidden sm:ml-6 sm:block font-bold mt-[17rem] italic text-[42px] ">
          <svg height="80" width="900" class="fill-blue-700 stroke-[#ffffff] stroke-[0.75px] font-extrabold text-[40px]">
            <text x="0" y="40"> Welcome to Student Smart Printing Service!</text>
          </svg>
        </span>
      </div >
      <Footer />
    </>
  );
};
export default HomePage;