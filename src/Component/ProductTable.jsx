import { CaretDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu, Table, Text, TextField } from "@radix-ui/themes";
import waterOne from "../assets/1.jpeg";
import waterTwo from "../assets/2.jpeg";
import { useState } from "react";
export default function ProductTable() {
  const [freq, setFreq] = useState("Options");
  return (
    <div className="w-[100%] shadow-md rounded-md min-h-[160px] min-w-[300px] mt-12 bg-white">
      <div className="flex flex-row flex-wrap justify-between p-4">
        <div>
          <Text weight="medium" size="4">
            Product Sell
          </Text>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <TextField.Root>
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
              </TextField.Slot>
              <TextField.Input placeholder="search" />
            </TextField.Root>
          </div>
          <div className="ml-2">
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <Button variant="soft">
                  {freq}
                  <CaretDownIcon />
                </Button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item onClick={() => setFreq("30 days")}>
                  30 days
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => setFreq("15 days")}>
                  15 days
                </DropdownMenu.Item>
                <DropdownMenu.Item onClick={() => setFreq("7 days")}>
                  7 days
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </div>
      </div>
      <div className="p-4">
        <Table.Root>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeaderCell>Product name</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Stock</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
              <Table.ColumnHeaderCell>Total Sales</Table.ColumnHeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.RowHeaderCell>
                <div className="flex flex-row flex-wrap">
                  <img
                    className="rounded-md"
                    alt="underwater"
                    src={waterOne}
                    height={108}
                    width={192}
                  />
                  <div className="flex flex-col ml-2 justify-center mt-2 md:mt-0">
                    <Text weight="medium" size="1">
                      Abstract 3d
                    </Text>
                    <Text weight="light" size="1">
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing
                    </Text>
                  </div>
                </div>
              </Table.RowHeaderCell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">
                  32 in stock
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">
                  $45.99
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">20</div>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.RowHeaderCell>
                <div className="flex flex-row flex-wrap">
                  <img
                    className="rounded-md"
                    alt="underwater"
                    src={waterTwo}
                    height={108}
                    width={192}
                  />
                  <div className="flex flex-col ml-2 justify-center mt-2 md:mt-0">
                    <Text weight="medium" size="1">
                      Sarphens Illustration
                    </Text>
                    <Text weight="light" size="1">
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing
                    </Text>
                  </div>
                </div>
              </Table.RowHeaderCell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">
                  32 in stock
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">
                  $45.99
                </div>
              </Table.Cell>
              <Table.Cell>
                <div className="h-[100%] flex flex-col justify-center">20</div>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </div>
    </div>
  );
}
