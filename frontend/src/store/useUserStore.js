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

  /* Update profile fields (name, email, etc...) */
  updateProfile: async (partialData) => {
    try {
      // Optimistic Update
      set((state) => ({
        profile: {
          ...state.profile,
          ...partialData,
        },
      }));

      // TODO:
      // await api.updateProfile(partialData);
    } catch (err) {
      console.error(err);
      set({ error: "Failed to update profile" });

      // Optional:
      // rollback using get().profile snapshot if needed
    }
  },

  /* Update avatar */
  updateAvatar: async (avatarUrl) => {
    try {
      set((state) => ({
        profile: {
          ...state.profile,
          avatar: avatarUrl,
        },
      }));

      // TODO:
      // await api.uploadAvatar(avatarFile);
    } catch (err) {
      console.error(err);
      set({ error: "Failed to update avatar" });
    }
  },

  /* Reset store (logout, etc...) */
  resetProfile: () => {
    set({
      profile: null,
      loading: false,
      error: null,
    });
  },
}));
