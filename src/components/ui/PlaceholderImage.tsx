import { ImageIcon } from "lucide-react";

interface PlaceholderImageProps {
  label: string;
  height?: string;
}

const PlaceholderImage = ({ label, height = "h-48" }: PlaceholderImageProps) => {
  return (
    <div className={`placeholder-image ${height}`}>
      <div className="text-center p-4">
        <ImageIcon className="w-10 h-10 mx-auto mb-2 text-muted-foreground/50" />
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
};

export default PlaceholderImage;
