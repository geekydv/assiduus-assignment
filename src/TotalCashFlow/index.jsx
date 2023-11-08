import { useEffect, useRef } from "react";
import * as d3 from "d3";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export default function TotalCashFlow() {

const chartRef = useRef(null);

  useEffect(() => {
    const data = [
      { month: "August", in: Math.random() * 100, out: Math.random() * 100 },
      { month: "September", in: Math.random() * 100, out: Math.random() * 100 },
      { month: "October", in: Math.random() * 100, out: Math.random() * 100 },
      { month: "November", in: Math.random() * 100, out: Math.random() * 100 },
      { month: "December", in: Math.random() * 100, out: Math.random() * 100 },
      { month: "January", in: Math.random() * 100, out: Math.random() * 100 },
    ];

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };
    const svg = d3.select(chartRef.current).append("svg").attr("width", width).attr("height", height);
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.month))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const barWidth = 20;
    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.in + d.out)])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const stack = d3.stack().keys(["in", "out"]);

    const stackedData = stack(data);

    const color = d3.scaleOrdinal().domain(["in", "out"]).range(["#02BB7D", "#44b544"]);

    svg
      .selectAll("g")
      .data(stackedData)
      .enter()
      .append("g")
      .attr("fill", (d) => color(d.key))
      .selectAll("rect")
      .data((d) => d)
      .enter()
      .append("rect")
      .attr("x", (d) => xScale(d.data.month) + xScale.bandwidth() / 2 - barWidth / 2)
      .attr("y", (d) => yScale(d[1]))
      .attr("height", (d) => yScale(d[0]) - yScale(d[1]))
      .attr("width", barWidth);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale))
      .selectAll("text")
      .style("fill", "grey");

    // svg
    //   .append("g")
    //   .attr("transform", `translate(${margin.left},0)`)
    //   .call(d3.axisLeft(yScale));

  }, []);


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
          <p style={{ color: "#000", fontWeight: "500" }}>Total cash flow</p>
          <div style={{display:'flex', color: '#000'}}>
            <div style={{height: '20px', width: '20px', borderRadius: '20%',background: '#02BB7D'}}></div>&nbsp;<span>In</span>
            &nbsp;&nbsp;
            <div style={{height: '20px', width: '20px', borderRadius: '20%',background: '#44b544'}}></div>&nbsp;<span>Out</span>
          </div>
        </div>
        <svg ref={chartRef} width="500" height="300" style={{ background: "#fff" }}></svg>
      </Box>
    </Paper>
  )
}
