import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"
import { baseUrl } from "../baseUrl"
import Header from "../components/Header"
import Spinner from "../components/Spinner"
import BlogsDetails from "../components/BlogsDetails"


function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null)
    const [relatedblogs, setRelatedBlogs] = useState([ ])
    const Navigation = useNavigate()
    const location = useLocation()
    const { loading, setLoading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1)

    async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`
        try {
            const res = await fetch(url)
            const data = await res.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        } catch (error) {
            console.log("error fetching data")
            setBlog(null)
            setRelatedBlogs({})
        }
        setLoading(false)
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname])


    return (
        <div className=" flex flex-col w-full items-center justify-center">
            <Header />
            <div className=" flex flex-col w-11/12 md:w-2/3 lg:w-2/3" >
            
                <button onClick={() => Navigation(-1)} className="p-2 border m-2  bg-slate-400 rounded-sm hover:bg-slate-700 hover:text-white ease-in duration-300 w-[100px]">
                    Back
                </button>
            </div>
            <div className="w-11/12 max-w-[650px] py-3 flex flex-col gap-y-7 mt-3  items-center justify-center">
            {
                loading ? (<Spinner />) : blog ?
                    (<div>
                        <BlogsDetails post={blog} />
                        <h2 className="mt-6 mb-5 font-bold border border-slate-800 p-2 text-center text-xl bg-slate-600 shadow-lg uppercase text-white ">Related Blogs</h2>
                        {
                            relatedblogs.map((post) => {
                                return(
                                    <div key={post.id}>
                                    <BlogsDetails post={post} />
                                </div>
                                )
                                
                            })
                        }
                    </div>)  : (
                        <div>
                            <p>No Post Found</p>
                        </div>
                    )
            }
            </div>
            
        </div>
    )
}

export default BlogPage