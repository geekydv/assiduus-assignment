import { useState, useEffect, useRef  } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import * as d3 from "d3";
import { Paper } from "@mui/material";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export default function LineGraph() {
  const [month, setMonth] = useState("January");
  const handleChange = (event) => {
    setMonth(event.target.value);
  };
  const graphRef = useRef();
  useEffect(() => {
    const data = Array.from({ length: 30 }, () => Math.random() * 100);

    const width = 500;
    const height = 300;
    const margin = { top: 20, right: 20, bottom: 30, left: 50 };
    const xDomain = [0, 30];
    const xRange = [margin.left, width - margin.right];

    const svg = d3.select(graphRef.current);
    svg.selectAll("*").remove(); 
    const x = d3.scaleLinear().domain(xDomain).range(xRange);
    const y = d3.scaleLinear().domain([1, d3.max(data)]).nice().range([height - margin.bottom, margin.top]);


    const line = d3.line().x((d, i) => x(i)).y((d) => y(d));
        
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", line);
      
      
    const xAxis = d3.axisBottom(x).tickSize(5).tickPadding(10).tickFormat(d3.format("d"));


    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(xAxis)
      .selectAll("text")
      .style("fill", "grey");
  }, [month]);

  return (
    <Paper>
      <Box sx={{ height: "400px", width: "500px", background: "#fff" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: '1px solid #ccc'
          }}
        >
          <p style={{ color: "#000", fontWeight: "500" }}>Checking account</p>
          <div>
            <FormControl sx={{ width: "150px", marginRight: "20px" }}>
              <InputLabel id="demo-simple-select-label">Manage</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={"Manage"}
                label="Manage"
              >
                <MenuItem value={"Manage"}>Manage</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: "150px" }}>
              <InputLabel id="demo-simple-select-label-1">Month</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={month}
                label="Month"
                onChange={handleChange}
              >
                {months.map((month, index) => (
                  <MenuItem value={month} key={index}>
                    {month}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <svg ref={graphRef} width={500} height={300}></svg>
      </Box>
    </Paper>
  );
}
