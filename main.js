// Check which import method you're using
// For script tag:
const { AgChart } = agCharts;
// Or for ES modules:
//import { AgChart } from "ag-charts-enterprise";

try {
  // Add this before creating the chart
  agCharts.LicenseManager.setLicenseKey(
    "Using_this_{AG_Charts_and_AG_Grid}_Enterprise_key_{AG-092121}_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_legal@ag-grid.com___For_help_with_changing_this_key_please_contact_info@ag-grid.com___{SOLTECH}_is_granted_a_{Single_Application}_Developer_License_for_the_application_{FinLogic_Budget_Management}_only_for_{1}_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_{FinLogic_Budget_Management}_need_to_be_licensed___{FinLogic_Budget_Management}_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_{AG_Charts_and_AG_Grid}_Enterprise_versions_released_before_{24_July_2026}____[v3]_[0102]_MTc4NDg0NzYwMDAwMA==9f7ba8f543d7f59c07fbaffa3cb63e87"
  );

  const data = getData();
  console.log("Data successfully retrieved:", data);

  // Debug what's available in the global scope
  console.log("agCharts available:", typeof agCharts);
  console.log("agCharts content:", agCharts);

  // Extract the daily breakdown data
  const dailyBreakdownData = data.weeklyReport.weeklyTotals.dailyBreakdown;

  // Make sure the container exists
  const container = document.getElementById("myChart");
  if (!container) {
    throw new Error("Chart container element not found");
  }

  // Create a simpler chart first to make sure it works
  const chartOptions = {
    container: document.getElementById("myChart"),
    data: dailyBreakdownData,
    series: [
      {
        type: "bar",
        xKey: "day",
        yKey: "saw",
        yName: "Saw Station",
        fill: "#4472C4", // Blue color for Saw
        stroke: "#4472C4",
        strokeWidth: 0,
      },
      {
        type: "bar",
        xKey: "day",
        yKey: "weld",
        yName: "Weld Station",
        fill: "#ED7D31", // Orange color for Weld
        stroke: "#ED7D31",
        strokeWidth: 0,
      },
      {
        type: "bar",
        xKey: "day",
        yKey: "paint",
        yName: "Paint Station",
        fill: "#A5A5A5", // Gray color for Paint
        stroke: "#A5A5A5",
        strokeWidth: 0,
      },
    ],
    title: {
      text: "Weekly Production by Station",
    },
    subtitle: {
      text: `Week of ${data.weeklyReport.startDate} to ${data.weeklyReport.endDate}`,
    },
    axes: [
      {
        type: "category",
        position: "bottom",
      },
      {
        type: "number",
        position: "left",
        title: {
          text: "Linear Feet",
        },
      },
    ],
    legend: {
      enabled: true,
      position: "bottom",
    },
  };

  // Create the chart - make sure to use the correct method based on your import
  if (AgChart) {
    AgChart.create(chartOptions);
  } else if (agCharts.AgChart) {
    agCharts.AgChart.create(chartOptions);
  } else if (agCharts.AgCharts) {
    agCharts.AgCharts.create(chartOptions);
  } else {
    console.error("Could not find AG Charts create method");
  }

  console.log("Chart created successfully");
} catch (error) {
  console.error("Error creating chart:", error);
}
