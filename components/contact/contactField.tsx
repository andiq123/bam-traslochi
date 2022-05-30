import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactItem } from "../../types/contactItem";

interface Props {
  item: ContactItem;
  isClickable?: boolean;
  click?: () => void;
}

const ContactField = ({ item, isClickable, click }: Props) => {
  return (
    <div className="mb-4 w-max ">
      <label className={`block text-sm font-bold`}>{item.label}:</label>
      {isClickable ? (
        <div
          onClick={click}
          className={`flex items-center gap-5 align-middle w-max
          cursor-pointer hover:bg-base-200 p-3 transition-all duration-150 rounded-xl
        `}
        >
          <FontAwesomeIcon icon={item.icon} className="w-5" />
          <p className="text-2xl">{item.value}</p>
        </div>
      ) : (
        <div className={`flex items-center gap-5 align-middle`}>
          <FontAwesomeIcon icon={item.icon} className="w-5" />
          <p className="text-2xl">{item.value}</p>
        </div>
      )}
    </div>
  );
};

export default ContactField;
