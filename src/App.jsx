import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react"
import data from '../src/Data.json'

function App() {
  const [searchterm, setSearchTerm] = useState("")
  
  const row = 8
  const [next, setNext] = useState(row)
  const handleShowMore = () =>{
    setNext((prev) => prev + 4)
  }

  let fliterData =   data.filter((val) =>{
    if(searchterm === ""){
     
   return val;
    
    }else if(val.name.toLocaleLowerCase().indexOf(searchterm.toLocaleLowerCase()) > -1){
     
    return val;
    }
  })
  
  
  return (
    <>
     <div className="w-full  flex items-center justify-center mt-5 mb-5">
    <div className="w-[80%] bg-white rounded-md shadow-md p-4">
    <div className="mb-3">
      <input type="text" placeholder="Search your needs" onChange={(e) => setSearchTerm(e.target.value)} className="border border-slate-400 rounded-md outline-none px-3 py-2 w-full text-center" />
    </div>
    <div className="grid grid-cols-4 gap-4 mt-5">
    {
    

  
      fliterData?.slice(0,next).map((val) =>{
        return(
          <div className="border border-green-500 rounded-md p-4" key={val.id}>
            <img src={val.img} alt="" className="w-full h-[150px] rounded-md" />
            <h1 className="text-center mt-3 font-robotoBold">{val.name}</h1>
            <p className="text-center font-robotoRegular text-sm text-gray-400 mt-2">{val.description}</p>
           <div className="mt-4 flex items-center justify-between">
           <p className="text-[#d72828] tex-[16px] font-robotoBold"> <span className="text-[16px] font-robotoBold">৳</span> {val.price}</p>
           <button className="text-white text-sm font-robotoBold bg-green-500 rounded-md px-4 py-2 flex items-center justify-center gap-x-2">
           <FaCartArrowDown />
            Buy Now</button>
           </div>
          </div>
        )
      })
      
    }
    </div>

  {
    fliterData.length > next &&  (
      <div className="mt-3 mb-3 text-center">
      <button onClick={handleShowMore} className="bg-slate-900 text-white font-robotoBold tex-sm rounded-md px-4 py-2">Show More</button>
    </div>

    )
  }
    </div>
     </div>
    </>
  )
}

export default App
