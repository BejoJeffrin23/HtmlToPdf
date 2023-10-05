const Footer = () => {
  const date = new Date();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        borderTop: "1px solid blue",
      }}
    >
      <h3>
        Report generated on {date.toLocaleString("en-US", { month: "long" })}{" "}
        {date.getDate()} {date.getFullYear()}
      </h3>
      <h3>RealAssist Property Report </h3>
    </div>
  );
};

export default Footer;
