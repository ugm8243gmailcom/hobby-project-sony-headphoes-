import Navbar from "@/components/Navbar";
import CanvasSequence from "@/components/CanvasSequence";

export default function Home() {
  return (
    <main className="relative bg-[#050505] min-h-screen text-white font-sans selection:bg-[#0050ff] selection:text-white">
      <Navbar />
      
      {/* Container that provides scroll height */}
      <div className="relative h-[400vh]">
        {/* Sticky Canvas background */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          <CanvasSequence />
        </div>

        {/* Scrollable Content Overlay */}
        <div className="relative z-10 h-full w-full pointer-events-none">
          
          {/* Section 1: Hero (0-15%) */}
          <section className="h-[100vh] flex flex-col items-center justify-end pb-32 px-6">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-center">
              Sony WH-1000XM6
            </h1>
            <h2 className="text-2xl md:text-3xl text-white/90 font-medium mb-4 text-center">
              Silence, perfected.
            </h2>
            <p className="text-white/60 max-w-lg text-center text-lg">
              Flagship wireless noise cancelling, re-engineered for a world that never stops.
            </p>
          </section>

          {/* Section 2: Engineering Reveal (15-40%) */}
          <section className="h-[100vh] flex flex-col items-start justify-center px-6 md:px-24">
            <div className="max-w-md pointer-events-auto bg-[#050505]/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00d6ff]/80 pb-2">
                Precision-engineered<br />for silence.
              </h2>
              <p className="text-white/60 text-lg mb-4">
                Custom drivers, sealed acoustic chambers, and optimized airflow deliver studio-grade clarity.
              </p>
              <p className="text-white/60 text-lg">
                Every component is tuned for balance, power, and comfort—hour after hour.
              </p>
            </div>
          </section>

          {/* Section 3 & 4: Noise Cancelling & Sound (40-85%) */}
          <section className="h-[150vh] flex flex-col items-end justify-center px-6 md:px-24">
            <div className="max-w-md pointer-events-auto text-right bg-[#050505]/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl mb-32">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#0050ff]/80 pb-2">
                Adaptive noise<br />cancelling, redefined.
              </h2>
              <ul className="text-white/60 text-lg space-y-4">
                <li>Multi-microphone array listens in every direction.</li>
                <li>Real-time noise analysis adjusts to your environment.</li>
                <li>Your music stays pure—planes, trains, and crowds fade away.</li>
              </ul>
            </div>
            
            <div className="max-w-md pointer-events-auto text-left w-full self-start bg-[#050505]/40 backdrop-blur-md p-8 rounded-2xl border border-white/5 shadow-2xl mt-32">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-[#00d6ff]/80 pb-2">
                Immersive,<br />lifelike sound.
              </h2>
              <p className="text-white/60 text-lg mb-4">
                High-performance drivers unlock detail, depth, and texture in every track.
              </p>
              <p className="text-white/60 text-lg">
                AI-enhanced upscaling restores clarity to compressed audio, so every note feels alive.
              </p>
            </div>
          </section>

          {/* Section 5: Reassembly & CTA (85-100%) */}
          <section className="h-[50vh] flex flex-col items-center justify-end pb-24 px-6">
            <div className="pointer-events-auto text-center bg-[#050505]/40 backdrop-blur-xl p-12 rounded-3xl border border-white/5 shadow-[0_0_50px_rgba(0,80,255,0.05)]">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-white/90">
                Hear everything.<br />Feel nothing else.
              </h2>
              <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">
                WH-1000XM6. Designed for focus, crafted for comfort. Engineered for airports, offices, and everything in between.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="px-8 py-4 bg-gradient-to-r from-[#0050ff] to-[#00d6ff] text-white rounded-full font-semibold text-lg hover:shadow-[0_0_30px_rgba(0,80,255,0.4)] transition-all transform hover:scale-105">
                  Experience WH-1000XM6
                </button>
                <button className="px-8 py-4 text-white/80 hover:text-white font-medium underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all">
                  See full specs
                </button>
              </div>
            </div>
          </section>
          
        </div>
      </div>
    </main>
  );
}
