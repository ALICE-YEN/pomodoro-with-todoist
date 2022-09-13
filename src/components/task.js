import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { BsFillTrashFill } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import { MdDone } from 'react-icons/md';
import { deleteTodo, toggleTodo, modifyTodo } from '../actions';

function Task(props) {
  const { id, description, done } = props;
  const [modifyBox, setModifyBox] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      modifyTodo: description,
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    setModifyBox(false);
    dispatch(modifyTodo({ id: id, content: data.modifyTodo }));
  };

  const handleDelete = (id) => dispatch(deleteTodo(id));
  return (
    <>
      <div className="flex items-center">
        {modifyBox === false && (
          <div className="flex justify-between py-5 w-[480px] bg-gray-100 px-3.5 rounded-md hover:shadow-lg">
            <div className="flex items-center">
              <div
                className={`flex justify-center items-center w-6 h-6 mr-5 ${
                  done
                    ? 'bg-[#D95550E0] hover:bg-[#D9555099]'
                    : 'bg-gray-300 hover:bg-gray-200'
                } rounded-full`}
              >
                <MdDone
                  size={21}
                  className="text-white"
                  onClick={() => dispatch(toggleTodo(id))}
                />
              </div>

              <div
                className={`font-bold ${
                  done ? 'line-through text-gray-400' : 'text-gray-700'
                }`}
              >
                {description}
              </div>
            </div>
            <div className="flex items-center text-gray-500">
              <FiEdit
                size={18}
                className="mr-4 hover:text-gray-400 cursor-pointer"
                onClick={() => setModifyBox(true)}
              />
              <BsFillTrashFill
                size={18}
                className="hover:text-gray-400 cursor-pointer"
                onClick={() => dispatch(deleteTodo(id))}
              />
            </div>
          </div>
        )}
        {modifyBox === true && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex justify-between py-5 w-[480px] bg-gray-100 px-3.5 rounded-md hover:shadow-lg">
              <div className="flex items-center">
                <div
                  className={`flex justify-center items-center w-6 h-6 mr-5 ${
                    done
                      ? 'bg-[#D95550E0] hover:bg-[#D9555099]'
                      : 'bg-gray-300 hover:bg-gray-200'
                  } rounded-full`}
                >
                  <MdDone
                    size={21}
                    className="text-white"
                    onClick={() => dispatch(toggleTodo(id))}
                  />
                </div>

                <input
                  {...register('modifyTodo', { required: true })}
                  className="bg-gray-100 text-gray-700"
                />
                {errors.modifyTodo?.type === 'required' && handleDelete(id)}
                {/* 為什麼有兩次 DELETE */}
              </div>
              <input
                type="submit"
                value="儲存"
                className="font-bold text-gray-500 hover:text-gray-400 cursor-pointer"
              />
            </div>
          </form>
        )}
      </div>
    </>
  );
}

export default Task;
