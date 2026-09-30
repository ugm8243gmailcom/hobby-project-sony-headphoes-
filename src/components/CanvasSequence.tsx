"use client";

import { useRef, useEffect, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const TOTAL_FRAMES = 300;

export default function CanvasSequence() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { scrollYProgress } = useScroll();
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  // Load all images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const frameNum = i.toString().padStart(3, '0');
      img.src = `/sequence/ezgif-frame-${frameNum}.jpg`;
      
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      
      loadedImages.push(img);
    }
    setImages(loadedImages);
  }, []);

  const drawFrame = (progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas || images.length === 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Map progress to frame index
    let frameIndex = Math.floor(progress * (TOTAL_FRAMES - 1));
    if (frameIndex < 0) frameIndex = 0;
    if (frameIndex >= TOTAL_FRAMES) frameIndex = TOTAL_FRAMES - 1;

    const img = images[frameIndex];
    if (!img || !img.complete) return; // Skip if image not loaded yet

    // Set canvas dimensions to viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#050505"; // Match background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // We want to crop the top and bottom to hide the editor UI and Gemini watermark
    const CROP_TOP_PERCENT = 0.12;    // Crop 12% from top
    const CROP_BOTTOM_PERCENT = 0.12; // Crop 12% from bottom
    
    const sx = 0;
    const sy = img.height * CROP_TOP_PERCENT;
    const sWidth = img.width;
    const sHeight = img.height * (1 - CROP_TOP_PERCENT - CROP_BOTTOM_PERCENT);

    // Calculate aspect ratio fit (cover) based on the CROPPED dimensions
    const scale = Math.max(canvas.width / sWidth, canvas.height / sHeight);
    const x = (canvas.width / 2) - (sWidth / 2) * scale;
    const y = (canvas.height / 2) - (sHeight / 2) * scale;
    
    ctx.drawImage(img, sx, sy, sWidth, sHeight, x, y, sWidth * scale, sHeight * scale);
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    requestAnimationFrame(() => drawFrame(latest));
  });

  // Initial draw and handle resize
  useEffect(() => {
    const handleResize = () => {
      drawFrame(scrollYProgress.get());
    };
    
    // Attempt drawing once images start loading
    drawFrame(scrollYProgress.get());
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, loadedCount]);

  return (
    <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">
      <canvas ref={canvasRef} className="w-full h-full object-cover" />
    </div>
  );
}
