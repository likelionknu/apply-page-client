import { create } from "zustand";

// 1. 프로필 데이터 타입 정의
interface UserProfile {
  name: string;
  phone: string;
  studentId: string;
  department: string;
  grade: number | null;
  status: string;
}

// 2. 스토어 상태 및 액션 타입 정의
interface InfoState {
  profile: UserProfile;
  // 개별 필드 수정 (부분 업데이트)
  setField: (field: keyof UserProfile, value: string | number | null) => void;
  // 전체 프로필 수정
  setProfile: (newProfile: UserProfile) => void;
  // 현재 프로필 데이터 가져오기 (Getter)
  getProfile: () => UserProfile;
  // 초기화
  resetProfile: () => void;
}

const initialProfile: UserProfile = {
  name: "",
  phone: "",
  studentId: "",
  department: "",
  grade: null,
  status: "",
};

const useInfoStore = create<InfoState>((set, get) => ({
  profile: initialProfile,

  // 특정 필드만 한 개씩 바꿀 때 (예: setField('name', '홍길동'))
  setField: (field, value) =>
    set((state) => ({
      profile: { ...state.profile, [field]: value },
    })),

  // 전체를 한꺼번에 바꿀 때
  setProfile: (newProfile) => set({ profile: newProfile }),

  // 현재 값을 가져올 때 (get() 활용)
  getProfile: () => get().profile,

  // 초기화 하고 싶을 때
  resetProfile: () => set({ profile: initialProfile }),
}));

export default useInfoStore;
