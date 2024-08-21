import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react"
import data from '../src/Data.json'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

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
  
  const handleClick = (e) =>{
    e.preventDefault()
    toast.error('Buying method is not available', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    
      });
  }
  return (
    <>
    <ToastContainer/>
     <div className="w-full  flex items-center justify-center mt-5 mb-5">
    <div className="w-[80%] bg-white rounded-md shadow-md p-4">
    <div className="mb-3">
      <input type="text" placeholder="Search your Products" onChange={(e) => setSearchTerm(e.target.value)} className="border border-slate-400 rounded-md outline-none px-3 py-2 w-full text-center" />
    </div>
    <div className="grid grid-cols-4 gap-4 mt-5">
    {
    

  
      fliterData?.slice(0,next).map((val) =>{
        return(
          <div className="border border-green-500 relative rounded-md p-4" key={val.id}>
            <img src={val.img} alt="" className="w-full h-[150px] rounded-md" />
            <h1 className="text-center mt-3 font-robotoBold">{val.name}</h1>
            <p className="text-center font-robotoRegular text-sm text-gray-400 mt-2">{val.description}</p>
           <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            {val.updateprice &&(
              <>
              <div className="absolute top-0 left-0">
                <span className="font-robotoRegular text-sm text-white  bg-green-500 w-[60px] h-[30px]  flex items-center justify-center">{val.changval}</span>
              </div>
              
              </>
             
            )}
          <p className={val.updateprice ? "text-[#d72828d1]" : "text-[#d72828] text-[16px] font-robotoBold"}> {val.updateprice ? <del>{val.price}</del> : <span>৳ {val.price}</span>}</p>
          <p className="text-[#d72828] text-[16px] font-robotoBold">  {val.updateprice}</p>
          </div>
           <button onClick={handleClick} className="text-white text-sm font-robotoBold bg-green-500 rounded-md px-4 py-2 flex items-center justify-center gap-x-2">
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
