import React from 'react'



const Partner = ({ partner }) => {

    
    if (partner) {
     const {name,image,description} = partner
        return (
            <>
                <img src={image} alt={name} style={{ width: '150px' }} />
                <div className='m-4'>
                    <h5 className='fw-bold'>{name}</h5>
                    {description}
                </div>
            </>
        )
        return null;
    }
    return (
        <div>

        </div>
    )
}

export default Partner