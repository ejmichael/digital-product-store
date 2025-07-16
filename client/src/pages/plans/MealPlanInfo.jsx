import React from 'react'
import { Link } from 'react-router-dom'

const MealPlanInfo = () => {
  return (
<div className="mt-16 px-6 lg:px-20 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">Simple, Satisfying Meal Plan</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        No complicated recipes, no starving. Just real meals that fuel your goals — fat loss, energy, and muscle tone.
      </p>

      {/* <img src={MealImage} alt="Meal plan preview" className="rounded-lg shadow-lg mx-auto mb-8 max-w-2xl" /> */}

      <div className="bg-gray-100 rounded-lg p-6 mb-10 text-left max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold uppercase text-center mb-4">What You Get</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Balanced meals for breakfast, lunch, dinner, and snacks.</li>
          <li>Macronutrient breakdown for each meal.</li>
          <li>Meal prep tips and grocery list.</li>
          <li>Flexible swaps based on dietary needs.</li>
        </ul>
      </div>

      <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
        The plan is created to help you stay full, energized, and consistent. Whether you're training or recovering, the meals support your body and results.
      </p>

      <Link to="/product/68783179d805cc7160e55f4f" className="inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800">
              Get the Full Plan – 75% Off
            </Link>
    </div>
  )
}

export default MealPlanInfo