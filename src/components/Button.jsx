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
        className=''
        {...props}
        >
            {btnText}

        </button>
    </div>
  )
}

export default Button