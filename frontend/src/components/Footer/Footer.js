import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <div className="footer">
      <div className="footer-content">
        Copyright &#169; {date.getFullYear()} Project Management Group
      </div>
    </div>
  );
};

export default Footer;
