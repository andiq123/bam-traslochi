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
        <p className="font-bold">#BAM Traslochi SRL</p>
      </div>

      <div className="flex items-center gap-3 mt-auto">
        <FontAwesomeIcon icon={faCopyright} className="h-5 w-5" />
        <p className="font-bold">Copyright Andrei</p>
      </div>

      <div className="flex items-center">
        <FontAwesomeIcon icon={faBusinessTime} className="h-14 w-14" />
        <div className="flex flex-col">
          <p>
            <strong>Lunedì-Venerdì:</strong> 08:00 - 20:00
          </p>
          <p>
            <strong>Sabato:</strong> 08:00 - 12:30
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
