import { Button, DarkThemeToggle } from "flowbite-react";
import { Navbar } from "flowbite-react";

import { Zola } from "../../types/zola-context";

type NavbarProps = {
  config: Zola.Config
  onDrawerToggle: () => void
}

export default function BastionNavbar({config, onDrawerToggle}: NavbarProps) {
  return <>
    <Navbar fluid rounded>
      <Button onClick={onDrawerToggle} className="p-2 lg:hidden">X</Button>
      <Navbar.Brand href={config.base_url} >
        <img src={config.extra.logo} className="mr-3 h-10 sm:h-9" alt="Bastion Falls Logo" />
        <span className="self-center text-xl font-bold dark:text-white">{config.title}</span>
      </Navbar.Brand>
      <Navbar.Link href="/">Home</Navbar.Link>
      <Navbar.Link href="/timeline">Timeline</Navbar.Link>
      <Navbar.Link href="/blog">Blog</Navbar.Link>
      <Navbar.Link href="https://github.com/nicodoggie/bastion-falls/issues">To-Do</Navbar.Link>
      <DarkThemeToggle />

    </Navbar>
  </>;
}