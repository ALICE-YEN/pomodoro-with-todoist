import { GiTomato } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { IoMdAddCircle } from 'react-icons/io';

import TaskFilter from './component/taskFilter';
import Task from './component/task';

const tasks = [
  { id: 1, description: '待辦事項1', status: 'done' },
  { id: 2, description: '待辦事項2', status: 'ongoing' },
  { id: 3, description: '待辦事項3', status: 'done' },
  { id: 4, description: '待辦事項4', status: 'ongoing' },
];

function App() {
  return (
    <>
      <div className="flex justify-center bg-[#D95550] py-10">
        <div className="flex justify-between items-center min-w-[40%] p-3.5 border-b text-white">
          <div className="flex items-center text-2xl font-bold">
            <GiTomato className="mr-2" />
            番茄鐘
          </div>
          <div className="flex items-center py-1.5 px-2 bg-[#FFFFFF40] hover:bg-[#FFFFFF33] rounded-md">
            <IoMdSettings className="mr-1" />
            設定
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-[#D95550] py-5">
        <TaskFilter />
      </div>
      {tasks.map((task, id) => (
        <div className="flex justify-center bg-[#D95550] py-2" key={id}>
          <Task
            id={task.id}
            description={task.description}
            status={task.status}
          />
        </div>
      ))}

      <div className="flex justify-center bg-[#D95550] py-10">
        <div className="flex items-center justify-center w-[480px] bg-[#0000001A] text-white font-bold border-dashed rounded-md border-2 border-white opacity-60 hover:opacity-90 py-3.5">
          <IoMdAddCircle className="mr-2" />
          Add Task
        </div>
      </div>
    </>
  );
}

export default App;
