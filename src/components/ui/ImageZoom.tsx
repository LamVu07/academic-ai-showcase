import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface ImageZoomProps {
  src: string;
  alt: string;
  className?: string;
  children?: React.ReactNode;
}

const ImageZoom = ({ src, alt, className, children }: ImageZoomProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsOpen(true)} 
        className="cursor-zoom-in"
      >
        {children}
      </div>
      
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 bg-transparent border-none">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-50 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <img 
            src={src} 
            alt={alt} 
            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageZoom;
