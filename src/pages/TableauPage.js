import React, { useEffect, useState } from "react";
const { tableau } = window;

let viz;

const TableauPage = ({ tableauProject }) => {
  const initTableau = () => {
    return new Promise((resolve, reject) => {
      const tableauOptions = {
        onFirstInteractive: () => {
          resolve();
        },
      };

      const vizContainer = document.getElementById("tableauVizContainer");

      if (viz) {
        viz.dispose();
      }

      viz = new tableau.Viz(vizContainer, tableauProject.url, tableauOptions);
    });
  };

  useEffect(() => {
    const initializeTableau = async () => {
      await initTableau();
    };

    initializeTableau();
  }, [tableauProject]);

  return (
    <div>
      <h2>Tableau Project - {tableauProject.type}</h2>
      <div id="tableauVizContainer" style={setVizStyle}></div>
    </div>
  );
};

const setVizStyle = {
  width: "800px",
  height: "700px",
};

export default TableauPage;
