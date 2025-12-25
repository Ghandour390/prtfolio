import React from 'react';

const LoadingSkeleton = ({ type = 'card', count = 1 }) => {
  const CardSkeleton = () => (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 animate-pulse">
      <div className="h-6 bg-[#2A2A2A] rounded w-3/4 mb-4"></div>
      <div className="h-4 bg-[#2A2A2A] rounded w-full mb-2"></div>
      <div className="h-4 bg-[#2A2A2A] rounded w-5/6"></div>
    </div>
  );

  const TableSkeleton = () => (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 animate-pulse">
      <div className="space-y-3">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-12 bg-[#2A2A2A] rounded"></div>
        ))}
      </div>
    </div>
  );

  const StatSkeleton = () => (
    <div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 animate-pulse">
      <div className="flex items-center justify-between">
        <div className="space-y-2 flex-1">
          <div className="h-4 bg-[#2A2A2A] rounded w-1/2"></div>
          <div className="h-8 bg-[#2A2A2A] rounded w-1/3"></div>
        </div>
        <div className="w-12 h-12 bg-[#2A2A2A] rounded-full"></div>
      </div>
    </div>
  );

  const skeletonTypes = {
    card: CardSkeleton,
    table: TableSkeleton,
    stat: StatSkeleton
  };

  const SkeletonComponent = skeletonTypes[type] || CardSkeleton;

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <SkeletonComponent key={i} />
      ))}
    </div>
  );
};

export default LoadingSkeleton;
