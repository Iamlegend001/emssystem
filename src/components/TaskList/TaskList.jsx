import React from "react";
import AcceptTask from "./AcceptTask";
import NewTask from "./NewTask";
import FailedTask from "./FailedTask";
import CompleteTask from "./CompleteTask";

const TaskList = ({ data }) => {
  

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto w-full py-5 gap-5 flex flex-nowrap items-center justify-start mt-10"
    >
      {data.tasks.map((elem,idx) =>{ 
       
       if(elem.active){
         return <AcceptTask key={idx}/>
       }
       if(elem.newTask){
        return <NewTask key={idx}/>
       }
       if(elem.completed){
        return <CompleteTask key={idx}/>
       }
       if(elem.failed){
        return <FailedTask key={idx}/>
       }
      })}
    </div>
  );
};

export default TaskList;

