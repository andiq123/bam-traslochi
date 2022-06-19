import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    checkIfAlreadyAccepted();
  }, []);

  const checkIfAlreadyAccepted = () => {
    const accepted = localStorage.getItem("cookieConsent");
    if (!accepted) {
      setShowCookieConsent(true);
    }
  };

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowCookieConsent(false);
    window.location.reload();
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowCookieConsent(false);
  };

  return (
    <>
      {showCookieConsent && (
        <div className="popUp fixed bottom-0 w-full flex justify-center">
          <div className="lg:w-1/2 w-full bg-white rounded-xl bg-opacity-60 backdrop-blur-lg">
            <div className="flex flex-col justify-center items-center m-5 gap-5">
              <p className="text-xl font-semibold">
                Noi usiamo i cookies per un&apos;esperienza migliore per te!
              </p>
              <div className="btn-group">
                <button
                  className="btn btn-error text-lg"
                  onClick={declineCookies}
                >
                  Rifiuto
                </button>
                <button
                  className="btn btn-primary text-lg"
                  onClick={acceptCookies}
                >
                  Acceto
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
