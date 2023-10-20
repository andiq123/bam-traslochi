const ExperienceBanner = () => {
  return (
    <section className="lg:w-1/2 w-full bg-secondary mx-auto my-12 p-5 lg:shadow-2xl rounded-lg">
      <h1 className="text-3xl text-center font-bold">
        Esperienza di
        <span className="bg-secondary-focus p-3 rounded-xl text-white ml-3">
          {new Date().getFullYear() - 2012} anni
        </span>
      </h1>
    </section>
  );
};

export default ExperienceBanner;
