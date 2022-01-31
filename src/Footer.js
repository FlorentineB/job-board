const Footer = (props) => {
  return (
    <p className="footer-text">
      Made with <span>{props.withwhat}</span> at <span>{props.where}</span> by{" "}
      <span>{props.by}</span>
    </p>
  );
};

export default Footer;
