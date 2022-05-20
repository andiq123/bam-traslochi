import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import agent from "../agent/agent";
import About from "../components/about";
import Contact from "../components/contact/contact";
import Footer from "../components/footer";
import Initial from "../components/initial";
import Tasks from "../components/tasks";
import { ContactDetails } from "../types/contactDetails";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
  contactDetails: ContactDetails;
}
const Home = ({ tasks, contactDetails }: Props) => {
  return (
    <div>
      <Head>
        <title>Bam Traslochi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <FontAwesomeIcon
        icon={faArrowCircleDown}
        className="w-8 h-fit mt-auto animate-ping z-10 absolute pointer-events-none right-10 bottom-10"
      />

      <Initial />
      <Tasks tasks={tasks}></Tasks>
      <About />
      <Contact details={contactDetails}></Contact>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const tasks = await agent.tasks();
  const contactDetails = await agent.contact();

  return {
    props: { tasks, contactDetails },
  };
}

export default Home;
