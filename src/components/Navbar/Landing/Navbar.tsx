import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="details-details-l1">
        <div
          style={{
            backgroundColor: "red",
            minWidth: "35px",
            minHeight: "35px",
            borderRadius: "50px",
          }}
        />
        <p style={{ fontWeight: "bolder", fontSize: "22px" }}>
          Shri Ram Janmbhoomi Teerth Kshetra
        </p>
      </div>
      <div className="navbar-menu">
        <span>Home</span>
        <span>Facilities</span>
        <span>Donate</span>
        <span>Event</span>
        <span>Contact Us</span>
      </div>
    </div>
  );
};

export default Navbar;
