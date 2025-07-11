const Analytics = () => {
  const metrics = [
    {
      title: "Total Sales",
      value: "$120,000",
      change: "+12%",
      isPositive: true,
    },
    { title: "Active Users", value: "1,200", change: "-8%", isPositive: false },
    {
      title: "Website Visits",
      value: "8,500",
      change: "+5%",
      isPositive: true,
    },
    { title: "New Sign-Ups", value: "350", change: "+18%", isPositive: true },
  ];

  return (
    <div className="min-h-screen text-white bg-gray-900 p-8">
      <div className="max-w-7xl text-white mx-auto bg-gray-800 rounded-lg shadow-xl p-8">
        <h1 className="text-3xl  font-bold text-gray-300 mb-8">
          Analytics Dashboard
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`flex justify-between items-center bg-gray-700 rounded-lg
                  shadow-md p-6 border-l-4 ${
                    metric.isPositive ? "border-green-500" : "border-red-500"
                  }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-300">
                  {metric.title}
                </h3>
                <p className="text-lg text-gray-400 mt-2">{metric.value}</p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm mt-2 ${
                    metric.isPositive ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {metric.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            Website Traffic
          </h2>
          <div className="bg-gray-700 rounded-lg h-72">
            <div className="h-full flex items-center justify-center text-gray-400">
              Chart Placeholder
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            User Sign-Ups
          </h2>
          <div className="bg-gray-700 rounded-lg h-72">
            <div className="h-full flex items-center justify-center text-gray-500">
              Chart Placeholder
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-300 mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-4">
            <li
              className="flex items-center justify-between bg-gray-900
              rounded-lg shadow-md p-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-300">
                  User Registration
                </h3>
                <p className="text-sm text-gray-400">
                  New user signed up on 2025-02-16
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">+10 Users</p>
              </div>
            </li>
            <li
              className="flex items-center justify-between bg-gray-900 
            rounded-lg shadow-md p-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-300">
                  Sales Increase
                </h3>
                <p className="text-sm text-gray-400">
                  Sales grew by 12% on 2025-02-14
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">+$15,000</p>
              </div>
            </li>
            <li
              className="flex items-center justify-between bg-gray-900
            rounded-lg shadow-md p-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-300">
                  Website Traffic Surge
                </h3>
                <p className="text-sm text-gray-400">
                  Traffic increased by 8% on 2025-02-13
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400">+200 Visits</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Analytics;