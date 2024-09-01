const express = require("express");
const router = express.Router();

const PiechartData = [
  {
    title: "Active Matters",
    primary: "fill-white",
    chartData: [
      { category: "Litigation", tasks: 120, fill: "var(--color-litigation)" },
      { category: "Corporate", tasks: 90, fill: "var(--color-corporate)" },
      { category: "Family Law", tasks: 150, fill: "var(--color-family-law)" },
      { category: "Criminal", tasks: 80, fill: "var(--color-criminal)" },
      { category: "Real Estate", tasks: 60, fill: "var(--color-real-estate)" },
    ],
  },
  {
    title: "Pending Matters",
    primary: "fill-white",
    chartData: [
      {
        category: "Litigation",
        tasks: 45,
        fill: "var(--color-litigation)",
      },
      {
        category: "Corporate",
        tasks: 30,
        fill: "var(--color-corporate)",
      },
      {
        category: "Family Law",
        tasks: 60,
        fill: "var(--color-family-law)",
      },
      { category: "Criminal", tasks: 25, fill: "var(--color-criminal)" },
      {
        category: "Real Estate",
        tasks: 15,
        fill: "var(--color-real-estate)",
      },
    ],
  },
];

const AreaChartData = [
  { month: "January", tasks: 186 },
  { month: "February", tasks: 305 },
  { month: "March", tasks: 237 },
  { month: "April", tasks: 73 },
  { month: "May", tasks: 209 },
  { month: "June", tasks: 214 },
];

const BarChartData = [
  { month: "January", tasks: 186 },
  { month: "February", tasks: 305 },
  { month: "March", tasks: 237 },
  { month: "April", tasks: 73 },
  { month: "May", tasks: 209 },
  { month: "June", tasks: 214 },
];

const progressData = [
  {
    title: "Time Interno",
    value: 25,
    primary: "bg-black",
    secondary: "bg-white",
  },
  {
    title: "Mopheos",
    value: 20,
    primary: "bg-orange-400",
    secondary: "bg-white",
  },
  {
    title: "Appontes",
    value: 45,
    primary: "bg-black",
    secondary: "bg-white",
  },
];

router.get("/fetch/data", (req, res) => {
  console.log("called");

  res.json({
    success: true,
    progressData,
    BarChartData,
    AreaChartData,
    PiechartData,
    message: "Interaction completed",
  });
});

module.exports = router;
