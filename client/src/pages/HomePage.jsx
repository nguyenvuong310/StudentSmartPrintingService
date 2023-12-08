import Header from "../components/Header";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="mt-1 flex h-[42rem] justify-center flex-col bg-bkcs2-fill bg-cover bg-no-repeat bg-center">

        <span className="self-center md:text-[50px] text-[40px] font-[700] italic  ">
          <h1 style={{
            WebkitTextStroke: '1px white',
            textShadow: "3px 3px 2px #fff"
          }}
            class="text-blue-700  line-clamp-2 h-fit font-md text-center">  Welcome to Student Smart Printing Service! </h1>


        </span>
      </div >
      <Footer />
    </>
  );
};
export default HomePage;