import { createContext, useState } from "react";

interface DataContextType {
  fetchData: () => void;
  storedData: boolean;
  piechartData: [
    {
      title: string;
      primary: string;
      chartData: [
        {
          month: string;
          tasks: number;
        }
      ];
    }
  ];
  areachartData: [
    {
      month: string;
      tasks: number;
    }
  ];
  barchartData: [
    {
      month: string;
      tasks: number;
    }
  ];

  progressData: [
    {
      title: string;
      value: number;
      primary: string;
      secondary: string;
    }
  ];
}

export const DataContext = createContext<DataContextType | null>(null);

export const DataContextProvider = ({ children }: any) => {
  const [piechartData, setPiechartData] = useState();
  const [areachartData, setAreachartData] = useState();
  const [barchartData, setBarchartData] = useState();
  const [progressData, setProgressData] = useState();
  const [storedData, setStoredData] = useState(false);

  const fetchData = async () => {
    console.log("ca2");

    const response = await fetch("/fetch/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      const result = await response.json();
      console.log(result);

      if (result.success == true) {
        console.log(result);
        setAreachartData(result.AreaChartData);
        setBarchartData(result.BarChartData);
        setPiechartData(result.PiechartData);
        setProgressData(result.progressData);
        setStoredData(true);
      }
    }
  };

  const info = {
    fetchData,
    storedData,
    piechartData,
    areachartData,
    barchartData,
    progressData,
  };

  return <DataContext.Provider value={info}>{children}</DataContext.Provider>;
};
