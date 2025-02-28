import { Waves } from "@/components/ui/waves-background";
import { Navigation } from "@/components/ui/navigation";

export default function ContactPage() {
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

      <Navigation />

      <div className="container mx-auto px-4 pt-32">
        <h1 className="text-4xl font-bold text-white mb-8">Contact</h1>
        <p className="text-gray-400">Contact form coming soon...</p>
      </div>
    </div>
  );
}