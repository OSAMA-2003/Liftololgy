/** @format */

import "./chest.css";

import dumBell from '../../../assets/dumbell-pench.mp4'

import penchBar from '../../../assets/pench-bar.mp4'

import dumbellFly from '../../../assets/dumbell-fly.mp4'

import dip from '../../../assets/dip.mp4'


function Chest() {
  return (
    <>
      
      <h1 className="mt-10 mb-32 text-white text-center pt-32">CHEST</h1>

      <div className="exercises">
     
      <div className="container">
       
        <div className="exercise row overflow-hidden">
          <div className="col-12 col-lg-5 text-white caption">
            <h2 className="fs-3 fw-bolder">
              <i className="fa-thin fa-chevron-right me-1 text-danger"></i> Incline
              Dumbbell Bench Press
            </h2>
            <div className="overview p-3 mt-5">
              <h3 className="fw-light">Exercise Profile</h3>
              <div className="profile p-5">
                <div className="row row-cols-2">
                  <div className="col fw-bold">Target Muscle Group</div>
                  <div className="col fw-light">Chest</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Exercise Type</div>
                  <div className="col fw-light">Strength</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Equipment Required</div>
                  <div className="col fw-light">Dumbbell</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Mechanics</div>
                  <div className="col fw-light">Isolation</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Force Type</div>
                  <div className="col fw-light">Push (Bilateral)</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Experience Level</div>
                  <div className="col fw-light">Beginner</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Secondary Muscles</div>
                  <div className="col fw-light">Shoulders, Triceps</div>
                </div>
              </div>
            </div>
            <div className="watch p-3">
              <a
                className="btn btn-outline-light border-0 rounded-5 px-3 py-2 text-uppercase"
                href="https://www.youtube.com/watch?v=SzcSrpVr0GA&pp=ygUVRHVtYmJlbGwgQmVuY2ggUHJlc3Mg"
              >
                
                Watch Video
              </a>
            </div>
          </div>
          <div
            className="col-12 mb-5 col-lg-7 d-flex justify-content-center justify-content-lg-end col-7 image overflow-hidden position-relative bg-white"
          >
            <video
              src={dumBell}
              autoPlay
              muted
              loop
              alt=""
              className="w-75"
            ></video>
          </div>
        </div>

       <div className="exercise row overflow-hidden">
          <div
            className="col-12 mb-5 col-lg-7 d-flex justify-content-center justify-content-lg-start align-items-center reverse overflow-hidden position-relative bg-white"
          >
            <video
              src={penchBar}
              autoPlay
              muted
              loop
              alt=""
              className="w-75"
            ></video>
          </div>
          <div className="col-12 col-lg-5 text-white caption">
            <h2 className="fs-3 fw-bolder">
              <i className="fa-thin fa-chevron-right me-1 text-danger"></i>
              Barbell Bench Press
            </h2>
            <div className="overview p-3 mt-5">
              <h3 className="fw-light">Exercise Profile</h3>
              <div className="profile p-5">
                <div className="row row-cols-2">
                  <div className="col fw-bold">Target Muscle Group</div>
                  <div className="col fw-light">Chest</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Exercise Type</div>
                  <div className="col fw-light">Strength</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Equipment Required</div>
                  <div className="col fw-light">Barbell</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Mechanics</div>
                  <div className="col fw-light">Compound</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Force Type</div>
                  <div className="col fw-light">Push (Bilateral)</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Experience Level</div>
                  <div className="col fw-light">Intermediate</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Secondary Muscles</div>
                  <div className="col fw-light">Shoulders, Triceps</div>
                </div>
              </div>
            </div>
            <div className="watch p-3">
              <a
                className="btn btn-outline-light border-0 rounded-5 px-3 py-2 text-uppercase"
                target="_blank"
                href="https://youtu.be/Nhvz9EzdJ4U?si=5mlhn5ehMiqX1l4_"
              >
                
                Watch Video
              </a>
            </div>
          </div>
        </div> 

      <div className="exercise row overflow-hidden">
          <div className="col-12 col-lg-5 text-white caption">
            <h2 className="fs-3 fw-bolder">
              <i className="fa-thin fa-chevron-right me-1 text-danger"></i> Cable
              Crossovers
            </h2>
            <div className="overview p-3 mt-5">
              <h3 className="fw-light">Exercise Profile</h3>
              <div className="profile p-5">
                <div className="row row-cols-2">
                  <div className="col fw-bold">Target Muscle Group</div>
                  <div className="col fw-light">Chest</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Exercise Type</div>
                  <div className="col fw-light">Strength</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Equipment Required</div>
                  <div className="col fw-light">Cable</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Mechanics</div>
                  <div className="col fw-light">Isolation</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Force Type</div>
                  <div className="col fw-light">Push (Bilateral)</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Experience Level</div>
                  <div className="col fw-light">Beginner</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Secondary Muscles</div>
                  <div className="col fw-light">Shoulders, Triceps</div>
                </div>
              </div>
            </div>
            <div className="watch p-3">
              <a
                className="btn btn-outline-light border-0 rounded-5 px-3 py-2 text-uppercase"
                href="https://www.youtube.com/watch?v=SzcSrpVr0GA&pp=ygUVRHVtYmJlbGwgQmVuY2ggUHJlc3Mg"
              >
               
                Watch Video
              </a>
            </div>
          </div>
          <div
            className="col-12 mb-5 col-lg-7 d-flex justify-content-center justify-content-lg-end col-7 image overflow-hidden position-relative bg-white"
          >
            <img
              src="https://www.inspireusafoundation.org/wp-content/uploads/2024/02/cable-standing-crossover.gif"
              alt=""
              className="w-75"
            />
          </div>
        </div>
       
        <div className="exercise row overflow-hidden">
          <div
            className="col-12 mb-5 col-lg-7 d-flex justify-content-center justify-content-lg-start align-items-center reverse overflow-hidden position-relative bg-white"
          >
            <video
              src={dumbellFly}
              autoPlay
              muted
              loop
              alt=""
              className="w-75"
            ></video>
          </div>
          <div className="col-12 col-lg-5 text-white caption">
            <h2 className="fs-3 fw-bolder">
              <i className="fa-thin fa-chevron-right me-1 text-danger"></i>
              Dumbbell Flys
            </h2>
            <div className="overview p-3 mt-5">
              <h3 className="fw-light">Exercise Profile</h3>
              <div className="profile p-5">
                <div className="row row-cols-2">
                  <div className="col fw-bold">Target Muscle Group</div>
                  <div className="col fw-light">Chest</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Exercise Type</div>
                  <div className="col fw-light">Strength</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Equipment Required</div>
                  <div className="col fw-light">Dumbbell</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Mechanics</div>
                  <div className="col fw-light">Isolation</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Force Type</div>
                  <div className="col fw-light">Push (Bilateral)</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Experience Level</div>
                  <div className="col fw-light">Beginner</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Secondary Muscles</div>
                  <div className="col fw-light">Shoulders, Triceps</div>
                </div>
              </div>
            </div>
            <div className="watch p-3">
              <a
                className="btn btn-outline-light border-0 rounded-5 px-3 py-2 text-uppercase"
                target="_blank"
                href="https://youtu.be/Nhvz9EzdJ4U?si=5mlhn5ehMiqX1l4_"
              >
                
                Watch Video
              </a>
            </div>
          </div>
        </div>
       

       <div className="exercise row overflow-hidden">
          <div className="col-12 col-lg-5 text-white caption">
            <h2 className="fs-3 fw-bolder">
              <i className="fa-thin fa-chevron-right me-1 text-danger"></i> Chest
              Dip
            </h2>
            <div className="overview p-3 mt-5">
              <h3 className="fw-light">Exercise Profile</h3>
              <div className="profile p-5">
                <div className="row row-cols-2">
                  <div className="col fw-bold">Target Muscle Group</div>
                  <div className="col fw-light">Chest</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Exercise Type</div>
                  <div className="col fw-light">Strength</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Equipment Required</div>
                  <div className="col fw-light">Bodyweight</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Mechanics</div>
                  <div className="col fw-light">Compound</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Force Type</div>
                  <div className="col fw-light">Push (Bilateral)</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Experience Level</div>
                  <div className="col fw-light">Intermediate</div>
                </div>
                <div className="row row-cols-2 mt-3">
                  <div className="col fw-bold">Secondary Muscles</div>
                  <div className="col fw-light">Abs, Shoulders, Triceps</div>
                </div>
              </div>
            </div>
            <div className="watch p-3">
              <a
                className="btn btn-outline-light border-0 rounded-5 px-3 py-2 text-uppercase"
                href="https://www.youtube.com/watch?v=SzcSrpVr0GA&pp=ygUVRHVtYmJlbGwgQmVuY2ggUHJlc3Mg"
              >
                
                Watch Video
              </a>
            </div>
          </div>
          <div
            className="col-12 mb-5 col-lg-7 d-flex justify-content-center justify-content-lg-end col-7 image overflow-hidden position-relative bg-white"
          >
            <video
              src={dip}
              autoPlay
              muted
              loop
              alt=""
              className="w-75"
            ></video>
          </div>
        </div>
      </div>
    </div>
     
    </>
  );
}

export default Chest;
