// pages/Equipments.tsx

import React from 'react';
import Equipment from 'src/components/research/Equipments';

export default function Equipments(): JSX.Element {
  const equipmentData = [
    { id: 1, image: '/images/equipment/haetae.png', name: 'HAETAE (SUMMIT-XL STEEL + UR5e)', type: 'Mobile Manipulator' },
    { id: 2, image: '/images/equipment/stretch.jpg', name: 'Hello-Robot Stretch II', type: 'Mobile Manipulator' },
    { id: 3, image: '/images/equipment/turtlebot.png', name: 'Turtlebot3', type: 'Mobile Manipulator' },

    { id: 4, image: '/images/equipment/pandaf.jpg', name: 'Franka Emika Panda', type: 'Manipulator' },
    { id: 5, image: '/images/equipment/shadow.png', name: 'Shadow Dexterous Hand Lite', type: 'Multifinger Robotic Hand' },
    { id: 6, image: '/images/equipment/glove.png', name: 'Sense Glove DK1', type: 'Exoskeleton Glove' },

    { id: 7, image: '/images/equipment/spot.png', name: 'Boston Dynamics Spot', type: 'Quadruped Robot' },
    { id: 8, image: '/images/equipment/rbq.png', name: 'Rainbow Robotics RBQ3', type: 'Quadruped Robot' },
  ];

  return (
    <div className="w-full py-10 flex flex-col items-center gap-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-6xl">
        {equipmentData.map((equipment) => (
          <Equipment key={equipment.id} image={equipment.image} name={equipment.name} type={equipment.type} />
        ))}
      </div>
    </div>
  );
}
