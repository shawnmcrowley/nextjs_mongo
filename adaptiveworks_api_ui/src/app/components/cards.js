
export default function Card({SYSID, Name, PercentCompleted}) {
    
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          <h3 className="ml-2 text-sm font-medium">MileStone Name: {Name}</h3>
        </div>
        <div>System ID: {SYSID} - Percentage Completed: {PercentCompleted}%</div>
        </div>
    )
};