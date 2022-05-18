import agent from "../agent/agent";
import { Details } from "../types/details";
import { ErrorResponseModel } from "../types/error";

interface Props {
  details: Details | ErrorResponseModel;
}

const Contact = ({ details }: Props) => {
  if ((details as ErrorResponseModel).failed) {
    return (
      <div className="min-h-screen flex justify-center">
        <h1>Details havent been loaded</h1>
      </div>
    );
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Contattaci!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200">
          <div className="card-body">
            {Object.entries(details).map(([key, value]) => (
              <div className="mb-4">
                <label className="block text-sm font-bold">{key}</label>
                <p className=" text-base">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

export async function getStaticProps() {
  const data = await agent.contact();

  return {
    props: { details: data },
  };
}
