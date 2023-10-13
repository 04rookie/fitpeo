import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Avatar, Button, Text } from "@radix-ui/themes";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {
  HexagonIcon,
  ShoppingCartIcon,
  UserIcon,
  DollarSignIcon,
  PercentIcon,
  BadgeHelpIcon,
  ChevronDownIcon,
} from "lucide-react";
export default function SideBar() {
  // const [collapsed] = useState(false);
  const [toggled, setToggled] = useState(false);
  const [broken, setBroken] = useState(false);
  return (
    <div className="flex flex-row h-[100vh] overflow-clip">
      {broken && (
        <Button
          className="sb-button absolute top-3 left-3"
          onClick={() => setToggled(!toggled)}
        >
          <HamburgerMenuIcon />
        </Button>
      )}
      <Sidebar
        className=" bg-indigo-600 text-white min-h-[100vh]"
        // collapsed={collapsed}
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        onBreakPoint={setBroken}
        breakPoint="sm"
        backgroundColor="#040c4a"
      >
        <div className="flex flex-row items-center mt-4">
          <HexagonIcon className="mr-2 ml-5" size="40" color="#ffffff" />
          <Text weight="medium" className="text-white" size="5">
            Dashboard
          </Text>
        </div>
        <Menu
          className="mt-6"
          menuItemStyles={{
            button: {
              backgroundColor: "#040c4a",
              "&:hover": {
                backgroundColor: "#4f75ff",
              },
            },
          }}
        >
          <MenuItem className="">
            <Link to={"/dashboard"}>
              <div className="flex flex-row items-center">
                <HexagonIcon className="mr-2" size="30" color="#ffffff" />
                {/* <Text weight="medium" className="text-white" size="6"> */}
                Dashboard
                {/* </Text> */}
              </div>
            </Link>
          </MenuItem>
          <SubMenu
            label="Product"
            icon={
              <ShoppingCartIcon className="mr-2" size="50" color="#ffffff" />
            }
          >
            <MenuItem> Product A </MenuItem>
            <MenuItem> Product B </MenuItem>
          </SubMenu>
          <SubMenu
            label="Customer"
            icon={<UserIcon className="mr-2" size="50" color="#ffffff" />}
          >
            <MenuItem> Customer A </MenuItem>
            <MenuItem> Customer B </MenuItem>
          </SubMenu>
          <SubMenu
            label="Income"
            icon={<DollarSignIcon className="mr-2" size="50" color="#ffffff" />}
          >
            <MenuItem> Income Panel A </MenuItem>
            <MenuItem> Income Panel B </MenuItem>
          </SubMenu>
          <SubMenu
            label="Promote"
            icon={<PercentIcon className="mr-2" size="50" color="#ffffff" />}
          >
            <MenuItem> Promotion A </MenuItem>
            <MenuItem> Promotion B </MenuItem>
          </SubMenu>
          <SubMenu
            label="Help"
            icon={<BadgeHelpIcon className="mr-2" size="50" color="#ffffff" />}
          >
            <MenuItem> Question 1 </MenuItem>
            <MenuItem> Question 2 </MenuItem>
          </SubMenu>
        </Menu>
        <div
          className="h-[50px] w-[90%] m-auto rounded-md absolute bottom-10 left-2 right-2 flex flex-row items-center"
          style={{ backgroundColor: "#4f75ff" }}
        >
          <Avatar
            className="ml-2"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
            fallback="A"
          />
          <div className="flex flex-col ml-2">
            <Text weight="medium" size="1">
              Evana
            </Text>
            <Text weight="light" size="1">
              Project Manager
            </Text>
          </div>
          <ChevronDownIcon size="20" className="ml-auto mr-4" />
        </div>
      </Sidebar>
      <Outlet />
    </div>
  );
}
