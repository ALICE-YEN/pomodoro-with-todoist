import { GiTomato } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import Task from './component/task';

function App() {
  return (
    <>
      <div className="flex justify-center bg-[#D95550] py-10">
        <div className="flex justify-between items-center min-w-[40%] p-3.5 border-b">
          <div className="flex items-center text-white text-2xl font-bold">
            <GiTomato className="mr-2" />
            番茄鐘
          </div>
          <div className="flex items-center text-white py-1.5 px-2 bg-[#FFFFFF33] rounded-md">
            <IoMdSettings className="mr-1" />
            設定
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#D95550] py-10">
        <Task />
      </div>
    </>
  );
}

export default App;
