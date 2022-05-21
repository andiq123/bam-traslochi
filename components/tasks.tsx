import { Task } from "../types/task";
import Image from "next/image";

interface Props {
  tasks: Task[];
}

const Tasks = ({ tasks }: Props) => {
  return (
    <div id="servizi" className="bg-secondary flex justify-center">
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
              className="w-full p-10 flex items-center hover:bg-secondary-focus hover:rounded-lg transition-all duration-200 hover:scale-105"
            >
              <div className="shadow-2xl overflow-hidden rounded-3xl lg:w-60 h-fit w-full">
                <Image
                  src={"/" + task.imgUrl}
                  alt={task.title}
                  width={"100%"}
                  height={"65%"}
                  layout="responsive"
                  className="rounded-3xl"
                />
              </div>

              <h1 className="text-3xl font-bold ml-20 text-secondary-content">
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
