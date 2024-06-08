import React from 'react';

const page = () => {

    const position ='';
    if(navigator.geolocation.getCurrentPosition){
        navigator.geolocation.getCurrentPosition((position)=>{
            console.log(position)
        })
    }
  return (
    <div>hello it seem youre from</div>
  )
}

export default page