'use client'
import React from 'react';
import SyntaxHighLigher from 'react-syntax-highlighter';
import Link from 'next/link';


//*not all the dependencies will send there so it won't take as much memeory as on the client browser remember that means that our bundle size will be much less

//*we can keep the large dependencies on the server as well
export default function Home() {


  const submit=async(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    await addFunctions(formData);
   

  await  fetch('post', {
      headers:{
        'Content-Type':'application/json'
      }
    })
  }
  const addFunctions =async (formData:FormData): Promise<void> =>{
    "use Server";
    //instead of the making a separate api end ppint where we wrote our logic we can simply markm this function so like we can interact with the database and without having to create the api  endpoint

    //*await prisma.post.create({
      // data:{
      //   title:formData.get('title'),
      //   body:formData.get('body'),
      //   published:formData.get('published')==='true',
      //   author:{
      //     connect:{
      //       id:formData.get('author')
      //     }
      //   }
      // }
  //})
  }

  //*it's like one component is acting as the server component as well clietn component but happening at the server side and if we want to re render our that page to get the fresh data we can even do more clearner thing which's doing the relvalidate cache
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  <SyntaxHighLigher className="text-lefts">
{
  `function (){
  return 'hello';
  }`
}

  </SyntaxHighLigher>
      


<form 
onSubmit={submit}
action={addFunctions}>
  <input type="text" />
</form>
<Link href={'/posts'}
 className='border-orange-500 border p-5 hover:scale-150 hover:shadow-md cursor-pointer
  transition-all delay-0 ease-out duration-500 
 '
>
see all the post here baby
</Link>
    </main>
  );
}
