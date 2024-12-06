import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <section className="h-[98vh] flex justify-center items-center">
            <div className="w-[99%] h-[98%] rounded-[20px] bg-__yellow absolute left-[.5%] top-[8px] z-[-1]"/>
            <div className="text-center">
                <h1 className="text-[3rem] font-bold">404 - Error Page</h1>
                <h2 className="mt-2 text-[2rem]"><span className="font-bold">Oops! </span>this page does not found</h2>
                <Link to="/" className="px-5 py-3 duration-300 hover:scale-105 cursor-pointer rounded-md bg-black mt-5 block w-fit mx-auto text-white text-[1.1rem]">Go to Home</Link>
            </div>
        </section>
    )
}

export default ErrorPage