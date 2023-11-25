import {
  faBusinessTime,
  faCopyright,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="footer p-5 bg-base-300 flex flex-wrap items-center justify-between">
      <div>
        <FontAwesomeIcon icon={faTruck} className="h-14 w-14" />
        <p>#BAM Traslochi SRL</p>
      </div>

      <div className="flex items-center gap-3">
        <FontAwesomeIcon icon={faCopyright} className="h-5 w-5" />
        <p>Copyright Andrei</p>
      </div>

      <div className="flex items-center">
        <FontAwesomeIcon icon={faBusinessTime} className="h-14 w-14" />
        <div className="flex flex-col">
          <p>Lunedi-Venerdi: 08 - 20</p>
          <p>Sabato: 08 - 12:30</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
