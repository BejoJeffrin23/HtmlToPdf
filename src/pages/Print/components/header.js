const Header = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={require("../../../assets/logoMark.png")} alt="logo" />{" "}
          <span
            style={{
              fontSize: 20,
              marginLeft: 10,
              color: "black",
              fontWeight: "bold",
            }}
          >
            RealAssist.AI
          </span>
        </div>
        <h3>123 Main Street, Dover, NH 03820-4667</h3>
      </div>
      <div
        style={{
          width: "100%",
          height: "3px",
          background: "linear-gradient(to right, #005DFF,#00A3FF,#21DDFF)",
          margin: "20px 0",
        }}
      ></div>
    </div>
  );
};

export default Header;
