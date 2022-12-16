import { writable } from "svelte/store";

export const ChitStore = writable([
	{
		id: 1,
		author: "Nauman",
		handle: "@recluze",
		content:
			"Does anyone here use an e-ink reader! Is it closer in feel (for the eyes, not fingers) to an iPad or to an actual paper book? And this can go on and on ...",
	},
	{
		id: 2,
		author: "Doc",
		handle: "@recluze",
		content:
			"Does anyone here use an e-ink reader! Is it closer in feel (for the eyes, not fingers) to an iPad or to an actual paper book? And this can go on and on ...",
	},
]);
