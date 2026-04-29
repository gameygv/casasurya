interface VideoGridProps {
  videos: string[];
}

export default function VideoGrid({ videos }: VideoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {videos.map((video, index) => (
        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
          <video
            src={video}
            controls
            className="w-full h-auto"
            preload="metadata"
          >
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      ))}
    </div>
  );
}
