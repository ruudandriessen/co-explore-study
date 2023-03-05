import { Box, Flex, Text } from "@chakra-ui/react";
import { groupBy, tidy } from "@tidyjs/tidy";
import { Radar } from "react-chartjs-2";
import data from "../data/survey-data.csv";
import { mapSurveyData } from "./mapSurveyData";

const CATEGORIES = [
  "Team composition",
  "Communication",
  "Distribution",
  "Information",
  "Nature of problem",
];

export const OnlineSurvey = () => {
  const dataWithGroup = mapSurveyData(data);

  const groupedData: [string, [string, any]][] = tidy(
    dataWithGroup,
    groupBy(["teamId", "id"], groupBy.entries({ single: true }))
  );

  return (
    <Flex flexDir={"column"} padding={4}>
      <Text> Survey details here</Text>
      <Flex width="100%" height="100%" flexWrap="wrap">
        {groupedData.map(([teamId, userData]) => {
          const data = userData.map(([userId, data]) => ({
            label: userId,
            data: CATEGORIES.map((category) => data[category]),
            fill: true,
            backgroundColor: "rgba(54, 162, 235, 0.1)",
            borderColor: "rgb(54, 162, 235, 0.2)",
            pointBackgroundColor: "rgb(54, 162, 235)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgb(54, 162, 235)",
          }));

          return (
            <Box width="400px" textAlign={"center"} key={teamId}>
              {teamId}
              <Radar
                options={{
                  scales: {
                    r: {
                      beginAtZero: true,
                      pointLabels: {
                        font: {
                          size: 6,
                        },
                      },
                    },
                  },
                  responsive: true,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
                data={{
                  labels: CATEGORIES,
                  datasets: data,
                }}
              />
            </Box>
          );
        })}
      </Flex>
    </Flex>
  );
};
