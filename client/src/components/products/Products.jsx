import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const items = [
    {
      name: 'Meal Plan',
      image: 'https://res.cloudinary.com/dwvrx1rhr/image/upload/v1752140911/Untitled_design_2_jmawhn.jpg', // Replace with your actual image path
      link: '/meal-plan',
    },
    {
      name: 'Workout Plan',
      //image: 'https://res.cloudinary.com/dwvrx1rhr/image/upload/v1751983861/Untitled_design_pjqixl.jpg', // Replace with your actual image path
      image: 'https://res.cloudinary.com/dwvrx1rhr/image/upload/v1751983174/workout-img-to-use2_ia4klt.png', // Replace with your actual image path
      link: '/workout-plan',
    },
  ];

  return (
    <div className="flex flex-wrap lg:max-w-[70%] mx-auto">
      {items.map((item, index) => (
        <Link key={index} to={item.link} className="w-full sm:w-1/2 p-4">
          <div className="relative group aspect-square rounded-lg overflow-hidden shadow-lg">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <button className="rounded rounded-full p-3 bg-white lg:text-lg sm:text-2xl font-bold hover:bg-gray-300 text-center">
                View {item.name}
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};



export default Products;
