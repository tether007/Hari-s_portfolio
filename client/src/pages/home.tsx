import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Activity, Component, HomeIcon, Mail, Package, ScrollText, SunMoon } from "lucide-react";
import { Link } from "wouter";

const navigationItems = [
  {
    title: "Home",
    icon: <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/",
  },
  {
    title: "Projects",
    icon: <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/projects",
  },
  {
    title: "Components",
    icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/components",
  },
  {
    title: "Activity",
    icon: <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/activity",
  },
  {
    title: "Change Log",
    icon: <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/changelog",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute top-4 left-1/2 max-w-full -translate-x-1/2">
          <Dock className="items-end pb-3">
            {navigationItems.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <DockItem className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800">
                  <DockLabel>{item.title}</DockLabel>
                  <DockIcon>{item.icon}</DockIcon>
                </DockItem>
              </Link>
            ))}
          </Dock>
        </div>
      </nav>
      
      <HeroGeometric 
        badge="Interactive Portfolio"
        title1="Creative"
        title2="Development Studio"
      />
    </div>
  );
}
