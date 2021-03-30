import React from 'react'
import spinner from '../img/spinner.gif'
function LoadingScr() {
    return (
        <img
      src={spinner}
      style={{ width: '90px', margin: 'auto', display: 'block' }}
      alt='Loading'
    />
    )
}

export default LoadingScr

