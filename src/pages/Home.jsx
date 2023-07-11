import Pagination from "../components/Pagination";
import Header from "../components/Header";
import Blogs from "../components/Blogs";


function Home(){
    return(
        <div className=" flex flex-col w-full items-center justify-center">
            <Header />
            <div className="flex flex-col w-11/12 md:w-2/3 lg:w-2/3 items-center justify-center">
                <Blogs />
                <Pagination />
            </div>
        </div>
    )
}

export default Home;