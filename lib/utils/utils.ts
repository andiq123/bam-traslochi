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

  const day = today.getDate() < 10 ? "0" + today.getDate() : today.getDate();

  const date = day + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return date;
};
