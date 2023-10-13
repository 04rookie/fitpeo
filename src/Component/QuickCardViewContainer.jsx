import { Grid } from "@radix-ui/themes";
import QuickCard from "./QuickCard";
import {
  CircleDollarSignIcon,
  FileTextIcon,
  ScaleIcon,
  ShoppingBagIcon,
} from "lucide-react";
export default function QuickCardViewContainer() {
  return (
    <div className="mt-12">
      <Grid
        columns={{
          initial: "1",
          md: "2",
          xl: "4",
        }}
        justify="between"
        align="center"
        shrink="1"
        gap="7"
      >
        {/* <div className="flex flex-row justify-between items-center flex-wrap"> */}
        <div className="h-[100%] w-[100%] flex flex-row items-center justify-center">
          <QuickCard
            color="bg-rose-300"
            type="Earnings"
            value="$198k"
            percent="37.8"
            profit={true}
          >
            <CircleDollarSignIcon size="50" color="#d4063d" />
          </QuickCard>
        </div>
        <div className="h-[100%] w-[100%] flex justify-center items-center">
          <QuickCard
            color="bg-orange-300"
            type="Orders"
            value="$2.4k"
            percent="2"
            profit={false}
          >
            <FileTextIcon size="50" color="#d47006" />
          </QuickCard>
        </div>
        <div className="h-[100%] w-[100%] flex justify-center items-center">
          <QuickCard
            color="bg-lime-300"
            type="Balance"
            value="$2.4k"
            percent="2"
            profit={false}
          >
            <ScaleIcon size="50" color="#2a7802" />
          </QuickCard>
        </div>
        <div className="h-[100%] w-[100%] flex flex-row justify-center items-center">
          <QuickCard
            color="bg-sky-300"
            type="Total Sales"
            value="$89k"
            percent="11"
            profit={true}
          >
            <ShoppingBagIcon size="50" color="#0d55ba" />
          </QuickCard>
        </div>
        {/* </div> */}
      </Grid>
    </div>
  );
}
