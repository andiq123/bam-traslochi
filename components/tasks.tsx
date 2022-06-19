import { Task } from "../types/task";
import Image from "next/image";

interface Props {
  tasks: Task[];
}

const Tasks = ({ tasks }: Props) => {
  return (
    <article id="servizi" className="bg-secondary flex justify-center">
      <div className="flex lg:flex-row flex-col gap-10 max-w-6xl justify-center lg:items-start items-center">
        <div className="h-fit lg:sticky lg:top-32">
          <h1 className="text-5xl font-bold whitespace-nowrap">
            I Nostri Servizi:
          </h1>
        </div>

        <div className="flex flex-col gap-5 justify-center m-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex hover:bg-primary rounded-lg transition-all duration-200 hover:scale-105 p-2"
            >
              <Image
                src={task.imgUrl}
                alt="Cover"
                objectFit="cover"
                width={100}
                height={100}
                className="flex-1 rounded-xl"
              />

              <h1 className="lg:text-3xl text-xl flex-1 font-bold ml-20 text-secondary-content">
                {task.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default Tasks;

// flex w-full items-center p-2
