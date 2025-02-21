const StatsSection = () => {
  const stats = [
    { number: "350+", label: "Specialist Brokers" },
    { number: "5 Million+", label: "Satisfied Customers" },
    { number: "Rs 4 Billion", label: "Gross written premium" },
    { number: "1500+", label: "Team Members" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-4">
        Get the right protection to keep moving forward
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        From customized auto insurance to superior claims service, our people
        and technology will support you every step of the way. Join us today and
        experience why we&apos;re one of the best insurance companies.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl font-bold text-indigo-700 mb-2">
              {stat.number}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default StatsSection;