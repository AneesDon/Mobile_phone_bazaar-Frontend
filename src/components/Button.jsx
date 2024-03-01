import React from 'react'

function Button(
    {btnText,
    onSubmit,
    className='',
    ...props}

) {
  return (
    <div className='w-full py-4'>
        <button
        onSubmit={onSubmit}
        className='w-full bg-black text-white rounded-md
        py-2 hover:bg-gray-500 transition-colors duration-300'
        {...props}
        >
            {btnText}

        </button>
    </div>
  )
}

export default Button