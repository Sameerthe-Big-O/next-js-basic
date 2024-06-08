import React from 'react'

const loading =async () => {

    await new  Promise((resolve, reject) => {
         setTimeout(() =>{
        resolve('resolve')
         },2000)
     });
  return (
    <div>loading...</div>
  )
}

export default loading