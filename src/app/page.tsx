import { pretty, render } from "@react-email/render";
import { Signature2025 } from "~/templates/signature-2025";

export default async function Home() {
	const content = await pretty(await render(<Signature2025 />));
	return (
		<main>
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</main>
	);
}
