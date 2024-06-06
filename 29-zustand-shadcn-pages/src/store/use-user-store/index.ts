import { auth, db } from "@/config/firebase";
import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";

export interface User {
  uid: string;
  email: string;
  username: string;
}

interface UserStore {
  currentUser: User | null;
  isLoading: boolean;
  fetchUserInfo: (uid: string) => void;
  signOut: () => Promise<void>;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  isLoading: true,
  fetchUserInfo: async (uid: string) => {
    if (!uid) return set({ currentUser: null, isLoading: false });

    try {
      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return set({ currentUser: docSnap.data() as User, isLoading: false });
      } else {
        return set({ currentUser: null, isLoading: false });
      }
    } catch (error) {
      return set({ currentUser: null, isLoading: false });
    }
  },
  signOut: async () => {
    await auth.signOut();
    set({ currentUser: null });
  },
  setUser: (user) => set({ currentUser: user, isLoading: false }),
}));
