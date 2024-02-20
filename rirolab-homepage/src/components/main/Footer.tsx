import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const Footer: React.FC = () => {
  return (
    <footer className="w-full min-h-[400px] bg-mainColor">
      <div className="w-full min-h-[400px] md:w-3/5 md:min-w-[768px] md:max-w-[1080px] mx-auto p-4 flex flex-col justify-between text-white">
        {/* About Section */}
        <div>
          <h2 className="font-bold text-lg">About US</h2>
          <div className="mt-2 flex flex-col justify-between gap-3">
            <p>Professor Daehyung Park, Ph.D.</p>
            <p>Robust Intelligence and Robotics Laboratory</p>
            <p>School of Computing, Korea Advanced Institute of Science and Technology (KAIST)</p>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="font-bold text-lg">Contact</h2>
          <div className="mt-2 flex flex-col justify-between gap-3">
            <p>Professor | daehyung@kaist.ac.kr</p>
            <p>Lab Master | dohyun141@kaist.ac.kr</p>
            <p>Homepage Manager | jisang.park@kaist.ac.kr</p>
            <p>
              Room 2429, E3-1 (Dept. of Computer Science B/D) 291 Daehak-ro, Yuseong-gu, Daejeon
              (34141), Korea
            </p>
          </div>
        </div>

        {/* Logo Section */}
        <div className="flex justify-between">
          <div className="relative w-[120px] h-[40px] md:w-[144px] md:h-[48px] flex items-center">
            <Image
              src="/images/main/logo_kaist_white.png"
              alt="KAIST Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="relative w-[120px] h-[40px] md:w-[144px] md:h-[48px] flex items-center">
            <Image
              src="/images/main/logo_rirolab_white.png"
              alt="RIRO Lab Logo"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
