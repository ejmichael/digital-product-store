import React from 'react'
import { Link } from 'react-router-dom'

const WorkoutPlanInfo = () => {


  return (
 <div className="mt-16 px-6 lg:px-20 py-10 text-center">
      <h1 className="text-4xl md:text-5xl font-bold uppercase mb-4">Weekly Workout Split</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
        Train smarter, not harder. This weekly workout plan combines leg day workouts with dumbbell-based upper body sessions — giving you real results with no guesswork.
      </p>

      {/* <img src={WorkoutImage} alt="Workout plan preview" className="rounded-lg shadow-lg mx-auto mb-8 max-w-2xl" /> */}

      <div className="bg-gray-100 rounded-lg p-6 mb-10 text-left max-w-4xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold uppercase text-center mb-4">Weekly Routine</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Mon, Wed, Fri – Leg Day:</strong> 5 exercises like squats, lunges, glute bridges, hip thrusts — all bodyweight, no equipment.</li>
          <li><strong>Tues, Thurs, Sun – Upper Body:</strong> Dumbbell workouts for biceps, shoulders, triceps, and back. Includes 4 core/ab exercises too.</li>
          <li><strong>Saturday – Rest or Stretch:</strong> Optional rest or flexibility session.</li>
        </ul>
      </div>

      <p className="text-lg mb-8 text-gray-700 max-w-2xl mx-auto">
        Every workout includes images to guide you, and they're optimized for home or gym — no confusion, just action.
      </p>

      <Link to="/product/68783179d805cc7160e55f4f" className="inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-800">
        Get the Full Plan – 75% Off
      </Link>
    </div>
  )
}

export default WorkoutPlanInfo