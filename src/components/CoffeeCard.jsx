import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";
import Swal from "sweetalert2";
const CoffeeCard = ({ coffee }) => {
    // const [coffees, setCoffee] = useState({ coffee });
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8B4513",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            window.location.reload();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your coffee has been deleted successfully.",
                                icon: "success",
                                confirmButtonColor: "#8B4513",
                                iconColor: "#8B4513",
                            });
                        }
                    })
                    .catch((err) => {
                        console.error(err);
                        Swal.fire("Error!", "Something went wrong.", "error");
                    });
            }
        });
    };
    return (
        <div>
            <div className="card card-side bg-[#F5F4F1]/50 shadow-sm my-6">
                <figure>
                    <img
                        src={coffee.photo}
                        alt="Coffee Image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title font-rancho text-2xl text-coffee">Name: {coffee.name}</h2>
                    <div>
                        <p className="text-coffee">Chef: {coffee.chef}</p>
                        <p className="text-coffee">Price: {coffee.price}$</p>
                    </div>
                    <div className="card-actions justify-end mt-6">
                        <button className="btn bg-coffee-light text-2xl border-none"><CiEdit /></button>
                        <button className="btn bg-coffee text-2xl border-none"><Link
                         to={`/notice/${coffee._id}`}><FaEye /></Link></button>
                        <button onClick={() => handleDelete(coffee._id)} className="btn bg-red-500 text-2xl border-none"><MdDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CoffeeCard;