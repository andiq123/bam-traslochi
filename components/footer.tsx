const Footer = () => {
  return (
    <footer className="w-full bg-secondary flex justify-center">
      <div className="flex">
        <h4 className="font-bold p-10 hover:bg-secondary-focus transition-all duration-150 text-secondary-content">
          @Copyright Andrei {new Date().getFullYear()}
        </h4>
        <h4 className="font-bold p-10 hover:bg-secondary-focus transition-all duration-150 text-secondary-content">
          BAM S.R.L
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
