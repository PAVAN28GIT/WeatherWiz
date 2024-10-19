import { UilCloudSun } from '@iconscout/react-unicons';

const Forecast = ({ forecast }) => {
  return (
    <div className="bg-zinc-800 p-6 rounded-lg shadow-md text-white w-96">
      <div className="grid grid-cols-1 gap-4">
        {/* Example forecast */}
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UilCloudSun size={30} />
            <p className="text-xl font-semibold ml-2">50°C</p>
          </div>
          <div className="flex flex-col text-right">
            <p>20 Oct</p>
            <p className="text-sm text-gray-400">Monday</p>
          </div>
        </div>


        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UilCloudSun size={30} />
            <p className="text-xl font-semibold ml-2">50°C</p>
          </div>
          <div className="flex flex-col text-right">
            <p>20 Oct</p>
            <p className="text-sm text-gray-400">Monday</p>
          </div>
        </div>


        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UilCloudSun size={30} />
            <p className="text-xl font-semibold ml-2">50°C</p>
          </div>
          <div className="flex flex-col text-right">
            <p>20 Oct</p>
            <p className="text-sm text-gray-400">Monday</p>
          </div>
        </div>


        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UilCloudSun size={30} />
            <p className="text-xl font-semibold ml-2">50°C</p>
          </div>
          <div className="flex flex-col text-right">
            <p>20 Oct</p>
            <p className="text-sm text-gray-400">Monday</p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <UilCloudSun size={30} />
            <p className="text-xl font-semibold ml-2">50°C</p>
          </div>
          <div className="flex flex-col text-right">
            <p>20 Oct</p>
            <p className="text-sm text-gray-400">Monday</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
