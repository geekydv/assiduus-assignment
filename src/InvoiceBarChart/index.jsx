import { useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import * as d3 from "d3";
import { Paper } from "@mui/material";

export default function InvoiceBarChart() {
const chartRef = useRef(null);

  const handleNewInvoiceClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

useEffect(() => {
    const data = [
      { label: "Older", value: Math.random() * 100 },
      { label: "Jan 01-08", value: Math.random() * 100 },
      { label: "Jan 09-16", value: Math.random() * 100 },
      { label: "Jan 17-24", value: Math.random() * 100 },
      { label: "Jan 25-31", value: Math.random() * 100 },
      { label: "Future", value: Math.random() * 100 },
    ];

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 50, left: 50 };
    const barWidth = 20;

    const svg = d3
      .select(chartRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.label))
      .range([margin.left, width - margin.right])
      .padding(0.1);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .nice()
      .range([height - margin.bottom, margin.top]);
      
    svg
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", (d) => {
        const x = xScale(d.label) + (xScale.bandwidth() - barWidth) / 2;
        const y = yScale(d.value);
        const curve = 5;
        const barHeight = yScale(0) - yScale(d.value);

        return `
          M ${x - curve},${y}
          L ${x + barWidth},${y}
          Q ${x + barWidth},${y - curve} ${x + barWidth / 2},${y - curve}
          Q ${x},${y - curve} ${x},${y}
          L ${x},${y + barHeight}
          L ${x + barWidth},${y + barHeight}
          L ${x + barWidth},${y}
          Z
        `;
      })
      .attr("fill", "#59b964");

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .selectAll("text")
      .style("fill", "gray");

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
          <p style={{ color: "#000", fontWeight: "500" }}>Invoices owed to you</p>
            <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        <label htmlFor="contained-button-file">
          <Button variant="contained" sx={{background: '#e8eefd',color: '#59b964'}} component="span" onClick={handleNewInvoiceClick}>
            <b>New Sales Invoice</b>
          </Button>
          </label>
        </div>
        <svg
          ref={chartRef}
          width="500"
          height="300"
          style={{
            background: "#fff",
          }}
        ></svg>
      </Box>
    </Paper>
  )
}
