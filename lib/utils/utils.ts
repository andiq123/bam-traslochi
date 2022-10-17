export const generateHardwareID = async () => {
  const { hardwareConcurrency, userAgent, platform, appVersion } = navigator;
  //compute hash
  const hash = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(
      `${userAgent}${platform}${appVersion}${hardwareConcurrency}`
    )
  );
  //convert to hex
  const hex = Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  return hex;
};

export const getTodayDate = (): string => {
  const today = new Date();
  const date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

  const dateTime = date;
  return dateTime;
};
