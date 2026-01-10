import { useLocation, useNavigate } from "react-router-dom";
import { bottomTabs } from "../../config/bottomTabs";

const BottomNavbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-t py-2 px-4 flex justify-between items-center">
      {bottomTabs.map((tab, idx) => {
        const Icon = tab.icon;
        const isActive = pathname === tab.route;

        return (
          <div
            key={idx}
            onClick={() => navigate(tab.route)}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              tab.center
                ? "bg-[#2F4CD1] text-white w-14 h-14 rounded-full -mt-6 shadow-lg flex items-center justify-center"
                : "text-gray-400"
            }`}>
            <Icon
              className={`w-6 h-6 ${
                isActive && !tab.center ? "text-[#2F4CD1]" : ""
              }`}
            />
            {!tab.center && <span className="text-xs mt-1">{tab.name}</span>}
          </div>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
