import HomeCarousel from "../components/HomeCarousel";
import Header from "../components/Header";
import HomeCard from "../components/HomeCard";
import SimpleCard from "../components/SimpleCard";
import { Typography } from "@material-tailwind/react";
import {
  FaceSmileIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="my-5 flex h-[60rem] flex-col items-center bg-white-fill">
        <HomeCarousel />
      </div>
    </>
  );
};

export default HomePage;
