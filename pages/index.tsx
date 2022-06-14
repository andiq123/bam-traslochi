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
        <link rel="dns-prefetch" href="//translate.google.com" />
        <link rel="dns-prefetch" href="//s.w.org" />
        <link rel="canonical" href="https://bamsrl-traslochi.it/" />
        <link rel="shortlink" href="https://bamsrl-traslochi.it/" />
        <title>Trasloca in modo facile con noi! provaci!</title>
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="description"
          content="Traslochi Italia, Trasloco in modo facile!"
        />
        <meta name="google-site-verification" content="pVZbKXV3NKcjq3vizj0OcVBNTtPaJKOsBg42uw0DSks" />
        <meta name="description" content="BAM" />
        <meta name="description" content="BAM Traslochi" />
        <meta name="description" content="Traslochi E Montaggio Mobili" />
        <meta name="description" content="Montaggi Su Misura" />
        <meta name="description" content="Noleggio Camion con Autista" />
        <meta name="description" content="Noleggio Scala con Operatore" />
        <meta name="description" content="Montaggi su Misura" />
        <meta
          name="description"
          content="Traslochi Nazionali E Internazionali"
        />
        <meta name="description" content="Villafranca di Verona" />
        <meta name="description" content="Verona" />
        <meta property="article:tag" content="parco mezzi" />
        <meta property="article:tag" content="Traslochi" />
        <meta property="article:tag" content="BAM SRL" />
        <meta property="article:tag" content="BAM Traslochi" />
        <meta
          property="article:published_time"
          content="2022-01-01T14:27:53+00:00"
        />
        <meta
          property="article:modified_time"
          content="2022-06-01T13:51:24+00:00"
        />
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
