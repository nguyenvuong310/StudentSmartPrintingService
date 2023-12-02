import Header from "../components/Header";

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

      <div className="mt-1 flex h-[40rem] flex-col items-center bg-bkcs2-fill">
        <span className=" mt-[17rem] hidden bg-white text-4xl font-bold text-blue-700 sm:ml-6 sm:block">
          <i>Welcome to Student Smart Printing Service!</i>
        </span>
      </div>
    </>
  );
};
export default HomePage;
