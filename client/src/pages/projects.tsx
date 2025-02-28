import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";
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
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/contact",
  },
];

const demoFrames = [
  {
    id: 1,
    video: "https://static.cdn-luma.com/files/981e483f71aa764b/Company%20Thing%20Exported.mp4",
    defaultPos: { x: 0, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 2,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/WebGL%20Exported%20(1).mp4",
    defaultPos: { x: 4, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 3,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Jitter%20Exported%20Poster.mp4",
    defaultPos: { x: 8, y: 0, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 4,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Exported%20Web%20Video.mp4",
    defaultPos: { x: 0, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 5,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Logo%20Exported.mp4",
    defaultPos: { x: 4, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 6,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Animation%20Exported%20(4).mp4",
    defaultPos: { x: 8, y: 4, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 7,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Illustration%20Exported%20(1).mp4",
    defaultPos: { x: 0, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 8,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Art%20Direction%20Exported.mp4",
    defaultPos: { x: 4, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
  {
    id: 9,
    video: "https://static.cdn-luma.com/files/58ab7363888153e3/Product%20Video.mp4",
    defaultPos: { x: 8, y: 8, w: 4, h: 4 },
    corner: "",
    edgeHorizontal: "",
    edgeVertical: "",
    mediaSize: 1,
    borderThickness: 16,
    borderSize: 90,
    isHovered: false,
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen w-screen bg-[#030303]">
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

      <div className="pt-24 px-8">
        <div className="w-full max-w-7xl mx-auto h-[calc(100vh-8rem)]">
          <DynamicFrameLayout 
            frames={demoFrames} 
            className="w-full h-full" 
            hoverSize={6}
            gapSize={4}
          />
        </div>
      </div>
    </div>
  );
}