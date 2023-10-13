import DashboardHeader from "../Component/DashboardHeader";
import GraphData from "../Component/GraphData";
import ProductTable from "../Component/ProductTable";
import QuickCardViewContainer from "../Component/QuickCardViewContainer";

export default function Dashboard() {
  return (
    <div className="w-[100%] xl:py-8 xl:px-24 md:py-4 md:px-4 px-6 py-2 bg-slate-100 overflow-y-auto">
      <DashboardHeader />
      <QuickCardViewContainer />
      <GraphData />
      <ProductTable />
    </div>
  );
}
