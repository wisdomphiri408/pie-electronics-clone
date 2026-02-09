import { UserCircle, History, ShoppingBag, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

import { useAuth } from "../../context/AuthContext";

const UserProfile = () => {
  const { logout } = useAuth();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const dropDownValue = [
    { title: "My Orders", icon: <History className="w-4 h-4" /> },
    { title: "Create Shop", icon: <ShoppingBag className="w-4 h-4" /> },
    { title: "Account Settings", icon: <User2 className="w-4 h-4" /> },
  ];

  const handleLogout = () => {
    logout();
    setIsDropDownOpen(false);
    navigate("/");
  };

  // Close on outside click
  useEffect(() => {
    if (!isDropDownOpen) return;

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropDownOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <UserCircle
        onClick={() => setIsDropDownOpen((prev) => !prev)}
        className="text-white cursor-pointer hover:scale-110 active:scale-100"
      />

      {isDropDownOpen && (
        <div className="absolute bg-blue-900 p-2 w-[180px] -right-10 top-8 shadow-2xl">
          <div>
            {dropDownValue.map((value) => (
              <Link
                to={"/"}
                key={value.title}
                className="flex items-center gap-2 text-white mb-4 hover:text-opacity-55"
                onClick={() => setIsDropDownOpen(false)} // close on link click
              >
                <span>{value.icon}</span>
                <p>{value.title}</p>
              </Link>
            ))}
          </div>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-3 py-1 rounded-lg hover:bg-red-700 transition text-sm w-full"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
