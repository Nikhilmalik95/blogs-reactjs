import Blogs from "../components/Blogs"
import Header from "../components/Header"
import { useLocation, useNavigate } from "react-router-dom"
import Pagination from "../components/Pagination"


function CategoryPage() {
    const navigation = useNavigate()
    const location = useLocation()
    const category = location.pathname.split("/").at(-1)
    return (
        <div className=" flex flex-col w-full items-center justify-center">
            <Header />
            <div className=" flex flex-col w-11/12 md:w-2/3 lg:w-2/3" >
                <button onClick={() => navigation(-1)} className="p-2 border m-2  bg-slate-400 rounded-sm hover:bg-slate-700 hover:text-white ease-in duration-300 w-[100px]">
                    Back
                </button>
                
            </div>
            <h2 className="font-bold underline text-2xl -mb-5">
                Blogs on <span>{category}</span>
            </h2>
            
            <div className="w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mt-3  items-center justify-center">
                <Blogs />
                <Pagination />
            </div>
            
        </div>

    )
}

export default CategoryPage