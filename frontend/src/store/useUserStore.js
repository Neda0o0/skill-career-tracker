import { create } from "zustand";

/* ------------------------------------------------------------------
   Mock API
   بعداً فقط این بخش را با API واقعی جایگزین می‌کنی
------------------------------------------------------------------- */

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

/* ------------------------------------------------------------------
   Store
------------------------------------------------------------------- */

export const useUserStore = create((set, get) => ({
  /* --------------------------- State --------------------------- */

  profile: null,
  loading: false,
  error: null,

  /* ------------------------ Actions ---------------------------- */

  /* Fetch user profile */
  fetchProfile: async () => {
    // جلوگیری از fetch دوباره
    if (get().profile) return;

    try {
      set({ loading: true, error: null });
      const data = await mockFetchProfile();
      set({ profile: data });
    } catch (err) {
      console.error(err);
      set({ error: "Failed to load profile" });
    } finally {
      set({ loading: false });
    }
  },

  /* Update profile fields (optimistic + rollback) */
  updateProfile: async (partialData) => {
    const prevProfile = get().profile;

    if (!prevProfile) return;

    try {
      // optimistic update
      set({
        profile: {
          ...prevProfile,
          ...partialData,
        },
        error: null,
      });

      // TODO:
      // await api.updateProfile(partialData);
    } catch (err) {
      console.error(err);

      // rollback واقعی
      set({
        profile: prevProfile,
        error: "Failed to update profile",
      });
    }
  },

  /* Update avatar */
  updateAvatar: async (avatarUrl) => {
    const prevProfile = get().profile;

    if (!prevProfile) return;

    try {
      set({
        profile: {
          ...prevProfile,
          avatar: avatarUrl,
        },
        error: null,
      });

      // TODO:
      // await api.uploadAvatar(avatarFile);
    } catch (err) {
      console.error(err);

      set({
        profile: prevProfile,
        error: "Failed to update avatar",
      });
    }
  },

  /* Reset store (logout, token expire, etc...) */
  resetProfile: () => {
    set({
      profile: null,
      loading: false,
      error: null,
    });
  },
}));
