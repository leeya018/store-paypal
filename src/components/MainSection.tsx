import React from "react";

const MainSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 bg-background bg-center bg-cover">
      <h1 className="text-4xl font-bold text-white">MereSer</h1>
      <p className="mt-4 text-lg text-white max-w-2xl">
        Learning is a process that is often not under our control and is wrapped
        up with the environments we inhabit and the relationships we make.
      </p>
    </section>
  );
};

export default MainSection;
