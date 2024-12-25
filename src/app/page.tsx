import { CakeIcon } from "lucide-react";
import FunnelRender from "./_components/FunnelRender";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_40px] min-h-screen font-ubuntu">
      <FunnelRender />
      <footer className="flex items-center justify-center gap-2 bg-gray-200">
        <a
          href="https://github.com"
          className="flex items-center gap-2 text-sm"
        >
          <CakeIcon scale={0.8} /> https://github.com
        </a>
      </footer>
    </div>
  );
}
