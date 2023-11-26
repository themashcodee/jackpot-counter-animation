"use client"
import { useState } from "react"
import { Counter } from "@/components/counter"
import { motion } from "framer-motion"
import { Footer } from "@/components/core"

const speed_options = [
	{ value: 100, label: "100ms" },
	{ value: 200, label: "200ms" },
	{ value: 300, label: "300ms" },
	{ value: 400, label: "400ms" },
	{ value: 500, label: "500ms" },
	{ value: 600, label: "600ms" },
	{ value: 700, label: "700ms" },
	{ value: 800, label: "800ms" },
	{ value: 900, label: "900ms" },
	{ value: 1000, label: "1000ms" },
]

export default function Page() {
	const [count, setCount] = useState(24218)
	const [speed, setSpeed] = useState(500)

	return (
		<main className="flex min-h-screen items-center justify-center p-24 bg-[#00b083]">
			<div className="flex flex-col gap-12 items-center">
				<motion.div
					layout
					className="px-8 py-6 rounded-xl bg-[#fff] flex flex-col gap-6"
					transition={{
						type: "tween",
						duration: 0.1,
					}}
				>
					<p className="text-xl font-semibold">Jackpot Counter Animation</p>

					<Counter
						value={count}
						speed={speed}
						containerProps={{
							style: {
								gap: "1rem",
							},
						}}
						slotProps={{
							className:
								"bg-[#7ac8ad] font-semibold text-white text-3xl rounded-md",
							style: {
								width: "4rem",
								height: "6rem",
								outline: "4px solid #008860",
							},
						}}
						stripeItemProps={{
							style: {
								height: "6rem",
								width: "4rem",
							},
						}}
					/>

					<div className="flex justify-between items-center gap-2">
						<select
							value={speed}
							className="px-2 py-1 rounded"
							onChange={(e) => {
								setSpeed(parseInt(e.target.value))
							}}
						>
							{speed_options.map((option) => {
								return (
									<option value={option.value} key={option.label}>
										{option.label}
									</option>
								)
							})}
						</select>

						<div className="flex items-center gap-2">
							<button
								className="px-4 py-2 rounded-md font-semibold outline-[#008860] text-[#008860] outline-2 outline"
								onClick={() => {
									setCount((prev) => prev + 10)
								}}
							>
								+10
							</button>
							<button
								className="px-4 py-2 rounded-md bg-[#008860] text-white font-semibold"
								onClick={() => {
									const random = Math.floor(Math.random() * 1000000000) + 10000
									setCount(random)
								}}
							>
								Generate
							</button>
						</div>
					</div>
				</motion.div>

				<Footer />
			</div>
		</main>
	)
}
