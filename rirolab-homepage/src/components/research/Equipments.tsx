// components/Equipment.tsx

import React from 'react';

interface EquipmentProps {
  image: string;
  name: string;
  type: string;
}

const Equipment: React.FC<EquipmentProps> = ({ image, name, type }): React.ReactElement => {
  return (
    <div className="h-100 flex flex-col justify-center items-center">
      <h3 className="text-lg font-bold mt-2">{name}</h3>
      <div className="flex items-center justify-center h-48 w-full">
        <img src={image} alt={name} className="max-h-full max-w-full" />
      </div>
      <p>{type}</p>
    </div>
  );
};

export default Equipment;
