import { BarChart, PieChart } from "@mui/x-charts";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Text } from "@radix-ui/themes";
import { useState } from "react";

export default function GraphData() {
  const [freq, setFreq] = useState("Quaterly");
  return (
    <div className="mt-12 w-[100%] flex flex-col justify-between md:flex-row">
      <div className="w-[100%] md:w-[69%]">
        <div className="shadow-md rounded-md bg-white p-4 h-[350px] w-[100%]">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col">
              <Text weight="medium" size="4">
                Overview
              </Text>
              <Text weight="light" size="3">
                Monthly Earning
              </Text>
            </div>
            <div>
              <DropdownMenu.Root>
                <DropdownMenu.Trigger>
                  <Button variant="soft">
                    {freq}
                    <CaretDownIcon />
                  </Button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Content>
                  <DropdownMenu.Item onClick={() => setFreq("Quaterly")}>
                    Quaterly
                  </DropdownMenu.Item>
                  <DropdownMenu.Item onClick={() => setFreq("Monthly")}>
                    Monthly
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Root>
            </div>
          </div>
          <div className="h-[80%] w-[100%]">
            <BarChart
              xAxis={[
                {
                  id: "barCategories",
                  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                  scaleType: "band",
                },
              ]}
              series={[
                {
                  data: [2, 5, 3, 4, 5, 6, 1],
                },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] md:w-[29%] mt-6 md:mt-0">
        <div className="shadow-md rounded-md bg-white p-4 w-[100%] h-[350px]">
          <div className="flex flex-col">
            <Text weight="medium" size="4">
              Customers
            </Text>
            <Text weight="light" size="3">
              Customers that buy product
            </Text>
          </div>
          <div className="h-[80%] w-[100%] flex justify-center items-center">
            <PieChart
              series={[
                {
                  data: [
                    { id: 0, value: 75, label: "yes" },
                    { id: 1, value: 25, label: "no" },
                  ],
                  innerRadius: 40,
                  outerRadius: 70,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: 0,
                  endAngle: 360,
                  cx: 120,
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
