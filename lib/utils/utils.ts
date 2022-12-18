import { load } from "@fingerprintjs/fingerprintjs";

export const generateHardwareID = async () => {
  const resources = await load();
  const data = await resources.get();
  return data.visitorId;
};

export const getTodayDate = (): string => {
  const today = new Date();

  const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

  const date = today.getMonth() + 1 + "-" + +day + "-" + today.getFullYear();

  return date;
};
