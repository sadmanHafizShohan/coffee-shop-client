import { Link, useLoaderData } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
const Notice = () => {
    const notice = useLoaderData();
    console.log(notice)
    return (
        <div>
            <Link to="/">
                <button className="flex items-center gap-2 text-[#374151] font-rancho text-3xl mb-8 hover:text-[#8B4513] transition-colors duration-300 drop-shadow-md cursor-pointer">
                    <FaArrowLeft /> Back To Home
                </button>
            </Link>
            <div className="card grid grid-cols-2 place-self-center gap-4 card-side bg-[#F5F4F1]/50 shadow-sm my-6 p-10">
                <figure>
                    <img className="w-auto h-auto object-cover"
                        src={notice.photo}
                        alt="Coffee Image" />
                </figure>
                <div className="card-body">
                    <h2 className="text-3xl font-rancho text-coffee">Notice</h2>
                    <div className="text-coffee">
                        <p>Name: {notice.name}</p>
                        <p>Chef: {notice.chef}</p>
                        <p>Price: {notice.price}$</p>
                        <p>Category: {notice.category}</p>
                        <p>Details: {notice.details}</p>
                        <p>supplier: {notice.supplier}</p>
                        <p>taste: {notice.taste}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Notice;