/** @format */

import dumBell from "../../../assets/dumbell-pench.mp4";
import penchBar from "../../../assets/pench-bar.mp4";
import { useEffect } from "react";

function Chest() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  

  return (
    <>
      <h1 className="mt-10 mb-32 text-white text-center pt-32 text-4xl font-bold uppercase">
        Chest
      </h1>

      <div className="space-y-24">
        {/* Exercise 1 */}
        <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 overflow-hidden">
          {/* Text Section */}
          <div className="lg:w-1/2 text-white space-y-5">
            <h2 className="text-2xl font-bold">
              <i className="fa-thin fa-chevron-right mr-2 text-red-500"></i>
              Incline Dumbbell Bench Press
            </h2>
            <div className=" p-6 rounded-lg shadow-lg space-y-5">
              <h3 className="font-light text-lg">Exercise Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold">Target Muscle Group</span>
                  <span>Chest</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Exercise Type</span>
                  <span>Strength</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Equipment Required</span>
                  <span>Dumbbell</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Mechanics</span>
                  <span>Isolation</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Force Type</span>
                  <span>Push (Bilateral)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Experience Level</span>
                  <span>Beginner</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Secondary Muscles</span>
                  <span>Shoulders, Triceps</span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://www.youtube.com/watch?v=SzcSrpVr0GA&pp=ygUVRHVtYmJlbGwgQmVuY2ggUHJlc3M"
                className="btn text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full uppercase shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          </div>
          {/* Video Section */}
          <div className="lg:w-1/2 flex justify-center bg-white rounded-lg shadow-lg overflow-hidden relative [clip-path:polygon(40%_0,_100%_0,_100%_100%,_0%_100%)]">
            <video
              src={dumBell}
              autoPlay
              muted
              loop
              className="w-3/4 rounded-lg"
            ></video>
          </div>
        </div>

        {/* Exercise 2 */}
        <div className="flex flex-col-reverse lg:flex-row items-center space-y-10 lg:space-y-0 overflow-hidden">
          {/* Video Section */}
          <div className="  lg:w-1/2 flex justify-center bg-white rounded-lg shadow-lg overflow-hidden relative [clip-path:polygon(0_0,_60%_0,_100%_100%,_0%_100%)]">
            <video
              src={penchBar}
              
              autoPlay
              muted
              loop
              className="w-3/4 rounded-lg"
            ></video>
          </div>
          {/* Text Section */}
          <div className="lg:w-1/2 text-white space-y-5">
            <h2 className="text-2xl font-bold">
              <i className="fa-thin fa-chevron-right mr-2 text-red-500"></i>
              Barbell Bench Press
            </h2>
            <div className=" p-6 rounded-lg shadow-lg space-y-5">
              <h3 className="font-light text-lg">Exercise Profile</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="font-bold">Target Muscle Group</span>
                  <span>Chest</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Exercise Type</span>
                  <span>Strength</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Equipment Required</span>
                  <span>Barbell</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Mechanics</span>
                  <span>Compound</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Force Type</span>
                  <span>Push (Bilateral)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Experience Level</span>
                  <span>Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Secondary Muscles</span>
                  <span>Shoulders, Triceps</span>
                </div>
              </div>
            </div>
            <div>
              <a
                href="https://youtu.be/Nhvz9EzdJ4U?si=5mlhn5ehMiqX1l4_"
                className="btn text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-full uppercase shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chest;
