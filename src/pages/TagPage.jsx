import { useLocation, useNavigate } from "react-router-dom"
import Header from "../components/Header"
import Blogs from "../components/Blogs"
import Pagination from "../components/Pagination"


function TagPage(){


    const navigation = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
    return(
        <div className=" flex flex-col w-full items-center justify-center">
            <Header />
            <div className=" flex flex-col w-11/12 md:w-2/3 lg:w-2/3">
                <button className="p-2 border m-2  bg-slate-400 rounded-sm hover:bg-slate-700 hover:text-white ease-in duration-300 w-[100px]"
                onClick={()=> navigation(-1)}>
                    back
                </button>
                
            </div>
            <h2 className="font-bold underline text-2xl -mb-5">
                    Blogs Tagged <span>#{tag}</span>
                </h2>
            <div className="w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mt-3  items-center justify-center">
            <Blogs />
            <Pagination />
            </div>
        </div>
    )
}

export default TagPage