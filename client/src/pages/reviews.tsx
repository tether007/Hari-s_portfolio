import { Waves } from "@/components/ui/waves-background";
import { Dock, DockIcon, DockItem, DockLabel } from "@/components/ui/dock";
import { Component, HomeIcon, Mail, Package, Star } from "lucide-react";
import { Link } from "wouter";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

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
    title: "Gallery",
    icon: <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/gallery",
  },
  {
    title: "Reviews",
    icon: <Star className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/reviews",
  },
  {
    title: "Contact",
    icon: <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />,
    href: "/contact",
  },
];

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function ReviewsPage() {
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

      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-white mb-8">Client Reviews</h1>
        <AnimatedTestimonials testimonials={testimonials} autoplay />
      </div>
    </div>
  );
}
