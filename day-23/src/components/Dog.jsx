import React from 'react'

const Dog = ({msg}) => {
    return (
        <div>
            <h2>Random Dog picture</h2>
            <img src={msg} alt="" />
        </div>
    )
}

export default Dog
