import { writable } from "svelte/store";

function createChitStore() {
	const { subscribe, set, update } = writable([
		{
			id: 1,
			author: "Nauman",
			handle: "@recluze",
			content:
				"Does anyone here use an e-ink reader! Is it closer in feel (for the eyes, not fingers) to an iPad or to an actual paper book? And this can go on and on ...",
			likes: 0,
		},
	]);
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
				})
				return pastChits;
			});
		},
	};
}

export const ChitStore = createChitStore();
