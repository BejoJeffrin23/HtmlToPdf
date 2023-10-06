import { useEffect, useRef } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Body = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.reflow(); // Ensure the chart reflows to fit its container
    }
  }, []);
  const options = {
    title: {
      text: "",
    },

    yAxis: {
      title: {
        text: "",
      },
    },
    xAxis: {
      categories: data?.data
        ? data?.data.map((crime) => {
            return crime?.data_year;
          })
        : [],
    },
    // plotOptions: {
    //   series: {
    //     pointStart: data?.data ? data?.data[0]?.data_year : 0,
    //   },
    // },

    series: [
      {
        name: "Arrests",
        lineWidth: 3,
        data: data?.data
          ? data?.data.map((crime) => {
              return crime?.Burglary;
            })
          : [],
      },
    ],

    responsive: {
      rules: [
        {
          condition: {
            maxWidth: 500,
          },
          chartOptions: {
            legend: {
              layout: "horizontal",
              align: "center",
              verticalAlign: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={require("../../../assets/location.png")}
          alt="crime"
          style={{ height: 25, width: 25 }}
        />
        <h3 style={{ marginLeft: 10 }}>Crime</h3>{" "}
        <div
          style={{
            width: "100%",
            height: "3px",
            background: "linear-gradient(to right, #005DFF,#00A3FF,#21DDFF)",
            margin: "30px 0",
            marginLeft: 10,
          }}
        ></div>
      </div>
      <div
        style={{
          padding: "20px 20px 20px 20px",
          margin: "20px 0px 0px 0px",
          backgroundColor: "gray",
          borderTopRightRadius: "20px",
          borderTopLeftRadius: "20px",
          background: "#E8EEFB",
          color: "#1463FF",
        }}
      >
        Burgalary
      </div>
      <div
        style={{
          backgroundColor: "#F2F4F5",
          margin: "0px 0px 20px 0px",
          padding: "20px 40px",
          borderBottomRightRadius: "20px",
          borderBottomLeftRadius: "20px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "#F2F4F5",
            padding: "5px",
            borderTopLeftRadius: "20px",
            borderBottomLeftRadius: "20px",
            textAlign: "center",
            writingMode: "vertical-rl", // Rotate text vertically from bottom to top
            textOrientation: "mixed",
            transform: "rotate(180deg)", // Ensure the text is readable
            position: "absolute",
            top: "40%",
            left: 10,
          }}
        >
          Arrests
        </div>
        <div className="card">
          <HighchartsReact
            highcharts={Highcharts}
            options={options}
            ref={chartRef}
          />
        </div>
      </div>
    </div>
  );
};
export default Body;
