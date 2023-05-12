import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  const  {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
  const handleUpdateCoffee = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
  const updatedCoffee =  {name, quantity, supplier, taste, category, details, photo}
  
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: 'PUT',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
    .then(res => res.json())
    .then(data => {
 
      if(data.modifiedCount> 0)
      Swal.fire({
        title: 'Success!',
        text: 'Coffee updated successfully',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    })
  }

  return (
    <form onSubmit={ handleUpdateCoffee} className="px-28 bg-[#F4F3F0]">
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
          defaultValue={name}
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
          defaultValue={quantity}
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
          defaultValue={supplier}
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
          defaultValue={taste}
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
          defaultValue={category}
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
          defaultValue={details}
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
          defaultValue={photo}
          placeholder="Photo URL"
          className="input input-bordered w-full"
        />
      </label>
    </div>
   
    </div>
 
    <input type="submit" value="Update COFFEE"  className="btn btn-block"/>
  
  </form>
  );
};

export default UpdateCoffee;