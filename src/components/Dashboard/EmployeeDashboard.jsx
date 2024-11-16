import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/taskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  
  return (
    <div>
      <div className='p-10 bg-[#1c1c1c] h-screen'>
        
        <Header data={data}/>
        <TaskListNumbers data={data}/>
        <TaskList data={data}/>
      </div>
    </div>
  )
}

export default EmployeeDashboard