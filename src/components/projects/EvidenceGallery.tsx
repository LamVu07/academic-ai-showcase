import { useState } from "react";
import { ChevronDown, Image as ImageIcon, Video } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export interface MediaItem {
  type: "image" | "video";
  label: string;
  caption: string;
}

interface EvidenceGalleryProps {
  items: MediaItem[];
  defaultOpen?: boolean;
}

const EvidenceGallery = ({ items, defaultOpen = false }: EvidenceGalleryProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const imageCount = items.filter(item => item.type === "image").length;
  const videoCount = items.filter(item => item.type === "video").length;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
      <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-section-bg rounded-lg hover:bg-muted transition-colors group">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-caption">
            {imageCount > 0 && (
              <span className="flex items-center gap-1">
                <ImageIcon className="w-4 h-4" />
                {imageCount} hình ảnh
              </span>
            )}
            {imageCount > 0 && videoCount > 0 && (
              <span className="text-border">•</span>
            )}
            {videoCount > 0 && (
              <span className="flex items-center gap-1">
                <Video className="w-4 h-4" />
                {videoCount} video
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium text-primary">
          <span>{isOpen ? "Thu gọn" : "Xem minh chứng"}</span>
          <ChevronDown 
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} 
          />
        </div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="pt-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <figure key={index} className="space-y-2">
              {item.type === "image" ? (
                <PlaceholderImage label={item.label} height="h-40" />
              ) : (
                <div className="bg-section-bg rounded-lg flex items-center justify-center h-40">
                  <div className="text-center p-4">
                    <Video className="w-10 h-10 mx-auto mb-2 text-muted-foreground/50" />
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                  </div>
                </div>
              )}
              <figcaption className="text-xs text-caption italic text-center px-2">
                <span className="font-medium text-heading">Hình {index + 1}.</span> {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default EvidenceGallery;
