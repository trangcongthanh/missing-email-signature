import { pretty, render } from "@react-email/render";
import { Signature2025 } from "~/templates/signature-2025";
import { CopyToClipboard } from "./components/copy-to-clipboard";

type Props = {
	searchParams: Promise<Record<string, any>>;
};

export default async function Home(props: Props) {
	const searchParams = await props.searchParams;

	const name = searchParams.name ?? "Thanh Trang";
	const title = searchParams.title ?? "Senior Bug Breader";
	const phoneNumber = searchParams.phone ?? "+84 981 244 981";
	const email = searchParams.email ?? "thanhtc@missingcorner.com";

	const content = await pretty(
		await render(
			<Signature2025
				name={name}
				title={title}
				phoneNumber={phoneNumber}
				email={email}
			/>,
		),
	);
	return (
		<main>
			<form method="GET">
				<input type="text" required name="name" placeholder="Name" />
				<input type="text" required name="title" placeholder="Title" />
				<input type="text" required name="phone" placeholder="Phone Number" />
				<input type="email" required name="email" placeholder="Email" />
				<button>Generate!</button>
			</form>
			<CopyToClipboard content={content} />
			<hr />
			<div dangerouslySetInnerHTML={{ __html: content }} />
		</main>
	);
}
