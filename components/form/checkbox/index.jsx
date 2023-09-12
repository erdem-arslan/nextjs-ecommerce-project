import React from 'react'

function Index({ id, name, label })
{
    return (

        <div className='my-2 '>
            <input id={id} name={name} type="checkbox" className='mr-2 w-4 h-4 cursor-pointer' />
            <label htmlFor={id} className='text-lg font-light cursor-pointer'>{label}</label>
        </div>

    )
}

export default Index