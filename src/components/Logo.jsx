import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img
        src="/logo.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:hidden"
      />

      <img
        src="/logo-white.svg"
        alt="logo"
        width={160}
        height={50}
        style={{ width: "auto", height: "auto" }}
        className="dark:block hidden"
      />
    </Link>
  );
};

export default Logo;
