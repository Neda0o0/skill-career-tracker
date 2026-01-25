// import Button from "@/components/ui/Button";
// import Image from "next/image";
// import SettingsTabs from "@/app/dashboard/settings/_components/SettingsTabs";

// const Settings = () => {
//   return (
//     <section className="max-w-5xl flex justify-center">
//       <div className="w-full flex flex-col gap-5">
//         <h1 className="text-4xl font-medium">My Profile</h1>

//         {/* Header */}
//         <div className="flex flex-row gap-10 bg-purple-600 rounded-md justify-center items-center px-10 py-8 text-white">
//           <div className="flex flex-col gap-4 justify-center items-center">
//             <Image
//               src={"/images/testimonials/emma.png"}
//               alt="user avatar"
//               width={50}
//               height={50}
//               className="rounded-full"
//             />
//             <Button className="text-sm">Change Photo</Button>
//           </div>
//           <div>
//             <div>
//               <h2>Neda Imani</h2>
//               <p>Example@gmail.com</p>
//               <p>Member since 2023</p>
//             </div>
//             <ul className="flex flex-row gap-8">
//               <li className="flex flex-col">
//                 <span>12</span>
//                 <span>Courses</span>
//               </li>
//               <li className="flex flex-col">
//                 <span>156</span>
//                 <span>Hours</span>
//               </li>
//               <li className="flex flex-col">
//                 <span>8</span>
//                 <span>Certificates</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Forms */}
//         <SettingsTabs />
//         {/* buttons */}
//         <div className="flex gap-5 justify-end">
//           <Button>Save Chagnes</Button>
//           <Button variant="primaryOutline">Cancel</Button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Settings;
import Button from "@/components/ui/Button";
import SettingsTabs from "@/app/dashboard/settings/_components/SettingsTabs";
import ProfileHeader from "@/app/dashboard/settings/_components/ProfileHeader";

const Settings = () => {
  return (
    <section className="max-w-5xl flex justify-center">
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-4xl font-medium">My Profile</h1>

        {/* Header */}
        <ProfileHeader />

        {/* Forms */}
        <SettingsTabs />

        {/* Buttons */}
        <div className="flex gap-5 justify-end">
          <Button>Save Changes</Button>
          <Button variant="primaryOutline">Cancel</Button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
