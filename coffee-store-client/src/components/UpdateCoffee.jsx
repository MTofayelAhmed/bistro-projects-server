import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateCoffee = () => {
  const coffee = useLoaderData()
  return (
    <div>
      <h2>this is update Coffee page</h2>
    </div>
  );
};

export default UpdateCoffee;