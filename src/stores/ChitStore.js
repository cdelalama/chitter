import { writable } from "svelte/store";
import { incLike, fetchChits } from "../backend/Api";

function createChitStore() {
	const { subscribe, set, update } = writable([]);
	return {
		subscribe,
		update,
		addNewChit: (newChit) => {
			update((e) => [...e, newChit]);
		},
		likeChit: (id) => {
			update((pastChits) => {
				pastChits.map((chit) => {
					if (chit.id == id) chit.likes += 1;
				});
				incLike(id);
				return pastChits;
			});
		},
			loadChits: async () => {
				let data = await fetchChits();
				set(data);
			}
	};
}

export const ChitStore = createChitStore();
