"use client";

import { useState } from "react";

export function CopyToClipboard({ content }: { content: string }) {
	const [copied, setCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.write([
				new ClipboardItem({
					"text/html": new Blob([content], { type: "text/html" }),
					"text/plain": new Blob([content], { type: "text/plain" }),
				}),
			]);
			setCopied(true);
			setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	return (
		<button
			onClick={handleCopy}
			className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
		>
			{copied ? "Copied!" : "Copy to clipboard!"}
		</button>
	);
}
