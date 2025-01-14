/* eslint-disable react/no-unescaped-entities */
import  { useEffect } from "react";
import { FaDumbbell, FaChartLine, FaRobot, FaCheckCircle, FaEye } from "react-icons/fa";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pt-24 px-6 lg:px-16">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className=" font-bold gradient_text mb-4">About Liftology</h1>
        <p className="text-lg font-bold text-gray-300 max-w-2xl mx-auto">
          The AI-powered fitness solution designed to personalize your fitness journey
          with advanced technology, predictive insights, and real-time guidance.
        </p>
      </div>

      {/* Content Section */}
      <div className="grid gap-12">
        {/* Introduction Card */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Introduction</h2>
          <p className="text-gray-300 leading-relaxed">
            Liftology revolutionizes personal fitness by combining Artificial
            Intelligence with proven training techniques. Get tailored workout and
            nutrition plans designed to help you safely and effectively achieve your
            goals.
          </p>
        </div>

        {/* Problem Statement */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">The Problem</h2>
          <p className="text-gray-300 leading-relaxed">
            Many fitness enthusiasts lack personalized guidance, leading to slow
            progress and injuries. Traditional fitness apps offer generic plans that
            don't adapt to users' progress.
          </p>
        </div>

        {/* Key Features */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-6">Key Features</h2>
          <div className="grid md:grid-cols-2 gap-4 text-gray-300">
            {/* Feature 1 */}
            <div className="flex items-start space-x-4">
              <FaDumbbell className="text-blue-400 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-200">Personalized Plans</h3>
                <p>AI-driven algorithms create customized workout and nutrition programs.</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start space-x-4">
              <FaChartLine className="text-green-400 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-200">Predictive Analytics</h3>
                <p>Forecast future lifting capacities based on historical performance data.</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start space-x-4">
              <FaRobot className="text-yellow-400 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-200">Real-Time Technique Correction</h3>
                <p>Analyze your form with computer vision and reduce injury risk.</p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-red-400 text-3xl" />
              <div>
                <h3 className="font-bold text-gray-200">Progressive Training</h3>
                <p>Incorporate proven techniques like progressive overload and periodization.</p>
              </div>
            </div>
          </div>
        </div>

        {/* New Vision Card */}
        <div className="bg-red-700 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-200 mb-4">Our Vision</h2>
          <div className="flex items-start space-x-4 text-gray-300">
            <FaEye className="text-purple-600 text-3xl" />
            <div>
              <h3 className="font-bold text-gray-200">Transforming Fitness</h3>
              <p>
                Our vision is to revolutionize the fitness industry by integrating AI into
                every aspect of training, enabling users to reach their full potential in a safe
                and data-driven environment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="text-center my-12">
        <h2 className="text-2xl font-semibold text-gray-200 mb-2">Thank You for Choosing Liftology!</h2>
        <p className="text-gray-300">
          Start your fitness journey with confidence and precision. Together, we can
          achieve your goals.
        </p>
      </div>
    </div>
  );
};

export default About;
