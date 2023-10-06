import React, { useEffect, useRef, useState } from "react";

// import "./App.css";
import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

const App = () => {
  const chartRef = useRef(null);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Define the API URL
    const apiUrl =
      "https://api.usa.gov/crime/fbi/cde/arrest/state/AK/all?from=2015&to=2020&API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv"; // Replace with your API endpoint

    // Use the fetch API to make a GET request
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((responseData) => {
        setData(responseData); // Update the state with the fetched data
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false in case of an error
      });

    if (chartRef.current) {
      chartRef.current.chart.reflow(); // Ensure the chart reflows to fit its container
    }
  }, []);

  return (
    <div
      className="fuller"
      style={{
        padding: 20,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Header />
      <Body data={data} loading={loading} />
      <Footer />
    </div>
  );
};

export default App;
