import {
	Body,
	Column,
	Heading,
	Hr,
	Html,
	Img,
	Link,
	Row,
	Tailwind,
	Text,
} from "@react-email/components";

export function Signature2025() {
	const publicURL =
		process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";
	return (
		<Html>
			<Tailwind>
				<Body>
					<Heading as="h3" className="text-lg my-0">
						<strong>Thuy Phung</strong>
					</Heading>
					<Text className="italic text-sm my-0">
						Administrative and HR Officer
					</Text>
					<Text className="text-sm my-0">
						<strong>M</strong>{" "}
						<Link href="tel:0932324388" className="underline">
							+84 932 324 388
						</Link>
					</Text>
					<Text className="text-sm my-0">
						<strong>E</strong>{" "}
						<Link href="mailto:thuypth@missingcorner.com" className="underline">
							thuypth@missingcorner.com
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
