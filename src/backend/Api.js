export function fetchChits() {
	console.log("[b] Fetching all chits");

	return [
		{ id: 1, author: "Nauman", handle: "@recluze", content: "First", likes: 0 },
		{ id: 2, author: "Blah", handle: "@recluze", content: "Second", likes: 0 },
	];
}

export function incLike(id) {
	console.log("[b] Incrementing likes", id);
}
