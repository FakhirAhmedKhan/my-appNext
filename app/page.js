import ToolsKillts from "./pages/Skills/ToolsKillts";
import ProjecPage from "./pages/Projects/page";
import Edupage from "./pages/EduJounery/page";
import Navber from "./pages/NavBar/navber";
import Homepage from "./pages/home/page";
import Toggle from "./Theme/Toggle";

export default function MainApp() {
  return (
    <>
      <Navber />
      <Homepage />
      <ToolsKillts />
      <ProjecPage />
      <Edupage />
      <Toggle />
    </>
  );
}
