function getData() {
  return {
    weeklyReport: {
      startDate: "2023-10-01",
      endDate: "2023-10-07",
      dailySummary: {
        sunday: {
          date: "2023-10-01",
          totalFeet: 1250.5,
          stationBreakdown: {
            saw: 1250.5,
            weld: 1200.0,
            paint: 1150.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1001",
              jobName: "Wilson Residence",
              dealerName: "ABC Building Supplies",
              totalLinearFeet: 450.5,
              buildings: [
                {
                  name: "Garage",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 24,
                      sizeInches: 0.0,
                      quantity: 12,
                      totalLinearFeet: 288.0,
                    },
                    {
                      type: "Gable",
                      classification: "Residential",
                      sizeFeet: 24,
                      sizeInches: 0.0,
                      quantity: 2,
                      totalLinearFeet: 48.0,
                    },
                  ],
                },
                {
                  name: "Workshop",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Commercial",
                      sizeFeet: 18,
                      sizeInches: 6.0,
                      quantity: 6,
                      totalLinearFeet: 114.5,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1002",
              jobName: "Johnson Farm Storage",
              dealerName: "Rural Builders Inc",
              totalLinearFeet: 800.0,
              buildings: [
                {
                  name: "Equipment Storage",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Agricultural",
                      sizeFeet: 40,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 800.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        monday: {
          date: "2023-10-02",
          totalFeet: 1820.0,
          stationBreakdown: {
            saw: 1820.0,
            weld: 1780.0,
            paint: 1750.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1003",
              jobName: "City Center Mall",
              dealerName: "Commercial Developers LLC",
              totalLinearFeet: 1200.0,
              buildings: [
                {
                  name: "Food Court",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Commercial",
                      sizeFeet: 60,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 1200.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1004",
              jobName: "Thompson Garage Addition",
              dealerName: "ABC Building Supplies",
              totalLinearFeet: 620.0,
              buildings: [
                {
                  name: "Garage Addition",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 31,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 620.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        tuesday: {
          date: "2023-10-03",
          totalFeet: 2140.0,
          stationBreakdown: {
            saw: 2140.0,
            weld: 2090.0,
            paint: 2040.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1005",
              jobName: "Smithville Church",
              dealerName: "Community Builders",
              totalLinearFeet: 1440.0,
              buildings: [
                {
                  name: "Main Sanctuary",
                  trusses: [
                    {
                      type: "Scissor",
                      classification: "Institutional",
                      sizeFeet: 48,
                      sizeInches: 0.0,
                      quantity: 30,
                      totalLinearFeet: 1440.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1006",
              jobName: "Davis Equestrian Center",
              dealerName: "Rural Builders Inc",
              totalLinearFeet: 700.0,
              buildings: [
                {
                  name: "Indoor Arena",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Agricultural",
                      sizeFeet: 70,
                      sizeInches: 0.0,
                      quantity: 10,
                      totalLinearFeet: 700.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        wednesday: {
          date: "2023-10-04",
          totalFeet: 1675.0,
          stationBreakdown: {
            saw: 1675.0,
            weld: 1625.0,
            paint: 1600.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1007",
              jobName: "Highland Subdivision",
              dealerName: "Residential Developers",
              totalLinearFeet: 1200.0,
              buildings: [
                {
                  name: "Model Home A",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 30,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 600.0,
                    },
                  ],
                },
                {
                  name: "Model Home B",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 30,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 600.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1008",
              jobName: "Martinez Carport",
              dealerName: "ABC Building Supplies",
              totalLinearFeet: 475.0,
              buildings: [
                {
                  name: "Carport",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 19,
                      sizeInches: 0.0,
                      quantity: 25,
                      totalLinearFeet: 475.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        thursday: {
          date: "2023-10-05",
          totalFeet: 2850.0,
          stationBreakdown: {
            saw: 2850.0,
            weld: 2800.0,
            paint: 2750.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1009",
              jobName: "Industrial Warehouse Complex",
              dealerName: "Commercial Developers LLC",
              totalLinearFeet: 2400.0,
              buildings: [
                {
                  name: "Warehouse A",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Industrial",
                      sizeFeet: 80,
                      sizeInches: 0.0,
                      quantity: 30,
                      totalLinearFeet: 2400.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1010",
              jobName: "Peterson Boat House",
              dealerName: "Lakeside Builders",
              totalLinearFeet: 450.0,
              buildings: [
                {
                  name: "Boat Storage",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 22,
                      sizeInches: 6.0,
                      quantity: 20,
                      totalLinearFeet: 450.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        friday: {
          date: "2023-10-06",
          totalFeet: 2100.0,
          stationBreakdown: {
            saw: 2100.0,
            weld: 2050.0,
            paint: 2000.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1011",
              jobName: "Green Valley School",
              dealerName: "Educational Construction Inc",
              totalLinearFeet: 1500.0,
              buildings: [
                {
                  name: "Gymnasium",
                  trusses: [
                    {
                      type: "Scissors",
                      classification: "Institutional",
                      sizeFeet: 75,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 1500.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1012",
              jobName: "Morris Triplex",
              dealerName: "Residential Developers",
              totalLinearFeet: 600.0,
              buildings: [
                {
                  name: "Unit 1",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 20,
                      sizeInches: 0.0,
                      quantity: 10,
                      totalLinearFeet: 200.0,
                    },
                  ],
                },
                {
                  name: "Unit 2",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 20,
                      sizeInches: 0.0,
                      quantity: 10,
                      totalLinearFeet: 200.0,
                    },
                  ],
                },
                {
                  name: "Unit 3",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 20,
                      sizeInches: 0.0,
                      quantity: 10,
                      totalLinearFeet: 200.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
        saturday: {
          date: "2023-10-07",
          totalFeet: 1050.0,
          stationBreakdown: {
            saw: 1050.0,
            weld: 1000.0,
            paint: 950.0,
          },
          orders: [
            {
              orderNumber: "ORD-2023-1013",
              jobName: "Community Garden Pavilion",
              dealerName: "Community Builders",
              totalLinearFeet: 600.0,
              buildings: [
                {
                  name: "Main Pavilion",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Institutional",
                      sizeFeet: 30,
                      sizeInches: 0.0,
                      quantity: 20,
                      totalLinearFeet: 600.0,
                    },
                  ],
                },
              ],
            },
            {
              orderNumber: "ORD-2023-1014",
              jobName: "Garcia Storage Shed",
              dealerName: "ABC Building Supplies",
              totalLinearFeet: 450.0,
              buildings: [
                {
                  name: "Storage Shed",
                  trusses: [
                    {
                      type: "Common",
                      classification: "Residential",
                      sizeFeet: 15,
                      sizeInches: 0.0,
                      quantity: 30,
                      totalLinearFeet: 450.0,
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      weeklyTotals: {
        totalFeet: 12885.5,
        totalOrders: 14,
        totalBuildings: 19,
        totalTrusses: 275,
        avgFeetPerDay: 1840.79,
        dailyBreakdown: [
          {
            day: "Sunday",
            feet: 1250.5,
            saw: 1250.5,
            weld: 1200.0,
            paint: 1150.0,
            percentage: 9.7,
          },
          {
            day: "Monday",
            feet: 1820.0,
            saw: 1820.0,
            weld: 1780.0,
            paint: 1750.0,
            percentage: 14.1,
          },
          {
            day: "Tuesday",
            feet: 2140.0,
            saw: 2140.0,
            weld: 2090.0,
            paint: 2040.0,
            percentage: 16.6,
          },
          {
            day: "Wednesday",
            feet: 1675.0,
            saw: 1675.0,
            weld: 1625.0,
            paint: 1600.0,
            percentage: 13.0,
          },
          {
            day: "Thursday",
            feet: 2850.0,
            saw: 2850.0,
            weld: 2800.0,
            paint: 2750.0,
            percentage: 22.1,
          },
          {
            day: "Friday",
            feet: 2100.0,
            saw: 2100.0,
            weld: 2050.0,
            paint: 2000.0,
            percentage: 16.3,
          },
          {
            day: "Saturday",
            feet: 1050.0,
            saw: 1050.0,
            weld: 1000.0,
            paint: 950.0,
            percentage: 8.2,
          },
        ],
        dealerBreakdown: [
          {
            dealerName: "ABC Building Supplies",
            totalFeet: 1995.5,
            percentage: 15.5,
          },
          {
            dealerName: "Rural Builders Inc",
            totalFeet: 1500.0,
            percentage: 11.6,
          },
          {
            dealerName: "Commercial Developers LLC",
            totalFeet: 3600.0,
            percentage: 27.9,
          },
          {
            dealerName: "Community Builders",
            totalFeet: 2040.0,
            percentage: 15.8,
          },
          {
            dealerName: "Residential Developers",
            totalFeet: 1800.0,
            percentage: 14.0,
          },
          {
            dealerName: "Lakeside Builders",
            totalFeet: 450.0,
            percentage: 3.5,
          },
          {
            dealerName: "Educational Construction Inc",
            totalFeet: 1500.0,
            percentage: 11.6,
          },
        ],
        trussTypeBreakdown: [
          { type: "Common", totalFeet: 9945.5, percentage: 77.2 },
          { type: "Gable", totalFeet: 48.0, percentage: 0.4 },
          { type: "Scissor", totalFeet: 2940.0, percentage: 22.4 },
        ],
        classificationBreakdown: [
          {
            classification: "Residential",
            totalFeet: 3495.5,
            percentage: 27.1,
          },
          {
            classification: "Agricultural",
            totalFeet: 1500.0,
            percentage: 11.6,
          },
          { classification: "Commercial", totalFeet: 2314.5, percentage: 18.0 },
          {
            classification: "Institutional",
            totalFeet: 3540.0,
            percentage: 27.5,
          },
          { classification: "Industrial", totalFeet: 2400.0, percentage: 18.6 },
        ],
        stationTotals: {
          saw: 12885.5,
          weld: 12545.0,
          paint: 12240.0,
        },
      },
    },
  };
}
