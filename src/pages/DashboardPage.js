import React, { useEffect, useState } from "react";
import TableauPage from "./TableauPage";

const DashboardPage = () => {
  const [tableauProject, setTableauProject] = useState(null);

  // replace with actual links
  const links = [
    {
      type: "Spine UI",
      url: "https://public.tableau.com/views/Superstore_24/Overview",
    },
    {
      type: "Star UI - (US Server)",
      url: "http://public.tableau.com/views/WorldIndicators/GDPpercapita",
    },
    {
      type: "Star UI - (China Server)",
      url: "https://public.tableau.com/views/TheWideningDivide/01",
    },
  ];

  return (
    <div>
      <h2>Dashboard Page</h2>
      <ul>
        {links.map((link, index) => (
          <div key={link.type}>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                color: "blue",
              }}
              onClick={() => setTableauProject(link)}
            >
              {`${index + 1}. ${link.type}`}
            </a>
          </div>
        ))}
      </ul>

      <div>
        {tableauProject && <TableauPage tableauProject={tableauProject} />}
      </div>
    </div>
  );
};

export default DashboardPage;
