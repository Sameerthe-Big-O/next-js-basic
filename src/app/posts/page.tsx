'use client';
import { Suspense } from "react";
import Single from "./[id]/page";
import Loading from "./loading";

const page =async () => {
  return (
    <>
    <div>All post</div>
    <button>

      <Suspense fallback={<Loading/>}>
   <Single/>
   </Suspense>
    </button>
    </>
  )
}

export default page