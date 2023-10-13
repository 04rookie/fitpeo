import { Text } from "@radix-ui/themes";
import { ArrowDownIcon, ArrowUpIcon } from "@radix-ui/react-icons";
export default function QuickCard({
  color,
  type,
  value,
  percent,
  profit,
  children,
}) {
  return (
    <div className="h-[150px] w-[100%] shadow-md rounded-md min-h-[160px] min-w-[300px] bg-white">
      <div className="flex flex-row h-[100%] w-[100%] p-2">
        <div className="flex flex-row h-[100%] w-[50%] p-4 items-center">
          <div
            className={`h-[100px] w-[100px] rounded-[50%] ${color} flex justify-center items-center`}
          >
            {children}
          </div>
        </div>
        <div className="flex flex-col h-[100%] w-[50%] justify-center items-start pl-2">
          <Text weight="light" size="1">
            {type}
          </Text>
          <Text weight="medium" size="6">
            {value}
          </Text>
          <Text weight="light" size="2">
            <div className="flex flex-row items-center">
              {profit ? (
                <ArrowUpIcon color="green" />
              ) : (
                <ArrowDownIcon color="red" />
              )}
              <span
                className={profit ? "text-green-900 pr-1" : `text-red-600 pr-1`}
              >
                {percent}%
              </span>
              this month
            </div>
          </Text>
        </div>
      </div>
    </div>
  );
}
