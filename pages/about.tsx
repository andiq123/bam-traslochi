import Link from "next/link";

const About = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url('images/traslochi.jpg')",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content backdrop-blur-md bg-secondary bg-opacity-50 rounded-lg">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bam Traslochi</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">
            <Link href={"/contact"}>Contattaci!</Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default About;
