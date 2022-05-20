import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ContactItem } from "../../types/contactItem";

interface Props {
  item: ContactItem;
}

const ContactField = ({ item }: Props) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-bold my-auto">{item.label}:</label>
      <div className="flex gap-5">
        <FontAwesomeIcon icon={item.icon} className="w-5" />
        <p className="text-2xl">{item.value}</p>
      </div>
    </div>
  );
};

export default ContactField;
