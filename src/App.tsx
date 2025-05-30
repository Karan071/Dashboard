import MainLayout from "./components/layouts/MainLayout";
import { StatsCards } from "@/components/application-component/stats-cards"
export default function App(){
  return <div>
    <MainLayout children={<Test/>}/>
  </div>
}

function Test() {
  return (
    <div>
      <StatsCards/>
      <StatsCards/>
      <StatsCards/>
      <StatsCards/>
      <StatsCards/>
      <StatsCards/> 
    </div>
  )
}