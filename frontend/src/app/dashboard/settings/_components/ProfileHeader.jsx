"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/ui/Button";

/* ----------------------------- Mock API ----------------------------- */
/**
 * بعداً فقط کافی است این تابع  با fetch واقعی جایگزین شود.
 */
const mockFetchProfile = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: "user_1",
        name: "Neda Imani",
        email: "example@gmail.com",
        memberSince: 2023,
        avatar: "/images/testimonials/emma.png",
        stats: {
          courses: 12,
          hours: 156,
          certificates: 8,
        },
      });
    }, 800);
  });

/* ---------------------------- Component ----------------------------- */

const ProfileHeader = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  /* --------------------------- Load Profile -------------------------- */

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);
        const data = await mockFetchProfile();
        setProfile(data);
      } catch (err) {
        setError("Failed to load profile");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  /* ------------------------ Avatar Upload Mock ------------------------ */

  const handleAvatarChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      setIsUploading(true);

      // فقط برای demo: پیش‌نمایش تصویر لوکال
      const previewUrl = URL.createObjectURL(file);

      setProfile((prev) => ({
        ...prev,
        avatar: previewUrl,
      }));

      // TODO:
      // const formData = new FormData();
      // formData.append("avatar", file);
      // await api.uploadAvatar(formData);
    } catch (err) {
      console.error(err);
      alert("Avatar upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  /* ------------------------------ States ------------------------------ */

  if (loading) {
    return (
      <div className="bg-purple-600 rounded-md px-10 py-8 text-white">
        Loading profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-500 rounded-md px-10 py-8 text-white">{error}</div>
    );
  }

  if (!profile) return null;

  /* ------------------------------ Render ------------------------------ */

  return (
    <div className="flex flex-row gap-10 bg-purple-600 rounded-md justify-center items-center px-10 py-8 text-white">
      {/* Avatar */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <Image
          src={profile.avatar}
          alt="user avatar"
          width={64}
          height={64}
          className="rounded-full object-cover"
        />

        <label className="relative">
          <input
            type="file"
            accept="image/*"
            hidden
            onChange={handleAvatarChange}
            disabled={isUploading}
          />
          <Button className="text-sm" disabled={isUploading}>
            {isUploading ? "Uploading..." : "Change Photo"}
          </Button>
        </label>
      </div>

      {/* User Info */}
      <div>
        <div>
          <h2 className="text-lg font-semibold">{profile.name}</h2>
          <p>{profile.email}</p>
          <p className="text-sm opacity-90">
            Member since {profile.memberSince}
          </p>
        </div>

        <ul className="flex flex-row gap-8 mt-4">
          <StatItem label="Courses" value={profile.stats.courses} />
          <StatItem label="Hours" value={profile.stats.hours} />
          <StatItem label="Certificates" value={profile.stats.certificates} />
        </ul>
      </div>
    </div>
  );
};

/* ------------------------- Small UI Component ------------------------ */

const StatItem = ({ label, value }) => {
  return (
    <li className="flex flex-col text-center min-w-20">
      <span className="font-semibold text-lg">{value}</span>
      <span className="text-sm opacity-90">{label}</span>
    </li>
  );
};

export default ProfileHeader;

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Button from "@/components/ui/Button";
// import { useUserStore } from "@/store/useUserStore";
// import ProfileHeaderSkeleton from "@/components/ui/ProfileHeaderSkeleton";

// const ProfileHeader = () => {
//   const { profile, loading, error, fetchProfile, updateAvatar } =
//     useUserStore();

//   const [isUploading, setIsUploading] = useState(false);

//   /* ------------------------ Load Profile ------------------------ */
//   useEffect(() => {
//     fetchProfile();
//   }, [fetchProfile]);

//   /* ---------------------- Avatar Upload ------------------------- */
//   const handleAvatarChange = async (e) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     try {
//       setIsUploading(true);

//       // Preview image locally (optimistic UI)
//       const previewUrl = URL.createObjectURL(file);
//       updateAvatar(previewUrl);

//       // TODO:
//       // await api.uploadAvatar(file);
//     } catch (error) {
//       console.error(error);
//       alert("Avatar upload failed");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   /* ------------------------- States ----------------------------- */

//   if (loading) return <ProfileHeaderSkeleton />;

//   if (error) {
//     return (
//       <div className="bg-red-500 rounded-md px-10 py-8 text-white">{error}</div>
//     );
//   }

//   if (!profile) return null;

//   /* -------------------------- Render ---------------------------- */

//   return (
//     <div className="flex flex-row gap-10 bg-purple-600 rounded-md justify-center items-center px-10 py-8 text-white">
//       {/* Avatar */}
//       <div className="flex flex-col gap-4 justify-center items-center">
//         <Image
//           src={profile.avatar}
//           alt="user avatar"
//           width={64}
//           height={64}
//           className="rounded-full object-cover"
//         />

//         <label>
//           <input
//             type="file"
//             hidden
//             accept="image/*"
//             onChange={handleAvatarChange}
//             disabled={isUploading}
//           />

//           <Button className="text-sm" disabled={isUploading}>
//             {isUploading ? "Uploading..." : "Change Photo"}
//           </Button>
//         </label>
//       </div>

//       {/* User Info */}
//       <div>
//         <h2 className="text-lg font-semibold">{profile.name}</h2>
//         <p>{profile.email}</p>
//         <p className="text-sm opacity-90">Member since {profile.memberSince}</p>

//         <ul className="flex flex-row gap-8 mt-4">
//           <Stat label="Courses" value={profile.stats.courses} />
//           <Stat label="Hours" value={profile.stats.hours} />
//           <Stat label="Certificates" value={profile.stats.certificates} />
//         </ul>
//       </div>
//     </div>
//   );
// };

// /* ---------------------- Small UI Component ---------------------- */

// const Stat = ({ label, value }) => {
//   return (
//     <li className="flex flex-col text-center min-w-80">
//       <span className="font-semibold text-lg">{value}</span>
//       <span className="text-sm opacity-90">{label}</span>
//     </li>
//   );
// };

// export default ProfileHeader;
