import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';

function Task() {
  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-between py-5 w-[480px] border-b-2 border-[##ffffff33] text-white px-1.5">
          <div className="flex items-center">
            <div className="w-5 h-5 bg-white mr-5"></div>
            <div className="text-xl font-bold">Tasks</div>
          </div>
          <div className="flex items-center">
            <FiEdit size={20} className="mr-4" />
            <BsFillTrashFill size={20} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
