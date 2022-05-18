import { Task } from "../../types/task";
import Image from "next/image";
import traslochi from "../../public/images/traslochi.jpg";

interface Props {
  tasks: Task[];
}

const Tasks = ({ tasks }: Props) => {
  return (
    <div className="bg-secondary overflow-hidden mt-20 relative m-5 p-5">
      <Image
        src={traslochi}
        className="mask mask-triangle w-full h-full"
        layout="fill"
        objectFit="cover"
        style={{ marginLeft: "50%", position: "absolute" }}
      />

      <h1 className="text-5xl font-bold text-center mb-10 z-60">
        I nostri servizi:
      </h1>
      <div className="flex flex-row flex-wrap gap-10 mx-auto justify-center max-w-5xl">
        {tasks.map((task) => (
          <div
            className="card w-72 bg-base-100 shadow-2xl image-full"
            key={task.id}
          >
            <figure>
              <img src={task.imgUrl} alt={task.title} />
            </figure>
            <div className="card-body">
              <h1 className=" text-xl font-bold">{task.title}</h1>
              <p>If a dog chews shoes whose shoes does he choose?</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
