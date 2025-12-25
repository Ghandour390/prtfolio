import React from 'react';

const ContactCard = ({ user }) => {
  return (
    <div className="bg-[#1A1A1A] p-6 rounded-xl border border-[#2A2A2A]">
      <h3 className="text-lg font-semibold text-[#F5B301] mb-2">Contact</h3>
      <p className="text-gray-300">Email: {user?.email}</p>
      <p className="text-gray-300">Address: {user?.adresse}</p>
      {user?.civi && (
        <p className="text-gray-300">Civi: <a href={user.civi} target="_blank" rel="noreferrer" className="underline">View</a></p>
      )}
      <p className="text-gray-300">Born: {user?.dateNaissance}</p>
    </div>
  );
};

export default ContactCard;
