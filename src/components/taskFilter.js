import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { VscListSelection } from 'react-icons/vsc';

function TaskFilter() {
  return (
    <>
      <div className="flex justify-between items-center py-5 w-[480px] border-b-2 border-[##ffffff33] text-white px-1.5">
        <div className="text-xl font-extrabold text-xl">Tasks</div>
        <div className="py-1.5 px-2 bg-[#FFFFFF40] hover:bg-[#FFFFFF33] rounded-md">
          <VscListSelection size={20} />
        </div>
      </div>
    </>
  );
}

export default TaskFilter;
