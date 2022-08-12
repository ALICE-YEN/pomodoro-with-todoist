import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import {
  MdOutlineDoneOutline,
  MdDone,
  MdFileDownloadDone,
} from 'react-icons/md';

function Task(props) {
  const { id, description, status } = props;
  return (
    <>
      <div className="flex items-center">
        <div className="flex justify-between py-5 w-[480px] bg-gray-100 px-3.5 rounded-md hover:shadow-lg">
          <div className="flex items-center">
            <div
              className={`flex justify-center items-center w-6 h-6 mr-5 ${
                status === 'done'
                  ? 'bg-[#D95550E0] hover:bg-[#D9555099]'
                  : 'bg-gray-300 hover:bg-gray-200'
              } rounded-full`}
            >
              <MdDone size={21} className="text-white" />
            </div>
            <div
              className={`font-bold ${
                status === 'done'
                  ? 'line-through text-gray-400'
                  : 'text-gray-700'
              }`}
            >
              {description}
            </div>
          </div>
          <div
            className={`flex items-center ${
              status === 'done' ? 'hidden' : 'text-gray-500'
            }`}
          >
            <FiEdit size={18} className="mr-4 hover:text-gray-400" />
            <BsFillTrashFill size={18} className="hover:text-gray-400" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Task;
