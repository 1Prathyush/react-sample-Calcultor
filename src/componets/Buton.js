import PropTypes from 'prop-types';
import React from 'react'


const Buton = ({value ,onClick }) => {

    Buton.propTypes={
        onClick : PropTypes.func,
    }
  
    return (

        <div>
            
           <button
                onClick={onClick}
           
           style={{background:'none',border:'none',zIndex:"-1"}}
            value={value}>{value}</button>
        </div>
    )


}

export default Buton
