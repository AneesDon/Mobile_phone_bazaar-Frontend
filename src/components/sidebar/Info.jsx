import React from 'react'
import Input from '../Input'
import Button from '../Button'

function Info() {

    const [edit, setEdit] = React.useState(false)


  return (
        <div className=' *:pb-2  '>
    
        <h1 className=' text-2xl py-3 font-semibold'>Personal Information</h1>
        <Button
        btnText={'Edit Profile'}
        className={' bg-black text-white rounded-lg px-5 py-2  hover:bg-slate-700 duration-200'}
        onClick={() => setEdit(!edit)}
        />

        <form className=' *:pb-3'>
        <Input
        label='Username' 
        />
        <div className=' flex gap-3'>
            <Input
            label='Email'

            />
            <Input
            label='Phone Number'
            />
        </div>
        <Input
        label='Address'
        />

        {edit && <Button
        btnText={'Edit Profile Info'}
        
        />}
        </form>
        
        </div>


  )
}

export default Info