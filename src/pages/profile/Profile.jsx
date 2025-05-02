import  { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);

    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  text-white">
      <div className=" CARD p-8 rounded-2xl shadow-lg w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold mb-6 gradient_text">Profile</h1>

        {user ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Name:</h2>
              <p className="text-lg">{user.displayName || "No Name Available"}</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2">Email:</h2>
              <p className="text-lg">{user.email}</p>
            </div>

            <button
              onClick={handleLogout}
              className="mt-6 btn"
            >
              Logout
            </button>
          </div>
        ) : (
          <p className="text-lg">Loading user info...</p>
        )}
      </div>
    </div>
  );
}

export default Profile;
