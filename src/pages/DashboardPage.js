import React, { useEffect, useState } from "react";
const { tableau } = window;

let viz;

const DashboardPage = () => {
  const [url] = useState(
    "https://public.tableau.com/views/RegionalSampleWorkbook/Storms"
  );

  const initTableau = () => {
    return new Promise((resolve, reject) => {
      const tableauOptions = {
        onFirstInteractive: () => {
          resolve();
        },
      };

      const vizContainer = document.getElementById("tableauVizContainer"); // Replace with your container ID+

      if (viz) {
        viz.dispose();
      }

      viz = new tableau.Viz(vizContainer, url, tableauOptions); // Replace with your Tableau visualization URL
    });
  };

  useEffect(() => {
    const initializeTableau = async () => {
      await initTableau();
    };

    initializeTableau();
  }, []);

  return (
    <div>
      <h2>Dashboard Page</h2>
      <div id="tableauVizContainer" style={setVizStyle}></div>
    </div>
  );
};

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default DashboardPage;
