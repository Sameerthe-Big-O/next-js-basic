

const page = async() => {

    await new  Promise((resolve, reject) => {
       setTimeout(() =>{ 
        resolve('resolve')
    },2000)
    });
  return (
    <div>page</div>
  )
}

export default page