function Maps() {
  return (
    <section className="p-5 bg-base-300 rounded-xl">
      <h1 className="font-bold text-center text-5xl py-5">Ci trovi qui!</h1>
      <iframe
        title="maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.84964861738!2d10.95428457622839!3d45.412371371073206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781e02c53e35809%3A0x3fada06f0fae8fb1!2sVia%20Chioda%2C%2076%2C%2037136%20Verona%20VR%2C%20Italia!5e0!3m2!1sro!2sro!4v1700855734275!5m2!1sro!2sro"
        className="w-full h-96"
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default Maps;
