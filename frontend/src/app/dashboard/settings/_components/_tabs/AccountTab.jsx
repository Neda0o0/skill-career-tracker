const AccountTab = () => {
  return <div>Enter</div>;
};

export default AccountTab;

// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Button from "@/components/ui/Button";

// /* ------------------------ Validation Schema ------------------------ */

// const passwordSchema = z
//   .object({
//     currentPassword: z.string().min(6, "Current password is required"),
//     newPassword: z.string().min(8, "New password must be at least 8 characters"),
//     confirmPassword: z.string().min(8, "Confirm your new password"),
//   })
//   .refine((data) => data.newPassword === data.confirmPassword, {
//     message: "Passwords do not match",
//     path: ["confirmPassword"],
//   });

// /* ------------------------ Component ------------------------ */

// const AccountTab = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//     reset,
//   } = useForm({
//     resolver: zodResolver(passwordSchema),
//     defaultValues: {
//       currentPassword: "",
//       newPassword: "",
//       confirmPassword: "",
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       console.log("Change Password:", data);

//       // TODO:
//       // await api.changePassword(data);

//       alert("Password updated successfully");
//       reset();
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <div className="space-y-10 max-w-xl">
//       {/* Change Password */}
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
//         <h2 className="text-lg font-semibold">Change Password</h2>

//         {/* Current Password */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Current Password
//           </label>
//           <input
//             type="password"
//             {...register("currentPassword")}
//             className="w-full border rounded-md px-3 py-2"
//           />
//           {errors.currentPassword && (
//             <p className="text-sm text-red-500 mt-1">
//               {errors.currentPassword.message}
//             </p>
//           )}
//         </div>

//         {/* New Password */}
//         <div>
//           <label className="block text-sm font-medium mb-1">New Password</label>
//           <input
//             type="password"
//             {...register("newPassword")}
//             className="w-full border rounded-md px-3 py-2"
//           />
//           {errors.newPassword && (
//             <p className="text-sm text-red-500 mt-1">
//               {errors.newPassword.message}
//             </p>
//           )}
//         </div>

//         {/* Confirm Password */}
//         <div>
//           <label className="block text-sm font-medium mb-1">
//             Confirm Password
//           </label>
//           <input
//             type="password"
//             {...register("confirmPassword")}
//             className="w-full border rounded-md px-3 py-2"
//           />
//           {errors.confirmPassword && (
//             <p className="text-sm text-red-500 mt-1">
//               {errors.confirmPassword.message}
//             </p>
//           )}
//         </div>

//         <div className="flex justify-end">
//           <Button disabled={isSubmitting}>
//             {isSubmitting ? "Saving..." : "Update Password"}
//           </Button>
//         </div>
//       </form>

//       {/* Danger Zone */}
//       <div className="border-t pt-6">
//         <h2 className="text-lg font-semibold text-red-600 mb-2">
//           Danger Zone
//         </h2>

//         <div className="flex gap-3">
//           <Button
//             variant="outline"
//             onClick={() => alert("Logout all sessions")}
//           >
//             Logout All Sessions
//           </Button>

//           <Button
//             variant="destructive"
//             onClick={() => {
//               const confirmed = confirm(
//                 "Are you sure you want to delete your account? This action cannot be undone."
//               );
//               if (confirmed) {
//                 alert("Account deleted");
//               }
//             }}
//           >
//             Delete Account
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountTab;
