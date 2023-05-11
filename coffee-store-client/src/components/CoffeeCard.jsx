import React from "react";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id,name, quantity, supplier, taste, category, details, photo } = coffee;


  const handleDelete = _id => {
  
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }) .then((result) => {
      if (result.isConfirmed) {
      
fetch(`http://localhost:5000/coffee/${_id}`,{
  method: "DELETE"
})

.then(res => res.json())
.then(data => {
console.log(data)
  if(data.deletedCount>0){
  Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
  }
})

    
  
      }
    })
  }
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="flex w-full p-5 justify-between">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p> Quantity: {quantity}</p>
          <p> supplier: {supplier}</p>
          <p> taste: {taste}</p>
          <p> category: {category}</p>
        </div>
        <div className="card-actions ">
          <div className="btn-group btn-group-vertical space-y-4">
            <button className="btn ">View</button>
            <button className="btn">Edit</button>
            <button className="btn" onClick={()=> handleDelete(_id)}>X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
