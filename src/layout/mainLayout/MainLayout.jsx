import { Outlet } from "react-router-dom"
import Headers from "../../components/Headers/Header"

const MainLayout = () => {
  return (
    <div>
    <Headers/>

    <Outlet/>
    </div>
  )
}

export default MainLayout