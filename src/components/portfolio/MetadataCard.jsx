import React from 'react';

const MetadataCard = ({ user }) => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A]">
      <h3 className="text-lg font-semibold text-[#F5B301] mb-2">Metadata</h3>
      <p className="text-gray-300">Joined: {user?.createdAt}</p>
      <p className="text-gray-300">Updated: {user?.updatedAt}</p>
    </div>
  );
};

export default MetadataCard;
