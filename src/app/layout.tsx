import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
	title: "Jackpot Counter Animation",
	description: "An unstyled jackpot counter animation component",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
