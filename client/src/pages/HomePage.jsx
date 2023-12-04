import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mt-1 flex h-[42rem] flex-col items-center bg-bkcs2-fill bg-no-repeat">
        <span className=" hidden sm:ml-6 sm:block font-bold mt-[17rem] text-4xl text-blue-700 bg-white">
          <i>Welcome to Student Smart Printing Service!</i>
        </span>
      </div>
      <Footer />
    </>
  );
};
export default HomePage;