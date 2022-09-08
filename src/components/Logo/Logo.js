import logo from "../../assets/Logo/Jovic-logo6.png";

const Logo = ({ logoStycky }) => {
  let logoClass = logoStycky === "sticky" ? "navigation-logo--sticky" : "navigation-logo";

  return (
    <div className={logoClass}>
      <img src={logo} alt="logo" />
    </div>
  );
};
export default Logo;
