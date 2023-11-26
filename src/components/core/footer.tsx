import React, { useRef, useState } from "react"
import { counter_code } from "./code"

type TimeoutType = ReturnType<typeof setTimeout>

export const Footer = () => {
	const ref = useRef<TimeoutType | null>(null)
	const [copied, setCopied] = useState(false)

	const handleCopy = () => {
		navigator.clipboard.writeText(counter_code)
		setCopied(true)

		if (ref.current) {
			clearTimeout(ref.current)
		}

		ref.current = setTimeout(() => {
			setCopied(false)
		}, 1000)
	}

	return (
		<div className="flex items-center gap-4 md:flex-row flex-col">
			<a
				className="bg-[#010409] px-4 py-2 rounded-md text-white flex items-center gap-2"
				href="https://github.com/themashcodee/jackpot-counter-animation"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					className="w-4"
				>
					<path
						fill="currentColor"
						d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"
					></path>
				</svg>
				<span>View above counter code</span>
			</a>
			<button
				className="flex items-center gap-2 px-4 py-2 rounded-md text-white bg-[#4444FF]"
				onClick={() => {
					handleCopy()
				}}
			>
				{!copied && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fillRule="evenodd"
						strokeLinejoin="round"
						strokeMiterlimit="2"
						clipRule="evenodd"
						viewBox="0 0 24 24"
						className="w-4"
					>
						<path
							fillRule="nonzero"
							fill="currentColor"
							d="M6 19v2c0 .621.52 1 1 1h2v-1.5H7.5V19zm7.5 3H10v-1.5h3.5zm4.5 0h-3.5v-1.5H18zm4-3h-1.5v1.5H19V22h2c.478 0 1-.379 1-1zm-1.5-1v-3.363H22V18zm0-4.363V10H22v3.637zM7.5 10v3.637H6V10zM19 6v1.5h1.5V9H22V7c0-.478-.379-1-1-1zM9 6H7c-.62 0-1 .519-1 1v2h1.5V7.5H9zm4.5 1.5H10V6h3.5zm3-1.5V3.5h-13v13H6v-1.863h1.5V18H3c-.48 0-1-.379-1-1V3c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v4.5h-3.5V6z"
						></path>
					</svg>
				)}

				{copied && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fillRule="evenodd"
						strokeLinejoin="round"
						strokeMiterlimit="2"
						clipRule="evenodd"
						viewBox="0 0 24 24"
						className="w-4"
					>
						<path
							fillRule="nonzero"
							fill="currentColor"
							d="M2.25 12.321l7.27 6.491a.749.749 0 001.058-.059l11.23-12.501a.748.748 0 10-1.116-1.001L9.961 17.196 3.25 11.202a.748.748 0 10-1 1.119"
						></path>
					</svg>
				)}

				<span>Copy unstyled raw code</span>
			</button>
		</div>
	)
}
