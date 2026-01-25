const NotificationsTab = () => {
  return <div>Enter</div>;
};

export default NotificationsTab;

// "use client";

// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import Button from "@/components/ui/Button";

// /* ------------------------ Validation Schema ------------------------ */

// const notificationsSchema = z.object({
//   emailNotifications: z.boolean(),
//   smsNotifications: z.boolean(),
//   pushNotifications: z.boolean(),
//   weeklySummary: z.boolean(),
// });

// /* ------------------------ Component ------------------------ */

// const NotificationsTab = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { isSubmitting },
//   } = useForm({
//     resolver: zodResolver(notificationsSchema),
//     defaultValues: {
//       emailNotifications: true,
//       smsNotifications: false,
//       pushNotifications: true,
//       weeklySummary: true,
//     },
//   });

//   const onSubmit = async (data) => {
//     try {
//       console.log("Notification Settings:", data);

//       // TODO:
//       // await api.updateNotificationSettings(data);

//       alert("Notification settings saved");
//     } catch (error) {
//       console.error(error);
//       alert("Something went wrong");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
//       {/* Email Notifications */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("emailNotifications")} />
//         <span className="text-sm">Receive email notifications</span>
//       </div>

//       {/* SMS Notifications */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("smsNotifications")} />
//         <span className="text-sm">Receive SMS notifications</span>
//       </div>

//       {/* Push Notifications */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("pushNotifications")} />
//         <span className="text-sm">Receive push notifications</span>
//       </div>

//       {/* Weekly Summary */}
//       <div className="flex items-center gap-2">
//         <input type="checkbox" {...register("weeklySummary")} />
//         <span className="text-sm">Receive weekly summary</span>
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

// export default NotificationsTab;
