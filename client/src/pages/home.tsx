import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Activity, Component, HomeIcon, Mail, Package } from "lucide-react";
import { Link } from "wouter";
import { Waves } from "@/components/ui/waves-background";

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
    title: "Reviews",
    icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/components",
  },
  {
    title: "Activity",
    icon: <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/activity",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#030303]">
      <Waves
        lineColor="rgba(255, 255, 255, 0.1)"
        backgroundColor="transparent"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="absolute top-4 left-1/2 max-w-full -translate-x-1/2">
          <Dock className="items-end pb-3">
            {navigationItems.map((item, idx) => (
              <Link key={idx} href={item.href}>
                <DockItem className="aspect-square rounded-full bg-neutral-800/20 backdrop-blur-sm hover:bg-neutral-700/30">
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