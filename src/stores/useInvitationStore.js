import { create } from "zustand";
import { informationStore } from "./information-store";
import { backendStore } from "./backend-store";

export const useInvitationStore = create((set, get) => ({
    ...informationStore(set, get),
    ...backendStore(set, get)
}))