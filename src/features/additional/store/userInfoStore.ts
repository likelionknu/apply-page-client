import { create } from "zustand";

interface UserProfile {
  name: string;
  depart: string;
  grade: number | null;
  phone: string;
  status: string;
  student_id: string;
}

interface InfoState {
  profile: UserProfile;
  setField: (field: keyof UserProfile, value: string | number | null) => void;
  setProfile: (newProfile: UserProfile) => void;
  resetProfile: () => void;
}

const initialProfile: UserProfile = {
  name: "",
  phone: "",
  student_id: "",
  depart: "",
  grade: null,
  status: "",
};

const useInfoStore = create<InfoState>((set, get) => ({
  profile: initialProfile,

  setField: (field, value) =>
    set((state) => ({
      profile: { ...state.profile, [field]: value },
    })),

  setProfile: (newProfile) => set({ profile: newProfile }),

  getProfile: () => get().profile,

  resetProfile: () => set({ profile: initialProfile }),
}));

export default useInfoStore;
