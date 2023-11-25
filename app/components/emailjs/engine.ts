import { send } from "@emailjs/browser";
import toast from "react-hot-toast";

export async function sendEmail(
  from_name: string,
  from_email: string,
  message: string
) {
  const publicKey = process.env.NEXT_PUBLIC_EMAIL_PUBLIC;
  const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;

  if (!publicKey) {
    toast.error("No public key found");
    return;
  }

  if (!serviceID) {
    toast.error("No service ID found");
    return;
  }

  if (!templateID) {
    toast.error("No template ID found");
    return;
  }

  await send(
    serviceID,
    templateID,
    {
      to_name: "Andrei",
      from_name,
      from_email,
      message,
    },
    publicKey
  );

  toast.success("Email sent!");
}
