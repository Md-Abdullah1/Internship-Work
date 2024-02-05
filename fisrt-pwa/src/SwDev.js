import React from 'react'

const SwDev = () => {
    let swURL = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swURL).then((res)=>{
        console.warn('response ',res)
    })
  return (
    <div>SwDev</div>
  )
}

export default SwDev