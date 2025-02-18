// src/components/DrawingBoard.tsx
import React, { useRef, useState, useEffect } from 'react';

const Drawing: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [brushColor, setBrushColor] = useState('#000000');
  const [brushSize, setBrushSize] = useState(5);

  // Start drawing when mouse is down
  const startDrawing = (e: React.MouseEvent) => {
    setIsDrawing(true);
    draw(e);
  };

  // Stop drawing when mouse is up or leaves the canvas
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  // Draw on canvas while the mouse is moving
  const draw = (e: React.MouseEvent) => {
    const canvas = canvasRef.current;
    if (!canvas || !isDrawing) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.strokeStyle = brushColor;
    ctx.lineWidth = brushSize;
    ctx.lineCap = 'round'; 
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  // Resize canvas on window resize
  const handleResize = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth * 0.8;
      canvas.height = window.innerHeight * 0.6;
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Set initial size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Clear the canvas when the Clear button is clicked
  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clears the entire canvas
    }
  };

  // Save the drawing as an image when the Save button is clicked
  const saveDrawing = () => {
    const canvas = canvasRef.current;
    const image = canvas?.toDataURL('image/png');
    if (image) {
      // Create a download link and trigger the download
      const link = document.createElement('a');
      link.href = image;
      link.download = 'drawing.png';
      link.click();
    }
  };

  return (
    <div className="flex justify-center items-center flex-col w-full h-screen bg-gray-200">
      <div className="mb-4 space-x-4">
        <button
          onClick={clearCanvas}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Clear
        </button>
        <button
          onClick={saveDrawing}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Save
        </button>
      </div>

      <div className="mb-4 space-x-4">
        <input
          type="color"
          value={brushColor}
          onChange={(e) => setBrushColor(e.target.value)}
          className="cursor-pointer"
        />
        <input
          type="range"
          min="1"
          max="50"
          value={brushSize}
          onChange={(e) => setBrushSize(parseInt(e.target.value))}
          className="cursor-pointer"
        />
      </div>

      <canvas
        ref={canvasRef}
        className="border-2 border-gray-400"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default Drawing;
