import { NavLink } from "react-router-dom"

function BlogsDetails({post}){

    return(<div className="gap-y-7 m-4">
        <NavLink to={`/blog/${post.id}`} >
        <div className="border border-slate-400 shadow-lg p-3 shadow-slate-700 hover:scale-105 ease-in-out duration-300 gap-y-7">
            <NavLink to={`/blog/${post.id}`} >
                <span className="font-bold text-xl underline  text-center hover:underline hover:text-blue-500 ">{post.title}</span>
            </NavLink>
            <p>
                By 
                <span className="text-blue-500 font-bold "> {post.author} </span>
                <span>on</span>
                <NavLink to={`/categories/${post.category.replaceAll(" " , "-")}`}>
                    <span className="font-bold hover:text-blue-500"> {post.category} </span>
                </NavLink>
            </p>
            <p> Posted on <span>{post.date} </span></p>
            <p className="text-sm mt-2 mb-2"> {post.content}</p>
            <div className="flex flex-wrap">
                {post.tags.map((tag)=>{
                    return(
                        <NavLink key={post.index} to={`/tags/${tag.replaceAll(" " , "-")}` }>
                        {<div className="border shadow-md shadow-slate-500 m-1 p-1 border-slate-400 rounded-lg text-blue-500 bg-slate-200"> { ` #${tag} `} </div>}
                    </NavLink>
                    )
                    
                })}
            </div>
        </div>
        </NavLink>
        </div>
    )
} 

export default BlogsDetails