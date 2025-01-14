/** @format */

import { useContext, useEffect } from "react";
import { AuthContext } from "../../container/contexts/Auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // استخدام التنقل

  const handleLogout = () => {
    logout(); // تسجيل الخروج
    navigate("/"); // إعادة التوجيه إلى الصفحة الرئيسية
  };

  return (
    <>
      <div className="min-h-[100vh] pt-24">
        <h1 className="gradient_text ">Profile</h1>
        <div className="px-5">
          <div className="!text-gray-200 text-5xl">
            {/* User profile information */}
            <h2 className="font-bold">User Information</h2>
            {user ? (
              <div className=" text-4xl my-5 flex flex-col gap-5">
                <h2>Name: {user.name}</h2>
                <h2>Tall: {user.tall} cm</h2>
                <h3>Weight: {user.weight} kg</h3>
              </div>
            ) : (
              <p>No user data available.</p>
            )}
          </div>

          <button onClick={handleLogout} className="btn mt-5">
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default Profile;
