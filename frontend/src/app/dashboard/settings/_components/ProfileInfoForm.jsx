"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import { useUserStore } from "@/store/useUserStore";

const ProfileInfoForm = () => {
  const { profile, updateProfile } = useUserStore();

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
  });

  /* Sync form when profile changes */
  useEffect(() => {
    if (profile) {
      reset({
        name: profile.name,
        email: profile.email,
      });
    }
  }, [profile, reset]);

  const onSubmit = async (data) => {
    await updateProfile(data);
    alert("Profile updated successfully");
  };

  if (!profile) return null;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-md">
      {/* Name */}
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          {...register("name", { required: true, minLength: 3 })}
          className="w-full border rounded-md px-3 py-2"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          {...register("email", { required: true })}
          className="w-full border rounded-md px-3 py-2"
          placeholder="example@email.com"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Saving..." : "Save"}
        </Button>
      </div>
    </form>
  );
};

export default ProfileInfoForm;
