import { Task } from "../types/task";
import Image from "next/image";

interface Props {
  tasks: Task[];
}

const Tasks = ({ tasks }: Props) => {
  return (
    <div className="bg-secondary ">
      <div className="mt-40 flex lg:flex-row flex-col gap-10 max-w-6xl mx-auto">
        <div className="h-fit lg:sticky lg:top-32">
          <h1 className="text-5xl font-bold whitespace-nowrap">
            I Nostri Servizi:
          </h1>
        </div>

        <div className="flex flex-col flex-wrap gap-5 mx-auto justify-center m-5">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="w-full p-10 flex hover:bg-secondary-focus hover:rounded-lg transition-all duration-200 hover:scale-105"
            >
              <div className="shadow-2xl w-fit h-fit overflow-hidden rounded-3xl p-3">
                <Image
                  src={"/" + task.imgUrl}
                  alt={task.title}
                  width={250}
                  height={155}
                  className="rounded-3xl"
                />
              </div>

              <h1 className="text-5xl font-bold my-auto ml-20 text-secondary-content ">
                {task.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
