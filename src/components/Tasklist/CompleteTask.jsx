import React from 'react'

const CompleteTask = ({task}) => {
  const title = task.title;
  const date = task.date;
  const description = task.description;
  const category = task.category;
  return (
    <div className="inline-flex flex-col w-75 h-70 bg-white shadow-md rounded-xl m-3 p-7">
      <div className="flex justify-between">
        <h3 className="bg-orange-400 h-fit px-2 rounded-sm">{category}</h3>
        <h4>{date}</h4>
      </div>

      <div className="mt-4 flex flex-col w-full break-words whitespace-normal">
        <h1 className="text-gray-700 font-bold text-2xl">
          {title}
        </h1>
        <p className="text-gray-500 mt-3">
         {description}
        </p>
        <div
        className='mt-2'>
          <button className='w-full bg-green-400'>Complete</button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask