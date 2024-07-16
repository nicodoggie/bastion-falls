
import { Drawer } from "flowbite-react";
import { Zola } from "../../types/zola-context";

type DrawerProps = {
  config: Zola.Config
  isOpen: boolean
  onClose: () => void
}

export default function BastionDrawer(props: DrawerProps) {
  const { config, isOpen, onClose } = props;

  return <>
    <Drawer open={isOpen} onClose={onClose}>
      <Drawer.Items>
        <Drawer.Header title={config.title} />
        
      </Drawer.Items>
    </Drawer>
  </>
}