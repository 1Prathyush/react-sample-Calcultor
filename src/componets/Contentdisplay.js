import React from 'react'
import PropTypes from 'prop-types';
const Contentdisplay = ({data}) => {
    Contentdisplay.propTypes={
       data:PropTypes.string
    }
    return (
        <div>
          {data}
        </div>
    )
}

export default Contentdisplay
