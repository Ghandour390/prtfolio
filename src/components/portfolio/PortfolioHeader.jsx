import React from 'react';

const PortfolioHeader = ({ user }) => {
  return (
    <header className="relative w-full h-64 md:h-80 overflow-hidden">
      {user?.cover ? (
        <img src={user.cover} alt="cover" className="w-full h-full object-cover opacity-90" />
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-[#1A1A1A] to-[#0D0D0D]" />
      )}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute left-6 bottom-6 flex items-center gap-6">
        <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-[#F5B301] shadow-xl bg-[#0D0D0D]">
          {user?.image ? (
            <img src={user.image} alt="avatar" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-[#0D0D0D] bg-[#F5B301] font-bold">{(user?.nom?.[0] || '') + (user?.prenom?.[0] || '')}</div>
          )}
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">{user?.prenom} {user?.nom}</h1>
          <p className="text-sm text-gray-300">{user?.adresse}</p>
        </div>
      </div>
    </header>
  );
};

export default PortfolioHeader;
