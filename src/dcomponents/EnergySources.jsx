import React from 'react';
import DateSelector from '../components/DateSelector';
import EnergySourcesBarChart from '../components/EnergySourcesBar';

const FacilityUsage = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col space-y-6">
      {/* Header Section */}
      <div className="flex justify-between items-center pb-4">
        <h3 className="text-lg font-bold text-gray-800">Energy Sources</h3>
      </div>

       {/* Chart Section */}
       <div className="flex justify-center"> {/* Reduced padding-bottom */}
        <EnergySourcesBarChart />
      </div>
    </div>
  );
};

export default FacilityUsage;


{/*import React from 'react';
import EnergySourcesBarChart from '../components/EnergySourcesBar';
import DateSelector from '../components/DateSelector';

const EnergySources = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg px-6 pt-6 flex flex-col space-y-6">
      {/* Header Section 
      <div className="flex justify-between items-start pb-4">
        <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">
          Energy Sources
        </h3>
        <DateSelector />
      </div>
      {/* Content Section 
      <div className="flex flex-col md:flex-row gap-4"> {/* Reduced padding-bottom 
        {/* Power Factor Info *
        <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
          <div className="flex justify-between items-center text-sm pb-2">
            <span className="text-gray-500">Min Power Factor:</span>
            <span className="font-semibold text-gray-800">0.90</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Avg Power Factor:</span>
            <span className="font-semibold text-gray-800">0.98</span>
          </div>
        </div>

        {/* Energy Overview 
        <div className="flex-1 bg-white rounded-lg shadow-sm p-4 border border-gray-300">
          <div className="flex justify-between items-center text-sm pb-2">
            <span className="text-gray-500">Total Energy Produced:</span>
            <span className="font-semibold text-gray-800">250 MW</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Emission Reduction:</span>
            <span className="font-semibold text-gray-800">164 t CO₂</span>
          </div>
        </div>
      </div>
      {/* Chart Section 
      <div className="flex justify-center"> {/* Reduced padding-bottom 
        <EnergySourcesBarChart />
      </div>
       {/* Legends Section 
       <div className="flex justify-center space-x-8" style={{ transform: 'translateY(-65px)' }}> {/* Moved legends up using translateY 
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#FF5733' }}></div>
          <span className="text-sm text-gray-800">Grid</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#33B5FF' }}></div>
          <span className="text-sm text-gray-800">Wheeled in Solar</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5" style={{ backgroundColor: '#FFD700' }}></div>
          <span className="text-sm text-gray-800">Diesel</span>
        </div>
      </div>
    </div>
  );
};

export default EnergySources;*/}
