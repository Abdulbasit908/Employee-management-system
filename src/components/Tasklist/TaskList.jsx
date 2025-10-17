import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({userData}) => {
  console.log(userData);
  
  return (
    <div id='scrollbar-hide' className="overflow-x-auto whitespace-nowrap p-6 bg-[#272727]  mt-12">
      {
        userData?.tasks?.map((e) => {
          const key = `${e.title}-${e.date}`;
          if (e.active) {
            return <AcceptTask key={key} task={e} userData={userData} />;
          }
          if (e.completed) {
            return <CompleteTask key={key} task={e} userData={userData} />;
          }
          if (e.failed) {
            return <FailedTask key={key} task={e} userData={userData} />;
          }
          if (e.newTask) {
            return <NewTask key={key} task={e} userData={userData} />;
          }
          return null;
        })
      }
    </div>


  )
}

export default TaskList