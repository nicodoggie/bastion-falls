import { Flowbite } from "flowbite-react";
import SanitizedHTML from "react-sanitized-html";
import BastionNavbar from './components/Navbar/Navbar'
import { Zola } from './types/zola-context'
import BastionDrawer from "./components/Drawer/Drawer";
import { useState } from "react";

function App({context}: {context: Zola.Context}) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Flowbite>
      <BastionNavbar config={context.config} onDrawerToggle={() => setIsDrawerOpen(!isDrawerOpen)} />
      <BastionDrawer config={context.config} isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <SanitizedHTML className="format site-content" html={context.page?.content} />
    </Flowbite>
  )
}

export default App
