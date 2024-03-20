import React from 'react';
import "../src/App.css";

const Insulin = () => {
  
  return (
    <div>
      <h1 className="text-ls text-center font-bold mb-4">How Many Drops of Saline Per Minute Calculation</h1>
      <aside className="flex flex-col space-y-4 p-4 rounded-md shadow-md content-center" >
        <div className="items">
          <p className="flex ">
          <label className="block">Select the Quantity in ml/liter's</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value=""></option>
            <option value="ml">ml</option>
            <option value="liters">Liters</option>
          </select>
          </p>
          <p className="flex ">
          <label className="block">Enter the Saline Quantity:</label>
          <input name="saline" type="text" className="border border-gray-300 rounded-md p-2" />
          </p>
        </div>
        
        
        <div className="items">
          <p>
          <label className="">Select the hours in minutes/hours</label>
          <select className="border border-gray-300 rounded-md p-2">
            <option value=""></option>
            <option value="minutes">Minutes</option>
            <option value="hours">Hours</option>
          </select>
          </p>
          <p>
          {/* <div className="flex flex-col space-y-2"> */}
            <label className="">Enter the Hours:</label>
            <input name="hours" type="number" className="border border-gray-300 rounded-md p-2" />
          {/* </div> */}
          </p>
        </div>
         
          
          <div className="flex  justify-center align-item flex-row ">
            <label className="">Enter the Drop Factor:</label>
            <input  name="dropFactor" type="number" className="  border border-gray-300 rounded-md p-2" />
          </div>
          
       
      </aside>


      <span>https://www.nursingcenter.com/ncblog/december-2021/how-to-calculate-drops-per-minute</span>
    </div>
  );
};

export default Insulin;
