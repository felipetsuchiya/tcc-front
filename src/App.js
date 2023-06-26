import { useState } from 'react';
import Sidebar from './components/sidebar';
import Router from './routes';
import { AiOutlineMenu } from 'react-icons/ai'

function App() {


  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <div className='p-5 w-full bg-gray-800 fixed text-white text-2xl'>
        <button onClick={toggleSidebar} className=''><AiOutlineMenu /></button>
      </div>
      {isSidebarOpen === true ? '' :
        <div className='p-5 w-full bg-gray-800 fixed text-white text-2xl'>
          <button onClick={toggleSidebar} className=''><AiOutlineMenu /></button>
        </div>
      }
      <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
      <Router />
    </>
  );
}

export default App;
