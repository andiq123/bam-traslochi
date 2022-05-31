import Head from "next/head";
import { useState } from "react";
import About from "../components/about";
import Contact from "../components/contact/contact";
import ExperienceBanner from "../components/experienceBanner";
import Footer from "../components/footer";
import Initial from "../components/initial";
import Modal from "../components/modal";
import Tasks from "../components/tasks";
import { getContact, getTasks } from "../fakeApi/data";
import { ContactDetails } from "../types/contactDetails";
import { Task } from "../types/task";

interface Props {
  tasks: Task[];
  contactDetails: ContactDetails;
}
const Home = ({ tasks, contactDetails }: Props) => {
  const [isOpenedModal, setIsOpenedModal] = useState(false);

  const openModal = () => {
    setIsOpenedModal(true);
  };
  const closeModal = () => {
    setIsOpenedModal(false);
  };
  return (
    <div>
      <Head>
        <title>Bam Traslochi</title>
        <meta name="description" content="Traslochi" />
        <meta name="description" content="BAM traslochi" />
        <meta name="description" content="Traslochi Verona" />
        <meta name="description" content="Traslochi Italia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Modal
        phoneNumber={contactDetails.Telefono}
        isOpen={isOpenedModal}
        closeModal={closeModal}
      />

      {/* <FontAwesomeIcon
        icon={faArrowCircleDown}
        className="w-8 h-fit mt-auto animate-ping z-10 absolute pointer-events-none right-40 bottom-10"
      /> */}

      <Initial openModal={openModal} />
      <ExperienceBanner />
      <Tasks tasks={tasks} />
      <About />
      <Contact details={contactDetails} openModal={openModal} />
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const tasks = getTasks();
  const contactDetails = getContact();

  return {
    props: { tasks, contactDetails },
  };
}

export default Home;
