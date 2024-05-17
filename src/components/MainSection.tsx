import React from "react";

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white">The Shop of Carliton</h1>
      <p className="mt-4 text-lg text-white max-w-2xl">
        Learning is a process that is often not under our control and is wrapped
        up with the environments we inhabit and the relationships we make.
      </p>
      <button className="mt-8 bg-purple-600 text-white px-6 py-3 rounded-md text-lg">
        Learn More
      </button>
    </section>
  );
};

export default MainSection;
