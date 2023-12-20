import "./Details.css";
const Details = () => {
  return (
    <div className="details-main">
      {/* <div className="details-l1">
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
      </div> */}
      <p style={{ marginTop: "20px", fontSize: 30 , marginBottom:20}}>
        Embark on a Spiritual Journey at the Grand Ram Mandir : Experience the
        Sacred Heritage of Lord Ram
      </p>
      <button className="details-button">EXPLORE</button>
    </div>
  );
};

export default Details;
