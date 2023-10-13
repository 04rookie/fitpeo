import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Grid, Heading, TextField } from "@radix-ui/themes";
import { HandMetalIcon } from "lucide-react";
export default function DashboardHeader() {
  return (
    <div className="w-[100%] mt-14 md:mt-0">
      <Grid
        columns={{
          initial: "1",
          md: "2",
          xl: "2",
        }}
        justify={"between"}
      >
        <Heading size="4">
          <div className="flex flex-row">
            Hello Shahrukh <HandMetalIcon className="ml-2" />
          </div>
        </Heading>
        <TextField.Root>
          <TextField.Slot>
            <MagnifyingGlassIcon height="16" width="16" />
          </TextField.Slot>
          <TextField.Input placeholder="search" />
        </TextField.Root>
      </Grid>
    </div>
  );
}
