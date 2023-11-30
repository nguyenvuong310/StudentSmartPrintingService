import HeaderStudent from "./HeaderStudent";
import { useState, useEffect } from "react";
import StudentProfile from "./StudentProfile";
import PublicStorage from "./PublicStorage";
import PrivateStorage from "./PrivateStorage";
const HomePageStudent = () => {

  const [check, setCheck] = useState(1);
  useEffect(() => {
    const test = async () => {
      try {
        console.log(check)
      } catch (error) {
        console.error("Error fetching user information:", error);
      }
    };

    test()
  }, [check]);

  const handleOnChangeCheck = (data) => {
    setCheck(() => data)
  }

  return (
    <>
      <HeaderStudent input={handleOnChangeCheck} value={check} />
      {/* <BuyPageModal /> */}
      {/* <div className="flex h-[40rem] p-5 flex-col items-center bg-white-fill">
      </div > */}
      {check == 1 &&
        <PublicStorage />

      }
      {check == 2 &&
        <PrivateStorage />
      }
      {check == 3 && <StudentProfile />

      }


    </>
  );
};

export default HomePageStudent;