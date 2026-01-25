const PrivacyTab = () => {
  return <div>Enter</div>;
};

export default PrivacyTab;

// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Button from "@/components/ui/Button";

// /* ------------------------ Validation Schema ------------------------ */

// const privacySchema = z.object({
//   profileVisibility: z.enum(["public", "private", "friends"], {
//     required_error: "Visibility is required",
//   }),
//   showEmail: z.boolean(),
//   allowMessages: z.boolean(),
// });

// /* ------------------------ Component ------------------------ */

// const PrivacyTab = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm({
//     resolver: zodResolver(privacySchema),
//     defaultValues: {
//       profileVisibility: "public",
//       showEmail: false,
//       allowMessages: true,
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       console.log("Privacy Settings:", data);

//       // TODO:
//       // await api.updatePrivacySettings(data);

//       alert("Privacy settings saved");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
//       {/* Profile Visibility */}
//       <div>
//         <label className="block text-sm font-medium mb-1">
//           Profile Visibility
//         </label>

//         <select
//           {...register("profileVisibility")}
//           className="w-full border rounded-md px-3 py-2"
//         >
//           <option value="public">Public</option>
//           <option value="friends">Friends</option>
//           <option value="private">Private</option>
//         </select>
//       </div>

//       {/* Show Email */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("showEmail")} />
//         <span className="text-sm">Show my email to others</span>
//       </div>

//       {/* Allow Messages */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("allowMessages")} />
//         <span className="text-sm">Allow private messages</span>
//       </div>

//       {/* Submit */}
//       <div className="flex justify-end">
//         <Button disabled={isSubmitting}>
//           {isSubmitting ? "Saving..." : "Save Settings"}
//         </Button>
//       </div>
//     </form>
//   );
// };

// export default PrivacyTab;
