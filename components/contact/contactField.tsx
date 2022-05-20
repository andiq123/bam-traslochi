import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactItem } from "../../types/contactItem";

interface Props {
  item: ContactItem;
  isClickable?: boolean;
}

const ContactField = ({ item, isClickable }: Props) => {
  return (
    <div className="mb-4">
      <label className={`block text-sm font-bold`}>{item.label}:</label>
      <div
        className={`flex items-center gap-5 align-middle ${
          isClickable &&
          "cursor-pointer hover:bg-base-200 p-3 transition-all duration-150 rounded-xl"
        }`}
      >
        <FontAwesomeIcon icon={item.icon} className="w-5" />
        <p className="text-2xl">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactField;
