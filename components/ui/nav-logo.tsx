const NavLogo = () => {
  return (
    <div className="flex justify-start lg:w-0 lg:flex-1">
      <a href="#">
        <span className="sr-only">Workflow</span>
        <img
          className="h-10 w-auto sm:h-14"
          src="https://parakh.aicte-india.org/assets/images/Parakhlogo.png"
          alt=""
        />
      </a>
    </div>
  );
};

export default NavLogo;
