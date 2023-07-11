import { useContext } from "react"
import { AppContext } from "../context/AppContext"



function Pagination(){
const {page , handlePageChange ,totalPages} = useContext(AppContext)

    return (
        <div className="w-full border  mt-2 ">
            <div className=" flex justify-around">
                <div>
                { page>1 &&
                    <button onClick={()=>handlePageChange(page-1)} className="p-2 border m-2 bg-slate-300 rounded-sm hover:bg-slate-700 hover:text-white ease-in duration-300">
                        Previous
                    </button>
                }
                { page < totalPages &&
                    <button onClick={()=>handlePageChange(page+1)} className="p-2 border m-2 bg-slate-300 rounded-sm hover:bg-slate-700 hover:text-white ease-in duration-300">
                        Next
                    </button>
                }
                
                </div>
                <div>
                <p className="p-2 border m-2 bg-slate-300 rounded-sm">
                    Page {page} of {totalPages}
                </p>
                </div>
               
               
            </div>
        </div>
    )
}

export default Pagination