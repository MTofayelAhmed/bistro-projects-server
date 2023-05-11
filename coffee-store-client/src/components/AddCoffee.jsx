import React from "react";

const AddCoffee = () => {
const handleAddCoffee= event =>{
  event.preventDefault();
  const form = event.target;
  const name = form.name.value;
  const quantity = form.quantity.value;
  const supplier = form.supplier.value;
  const taste = form.taste.value;
  const category = form.category.value;
  const details = form.details.value;
  const photo = form.photo.value;
  const coffee = {name, quantity, supplier, taste, category, details, photo}
  console.log(coffee)
  fetch('http://localhost:5000/coffee', {
    method: 'POST',
    headers:{
      'content-type': 'application/json'
    },
    body: JSON.stringify(coffee)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)
  })
}



  return (
    <form onSubmit={handleAddCoffee} className="px-28 bg-[#F4F3F0]">
      {/* form row */}
      <div className=" md:flex  mb-6">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Coffee Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="name"
            placeholder="Coffee Name"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 ml-4">
        <label className="label">
          <span className="label-text">AvailAble Quantity</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="quantity"
            placeholder="Available Quantity "
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      {/* form row  supplier and taste */}
      <div className=" md:flex   mb-6">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Supplier</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="supplier"
            placeholder="Supplier"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Taste</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="taste"
            placeholder="Taste "
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      {/* form row category and Details*/}
      <div className=" md:flex  mb-6">
      <div className="form-control md:w-1/2">
        <label className="label">
          <span className="label-text">Category</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="input input-bordered w-full"
          />
        </label>
      </div>
      <div className="form-control w-1/2 ml-4">
        <label className="label">
          <span className="label-text">Details</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="details"
            placeholder="Details "
            className="input input-bordered w-full"
          />
        </label>
      </div>
      </div>
      {/* form row */}
      <div className=" mb-6">
      <div className="form-control md:w-full">
        <label className="label">
          <span className="label-text">Photo URL</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="input input-bordered w-full"
          />
        </label>
      </div>
     
      </div>
   
      <input type="submit" value="ADD COFFEE"  className="btn btn-block"/>
    
    </form>
  );
};

export default AddCoffee;
