import { useNavigation } from '../contexts/navigationContext';
import Sidebar from "../components/sidebar";
import { IoMenu } from 'react-icons/io5';

const Alerts = () => {
  const { showNav, toggleNav } = useNavigation();

  return (
    <div className="flex h-screen">
      {showNav && <Sidebar />}
      <div className="flex flex-col flex-grow">
        <div className="flex items-center justify-between px-4 py-3 bg-white shadow-md">
          <button onClick={toggleNav} aria-label="Toggle navigation">
            <IoMenu size={25} />
          </button>
          <h1 className="text-xl font-bold">Alerts</h1>
          <div></div> {/* Placeholder for additional buttons or actions */}
        </div>

      </div>
    </div>
  );
};

export default Alerts;
