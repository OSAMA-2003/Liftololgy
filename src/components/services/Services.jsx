/** @format */

import "./services.css";

const Services = () => {
  return (
    <>
      <section className=" container section flex flex-col justify-center items-center  h-fit mt-10  ">
        <h1 className="gradient_text  ">Our Services</h1>
        <p className=" text-gray-500 my-10 text-center">
          At This Part You Can Easily access all of our servises. take a look at
          them and chose wich ever you want.
        </p>

        <div className="cards-container grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-4 gap-5 p-10">
          <div className="card-container ">
            <div className="wrapper">
              <div className="banner-image img1"> </div>
              <h1 className="gradient_text"> Losing Weight</h1>
              <p>
                Achieve Sustainable Weight Loss With Our Customized Programs,
                Designed To Help You Burn Fat And Build A Healthier, Leaner
                Body. Start Your Journey To A Fitter You Today
              </p>
            </div>
            <div className="button-wrapper">
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>

          <div className="card-container ">
            <div className="wrapper">
              <div className="banner-image img2"> </div>
              <h1 className="gradient_text"> Building Muscles</h1>
              <p>
                Develop Strength And Define Your Muscles With Tailored Programs
                Designed To Help You Gain Lean Mass Efficiently. Click On The
                Button Below And Start Your Journey Right Now. Dont Miss This
                Cahnce.
              </p>
            </div>
            <div className="button-wrapper">
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>

          <div className="card-container ">
            <div className="wrapper">
              <div className="banner-image img3"> </div>
              <h1 className="gradient_text"> Training at Home</h1>
              <p>
                Stay Fit And Strong With Our Effective Home Workout Plans,
                Requiring Minimal Equipment. You Can Have Access To A Lot Of
                Plans By Just Clicking On Learn More!
              </p>
            </div>
            <div className="button-wrapper">
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>

          <div className="card-container ">
            <div className="wrapper">
              <div className="banner-image img4"> </div>
              <h1 className="gradient_text"> GYM Plan</h1>
              <p>
                Maximize Your Gym Sessions With Structured Plans That Guide You
                Towards Your Fitness Goals.
              </p>
            </div>
            <div className="button-wrapper">
              <button className="btn ">LEARN MORE</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
