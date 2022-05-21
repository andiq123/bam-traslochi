const About = () => {
  return (
    <div id="about">
      <div className="lg:ml-96 ml-64 absolute mt-20 -z-10">
        <img
          src={"images/traslochi.jpg"}
          className="mask mask-parallelogram object-fill w-full h-full"
        ></img>
      </div>
      <div className="flex w-full lg:gap-20 justify-center items-center h-screen">
        <div className="w-96">
          <h1 className="text-5xl font-bold mt-32 text-center">Chi siamo?</h1>
          <div className="w-full h-10 bg-secondary mt-5"></div>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <div className="bg-slate-100 w-96 h-96 bg-opacity-80 backdrop-blur-md rounded-2xl shadow-2xl">
            <h1 className="font-bold text-4xl text-center m-10">
              Bam Traslochi
            </h1>
            <p className="text-start text-lg px-10 font-semibold">
              Signori Traslochi è un’azienda fondata a Verona negli anni
              cinquanta dal padre di uno degli attuali titolari. Da più di mezzo
              secolo opera esclusivamente nel settore dei traslochi.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
