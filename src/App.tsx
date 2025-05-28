import MainLayout from "./components/layouts/MainLayout";

export default function App(){
  return <div>
    <MainLayout children={<Test/>}/>
  </div>
}

function Test() {
  return (
    <div>
      test
    </div>
  )
}