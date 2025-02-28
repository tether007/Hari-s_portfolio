import { DynamicFrameLayout } from "@/components/ui/dynamic-frame-layout";

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
  // ... rest of the frames
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen w-screen bg-zinc-900 p-8">
      <div className="w-full max-w-7xl mx-auto h-[calc(100vh-4rem)]">
        <DynamicFrameLayout 
          frames={demoFrames} 
          className="w-full h-full" 
          hoverSize={6}
          gapSize={4}
        />
      </div>
    </div>
  );
}
