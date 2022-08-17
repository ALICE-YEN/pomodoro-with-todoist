import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { GiTomato } from 'react-icons/gi';
import { IoMdSettings } from 'react-icons/io';
import { IoMdAddCircle } from 'react-icons/io';
import TaskFilter from './components/taskFilter';
import Task from './components/task';
import { addTodo } from './actions';

// const tasks = [
//   { id: 1, description: '待辦事項1', done: true },
//   { id: 2, description: '待辦事項2', done: false },
//   { id: 3, description: '待辦事項3', done: true },
//   { id: 4, description: '待辦事項4', done: false },
// ];

function App() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const tasks = useSelector((state) => state.addReducer);

  const dispatch = useDispatch();

  console.log('getValues', getValues('todo'));
  console.log('watch', watch('todo'));
  return (
    <>
      {/* 標題 */}
      <div className="flex justify-center bg-[#D95550] py-10">
        <div className="flex justify-between items-center min-w-[40%] p-3.5 border-b text-white">
          <div className="flex items-center text-2xl font-bold">
            <GiTomato className="mr-2" />
            番茄鐘
          </div>
          <div className="flex items-center py-1.5 px-2 bg-[#FFFFFF40] hover:bg-[#FFFFFF33] rounded-md cursor-pointer">
            <IoMdSettings className="mr-1" />
            設定
          </div>
        </div>
      </div>

      {/* 待辦事項篩選器 */}
      <div className="flex justify-center bg-[#D95550] py-5">
        <TaskFilter />
      </div>

      {/* 待辦事項 */}
      {tasks.map((task, id) => (
        <div className="flex justify-center bg-[#D95550] py-2" key={id}>
          <Task id={task.id} description={task.description} done={task.done} />
        </div>
      ))}

      {/* 待辦事項增加器 */}
      <div className="flex justify-center bg-[#D95550] py-10">
        <div
          onClick={() => {
            dispatch(addTodo(getValues('todo')));
          }}
          className="flex items-center justify-center w-[480px] bg-[#0000001A] text-white font-bold border-dashed rounded-md border-2 border-white opacity-60 hover:opacity-90 py-3.5 cursor-pointer"
        >
          <IoMdAddCircle className="mr-2" />
          Add Task
        </div>
      </div>
      {/* 先擱置react-collapse */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center bg-[#D95550] py-10"
      >
        <input
          {...register('todo', { required: true })}
          placeholder="要新增什麼待辦事項？"
          className="flex items-center justify-center w-[480px] bg-gray-100 text-gray-700 font-bold rounded-md py-3.5 px-4"
        />
        {/* {errors.todo && <span>This field is required</span>} */}

        <input type="submit" value="送出" />
      </form>
    </>
  );
}

export default App;
