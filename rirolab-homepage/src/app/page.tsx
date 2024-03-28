import Image from 'next/image';
import React from 'react';
import YouTubeVideo from 'src/components/main/YouTubeVideo';
import NewsList from 'src/components/main/NewsList';

export default function Home(): React.JSX.Element {
  return (
    <div>
      {/* Cover Image Section */}
      <div className="w-screen bg-black relative">
        <div className="relative w-full h-[240px] md:w-3/5 sm:h-[432px] md:min-w-[768px] md:max-w-[1080px] mx-auto flex justify-center items-center">
          <Image
            src="/images/main/cover_image.png"
            alt="Cover Image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold">RIRO Lab</h2>
          <br />
          <br />
          <p className="text-lg md:text-2xl italic">Robust Intelligence and Robotics Laboratory</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full md:w-3/5 md:min-w-[768px] md:max-w-[1080px] mx-auto px-4 py-10 flex flex-col items-center gap-y-12">
        {/* Headline Section */}
        <div>
          <h1 className="leading-custom">
            The{' '}
            <span className="text-mainColor font-bold">
              Robust Intelligence & Robotics (RIRO) Laboratory
            </span>{' '}
            is part of the School of Computing at Korea Advanced Institute of Science and Technology
            (KAIST). Our vision is to empower robots to be trusted collaborators in every part of
            our society by introducing novel learning, reasoning, and execution capabilities.
          </h1>
        </div>

        {/* Selected Experiment Videos Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Selected experiment videos!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <YouTubeVideo
              title="Dohyun Kim et al. | AAAI 2024"
              src="https://www.youtube.com/embed/3rxoNUZeot8?si=Vv4fSnUnhK2qdxzm"
            />
            <YouTubeVideo
              title="Jaehwi Jang et al. | IEEE RA-L 2023"
              src="https://www.youtube.com/embed/SD9HV1z5owk?si=qv8YfcRZtQpltPzE"
            />
            <YouTubeVideo
              title="Yeseung Kim et al. | IEEE RA-L (IROS) 2022"
              src="https://www.youtube.com/embed/QIBt6AR9KmI?si=-qKV5Wvczll-IE5y"
            />
            <YouTubeVideo
              title="Daehyung Park et al. | IEEE ICRA 2021"
              src="https://www.youtube.com/embed/lPpMVfBzZH0?si=ku-kGTKENaiMHBoA"
            />
          </div>
        </div>

        {/* Selected talk/presentation Videos Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Selected talk/presentation videos!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <YouTubeVideo
              title="RSS 2023: Workshop on Articulate Robots"
              src="https://www.youtube.com/embed/vhvYRXtfD_I?si=cYgG_R2ljBFCUxmY"
            />
            <YouTubeVideo
              title="MERRIC Webinar 2021: Human-Centered Robotics"
              src="https://www.youtube.com/embed/1cxjwGZ-dDY?si=w_KWe038CrC_Kuvk"
            />
          </div>
        </div>

        {/* News Section */}
        <div className="w-full">
          <h2 className="text-2xl font-bold mb-4">Recent news</h2>
          <NewsList />
        </div>
      </div>
    </div>
  );
}
