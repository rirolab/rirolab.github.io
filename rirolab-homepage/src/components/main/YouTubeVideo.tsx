import React from 'react';

interface YouTubeVideoProps {
  src: string;
  title: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ src, title }): React.JSX.Element => {
  return (
    <div className="text-center">
      {' '}
      {/* 컨테이너 div 추가, 캡션을 중앙 정렬하기 위해 */}
      <iframe
        className="w-full aspect-video"
        src={src}
        title={`Youtube Video for ${title}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      <p className="mt-2 text-sm md:text-base">{title}</p>
    </div>
  );
};

export default YouTubeVideo;
