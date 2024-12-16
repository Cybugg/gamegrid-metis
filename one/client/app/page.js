"use client"

import { useEffect, useState } from "react";
import { load } from "./func";

export default function Home() {
    const [refresh, setRefresh] = useState(true);
    
  useEffect(
    ()=>{
      if(!refresh)return;
      setRefresh(false);
      load().then((e) => {
        
        console.log("Account: ",e.addressAccount);
        console.log("Contract: ",e.contract)
      });
    },[]
  )

  return (
    <div className="min-h-screen pb-8 gap-16 backdrop-blur-lg" style={{
      background:"linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),URL(/back.jpg)",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"cover",
    	backdropFilter: "blur(24px)"
    }}>

     <main className="w-full h-full backdrop-blur-sm min-h-screen">
        {/* Header  */}
          <div className="w-full flex items-center justify-center p-5 text-2xl md:text-4xl font-bold text-orange-200 pt-12">
          Contract  Interactive UI
          </div>


      </main>
    </div>
  );
}
