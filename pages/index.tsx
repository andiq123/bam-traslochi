import Head from "next/head";
import Image from "next/image";
import agent from "../agent/agent";
import Tasks from "../components/tasks/tasks";
import cargo from "../public/images/cargo.png";

import traslochiHome from "../public/images/traslochi-home.jpg";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
}
const Home = ({ tasks }: Props) => {
  return (
    <div>
      <Head>
        <title>Bam Traslochi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col  min-h-screen">
        <div className="absolute -z-10 mt-20">
          <Image src={traslochiHome} className="mask mask-parallelogram-2" />
        </div>
        <div className="flex justify-center bg-secondary mt-80 mx-auto rounded-lg p-10 bg-opacity-50 backdrop-blur-md w-full">
          <div>
            <Image src={cargo} width={200} height={200} />
          </div>
          <h1 className="text-5xl my-auto">Trasloca in modo facile!</h1>
        </div>
      </div>
      <Tasks tasks={tasks}></Tasks>
    </div>
  );
};

export async function getStaticProps() {
  const tasks = await agent.tasks();

  return {
    props: { tasks },
  };
}

export default Home;
