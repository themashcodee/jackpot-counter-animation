export const counter_code = `import React, { ComponentPropsWithoutRef, useEffect, useState } from "react"

type Props = {
	value: number
	/**
	 * The speed of the animation in milliseconds. Defaults to 500.
	 */
	speed?: number
	containerProps?: ComponentPropsWithoutRef<"div">
	slotProps?: ComponentPropsWithoutRef<"div">
	stripeItemProps?: ComponentPropsWithoutRef<"div">
}

const digits = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
]

/**
 * A counter component that displays a number in a digital format and animates the change like a jackpot machine.
 * Only supports 26 digits.
 */
export const Counter = (props: Props) => {
	const {
		value,
		containerProps = {},
		slotProps = {},
		stripeItemProps = {},
		speed = 500,
	} = props

	const { style: containerStyle = {}, ...containerPropsToFwd } = containerProps

	return (
		<div
			style={{
				display: "flex",
				gap: "0.5rem",
				...containerStyle,
			}}
			{...containerPropsToFwd}
		>
			{digits.map((place, index) => {
				const digit_string = value.toString().split("")[index]
				if (!digit_string) return null
				const digit = parseInt(digit_string)

				return (
					<Slot
						key={place}
						number={digit}
						speed={speed}
						slotProps={slotProps}
						stripeItemProps={stripeItemProps}
					/>
				)
			})}
		</div>
	)
}

type NumberStripProps = {
	slotProps: ComponentPropsWithoutRef<"div">
	stripeItemProps: ComponentPropsWithoutRef<"div">
	number: number
	speed: number
}

const Slot = (props: NumberStripProps) => {
	const { number, speed, slotProps, stripeItemProps } = props
	const [transform, setTransform] = useState(0)
	const { style: slotStyle = {}, ...slotPropsToFwd } = slotProps

	useEffect(() => {
		setTransform(number * 10)
	}, [number])

	return (
		<div
			style={{
				height: "2rem",
				width: "2rem",
				outline: "1px solid black",
				overflow: "hidden",
				...slotStyle,
			}}
			{...slotPropsToFwd}
		>
			<div
				style={{
					transitionProperty: "transform",
					transform: \`translateY(-\${transform}%)\`,
					transitionDuration: \`\${speed}ms\`,
					display: "flex",
					flexDirection: "column",
				}}
			>
				<StripeItem properties={stripeItemProps} number={0} />
				<StripeItem properties={stripeItemProps} number={1} />
				<StripeItem properties={stripeItemProps} number={2} />
				<StripeItem properties={stripeItemProps} number={3} />
				<StripeItem properties={stripeItemProps} number={4} />
				<StripeItem properties={stripeItemProps} number={5} />
				<StripeItem properties={stripeItemProps} number={6} />
				<StripeItem properties={stripeItemProps} number={7} />
				<StripeItem properties={stripeItemProps} number={8} />
				<StripeItem properties={stripeItemProps} number={9} />
			</div>
		</div>
	)
}

type StripeItemProps = {
	number: number
	properties: ComponentPropsWithoutRef<"div">
}
const StripeItem = (props: StripeItemProps) => {
	const { number, properties } = props
	const { style = {}, ...propToFwd } = properties

	return (
		<div
			style={{
				textAlign: "center",
				height: "2rem",
				width: "2rem",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				...style,
			}}
			{...propToFwd}
		>
			{number}
		</div>
	)
}
`
