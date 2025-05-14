import {
	Body,
	Column,
	Head,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Row,
	Tailwind,
	Text,
} from "@react-email/components";

type Props = {
	name: string;
	title: string;
	email: string;
	phoneNumber: string;
};

export function Signature2025({ name, title, email, phoneNumber }: Props) {
	const publicURL = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL
		? `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}`
		: "http://localhost:3000";
	return (
		<Html>
			<Head />
			<Tailwind>
				<Body>
					<Heading as="h3" className="text-lg my-0">
						<strong>{name}</strong>
					</Heading>
					<Text className="italic text-sm my-0">{title}</Text>
					<Text className="text-sm my-0">
						<strong>M</strong>{" "}
						<Link
							href={`tel:${phoneNumber.replaceAll(" ", "")}`}
							className="underline"
						>
							{phoneNumber}
						</Link>
					</Text>
					<Text className="text-sm my-0">
						<strong>E</strong>{" "}
						<Link href={`mailto:${email}`} className="underline">
							{email}
						</Link>
					</Text>
					<Hr />
					<Row>
						<Column>
							<Img src={`${publicURL}/images/2025/logo.png`} width="100" />
							<Text className="text-sm my-0 mt-2">
								<strong>Missing Corner, Ltd.</strong>
							</Text>
							<Text className="text-sm my-0">
								78/5 Duy Tan, Dich Vong Hau, Cau Giay, Hanoi, Vietnam.
							</Text>
							<Text className="text-sm my-0">
								<strong>Missing Corner, Inc.</strong>
							</Text>
							<Text className="text-sm my-0">
								600 N Broad St, Ste 5, Middletown, DE 19709, USA.
							</Text>
						</Column>
						<Column>
							<Img src={`${publicURL}/images/2025/vision.png`} width="100" />
						</Column>
					</Row>
				</Body>
			</Tailwind>
		</Html>
	);
}
