const ProfileHeaderSkeleton = () => {
  return (
    <div className="animate-pulse flex flex-row gap-10 bg-purple-600/40 rounded-md px-10 py-8">
      <div className="w-16 h-16 rounded-full bg-white/30" />

      <div className="flex-1 space-y-3">
        <div className="h-4 w-40 bg-white/30 rounded" />
        <div className="h-3 w-56 bg-white/20 rounded" />
        <div className="flex gap-6 mt-4">
          <div className="h-8 w-16 bg-white/30 rounded" />
          <div className="h-8 w-16 bg-white/30 rounded" />
          <div className="h-8 w-16 bg-white/30 rounded" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderSkeleton;
