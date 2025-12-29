import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const coffeeData = Object.fromEntries(formData.entries());
    console.log(coffeeData)
    if(coffeeData.name === '' || coffeeData.chef === '' || coffeeData.supplier === '' || coffeeData.taste === '' || coffeeData.category === '' || coffeeData.details === '' || coffeeData.price === '' || coffeeData.photo === ''){
      Swal.fire({
        title: "Please fill all the fields!",
        text: "Please fill all the fields!",
        icon: "error",
        color: "#8B4513",
        iconColor: "#8B4513",
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }
    fetch('http://localhost:3000/coffees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coffeeData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added!",
            text: "Your Coffee Added Successfully!",
            icon: "success",
            color: "#8B4513",
            iconColor: "#8B4513",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
          });
          form.reset();
        }
      })
  }
  return (
    <div
      className="min-h-screen bg-cover bg-center py-12 px-4"
      // style={{
      //   backgroundImage: `url('/images/more/11.png')`,
      // }}
    >
      <div className="max-w-11/12 mx-auto">
        <Link to="/">
          <button className="flex items-center gap-2 text-[#374151] font-rancho text-3xl mb-8 hover:text-[#8B4513] transition-colors duration-300 drop-shadow-md cursor-pointer">
            <FaArrowLeft /> Back To Home
          </button>
        </Link>
        <div className="bg-[#F4F3F0]/30 rounded-lg shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-rancho text-coffee mb-4 drop-shadow-md">
              Add New Coffee
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
              It is a long established fact that a reader will be distraceted
              by the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Name
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Chef
                  </span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Supplier
                  </span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Taste
                  </span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-semibold text-coffee">
                    Details
                  </span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input text-coffee input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
                />
              </div>
            </div>
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-lg font-semibold text-coffee">
                  Photo URL
                </span>
              </label>
              <input
                type="url"
                name="photo"
                placeholder="Enter photo URL"
                className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              />
            </div>
            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text text-lg font-semibold text-coffee">
                  Price
                </span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
                className="input text-[#374151] input-bordered w-full bg-white focus:outline-none focus:ring-2 focus:ring-[#8B4513]"
              />
            </div>
            <div className="form-control">
              <button
                type="submit"
                className="btn w-full bg-[#D2B48C] hover:bg-[#8B4513] text-[#331A15] hover:text-white border-2 border-[#331A15] font-rancho text-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Add Coffee ☕
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
