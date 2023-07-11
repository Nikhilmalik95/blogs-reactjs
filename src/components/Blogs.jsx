import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Spinner from './Spinner'
import BlogsDetails from "./BlogsDetails"


function Blogs(){
    const {loading , posts}  = useContext(AppContext)

    return (
        <div className="w-11/12 max-w-[650px] py-3 flex flex-col gap-y-2 mt-3">
            {
                loading ? (<Spinner />) : (
                    posts.length === 0 ? (<div className="w-full h-full ">
                        <p className="font-bold text-white text-3xl flex text-center justify-center">No Post Found 🙁</p>
                    </div>) : (
                        posts.map(post=>(
                            <BlogsDetails key={post.id} post={post} />
                        ))
                    ) 
                )
            }
        </div>
    )
}

export default Blogs