const PersonalTab = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>

      {/* فرم واقعی اینجا می‌آید */}
      <p>فرم اطلاعات شخصی</p>
    </div>
  );
};

export default PersonalTab;

// "use client";

// import { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";

// import Button from "@/components/ui/Button";
// import { useUserStore } from "@/store/useUserStore";

// /* ------------------------ Validation Schema ------------------------ */

// const profileSchema = z.object({
//   fullName: z.string().trim().min(3, "Name must be at least 3 characters"),
//   bio: z.string().max(160, "Bio must be under 160 characters").optional(),
//   skills: z.string().optional(),
//   timezone: z.string().min(1, "Timezone is required"),
//   age: z
//     .number({
//       invalid_type_error: "Age must be a number",
//       required_error: "Age is required",
//     })
//     .min(18, "Minimum age is 18")
//     .max(99, "Maximum age is 99"),
//   website: z
//     .string()
//     .transform((val) => (val?.trim() === "" ? undefined : val))
//     .pipe(z.string().url("Invalid URL format").optional()),
// });

// /* ------------------------ Component ------------------------ */

// const PersonalTab = () => {
//   const { profile, loading, error, fetchProfile, updateProfile } =
//     useUserStore();

//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors, isSubmitting },
//   } = useForm({
//     resolver: zodResolver(profileSchema),
//   });

//   /* Fetch profile on mount */
//   useEffect(() => {
//     if (!profile) {
//       fetchProfile();
//     }
//   }, [profile, fetchProfile]);

//   /* Sync form when profile loaded */
//   useEffect(() => {
//     if (!profile) return;

//     reset({
//       fullName: profile.name ?? "",
//       bio: profile.bio ?? "",
//       skills: profile.skills ?? "",
//       timezone: profile.timezone ?? "",
//       age: profile.age ?? 18,
//       website: profile.website ?? "",
//     });
//   }, [profile, reset]);

//   const onSubmit = async (data) => {
//     try {
//       await updateProfile({
//         name: data.fullName,
//         bio: data.bio,
//         skills: data.skills,
//         timezone: data.timezone,
//         age: data.age,
//         website: data.website,
//       });

//       alert("Profile updated successfully");
//     } catch (err) {
//       console.error(err);
//       alert("Update failed");
//     }
//   };

//   if (loading && !profile) {
//     return <p className="text-sm text-gray-500">Loading profile...</p>;
//   }

//   if (error) {
//     return (
//       <p className="text-sm text-red-500">
//         Failed to load profile: {error}
//       </p>
//     );
//   }

//   if (!profile) return null;

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
//       {/* Full Name */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Full Name</label>
//         <input
//           {...register("fullName")}
//           className="w-full border rounded-md px-3 py-2"
//         />
//         {errors.fullName && (
//           <p className="text-sm text-red-500 mt-1">
//             {errors.fullName.message}
//           </p>
//         )}
//       </div>

//       {/* Age */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Age</label>
//         <input
//           type="number"
//           {...register("age", { valueAsNumber: true })}
//           className="w-full border rounded-md px-3 py-2"
//         />
//         {errors.age && (
//           <p className="text-sm text-red-500 mt-1">{errors.age.message}</p>
//         )}
//       </div>

//       {/* Email (readonly) */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Email</label>
//         <input
//           value={profile.email}
//           disabled
//           className="w-full border rounded-md px-3 py-2 bg-gray-100"
//         />
//       </div>

//       {/* Bio */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Bio</label>
//         <textarea
//           {...register("bio")}
//           rows={3}
//           className="w-full border rounded-md px-3 py-2"
//         />
//         {errors.bio && (
//           <p className="text-sm text-red-500 mt-1">{errors.bio.message}</p>
//         )}
//       </div>

//       {/* Skills */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Skills</label>
//         <input
//           {...register("skills")}
//           className="w-full border rounded-md px-3 py-2"
//         />
//       </div>

//       {/* Timezone */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Timezone</label>
//         <select
//           {...register("timezone")}
//           className="w-full border rounded-md px-3 py-2"
//         >
//           <option value="">Select timezone</option>
//           <option value="UTC+3:30">Iran (UTC+3:30)</option>
//           <option value="UTC+1">Europe (UTC+1)</option>
//           <option value="UTC-5">USA (UTC-5)</option>
//         </select>
//         {errors.timezone && (
//           <p className="text-sm text-red-500 mt-1">
//             {errors.timezone.message}
//           </p>
//         )}
//       </div>

//       {/* Website */}
//       <div>
//         <label className="block text-sm font-medium mb-1">Website</label>
//         <input
//           {...register("website")}
//           className="w-full border rounded-md px-3 py-2"
//         />
//         {errors.website && (
//           <p className="text-sm text-red-500 mt-1">
//             {errors.website.message}
//           </p>
//         )}
//       </div>

//       {/* Submit */}
//       <div className="flex justify-end">
//         <Button disabled={isSubmitting}>
//           {isSubmitting ? "Saving..." : "Save Changes"}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default PersonalTab;
