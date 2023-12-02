import Footer from "../../components/Footer";
import HeaderAdmin from "./HeaderAdmin";
// import LanguageIcon from "@heroicons/react/24/outline";
import whitefill from "../../assets/white-fill.png";
import {
  UserGroupIcon,
  PrinterIcon,
  ClockIcon
} from "@heroicons/react/24/solid";
import MenuAdmin from "./MenuBarAdmin";
const HomePageAdmin = () => {
  return (
    <>
      <div class="bg-white-fill bg-cover">
        <HeaderAdmin />
        <div class="flex h-screen">
          <div class="fixed top-0 z-20">
            <MenuAdmin />
          </div>




        </div>
      </div>
    </>
  );
};
export default HomePageAdmin;