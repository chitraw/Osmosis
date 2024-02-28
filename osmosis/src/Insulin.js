import React from 'react';
import "../src/App.css";

const Insulin = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">How Many Drops of Saline Per Minute Calculation</h1>
      <aside className="flex flex-col space-y-4">
        <div className="flex items-center space-x-4">
          <label className="block">Select the Quantity in ml/liter's</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value=""></option>
            <option value="ml">ml</option>
            <option value="liters">Liters</option>
          </select>
          <label className="block">Enter the Saline Quantity:</label>
          <input name="saline" type="text" className="border border-gray-300 rounded-md p-2" />
        </div>
        
        <div  className="flex items-center space-x-4">
          <label className="block">Select the hours in minutes/hours</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value=""></option>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
          </select>
          {/* <div className="flex flex-col space-y-2"> */}
            <label className="block">Enter the Hours:</label>
            <input name="hours" type="number" className="border border-gray-300 rounded-md p-2" />
          {/* </div> */}
          </div>
          <div className="flex flex-col space-y-2">
            <label className="block">Enter the Drop Factor:</label>
            <input name="dropFactor" type="number" className="border border-gray-300 rounded-md p-2" />
          </div>
       
      </aside>
    </div>
  );
};

export default Insulin;
