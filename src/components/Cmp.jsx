import React, { useEffect } from "react"
import { ButtonS } from "components/styled"

async function f() {
	const rs = await fetch("/from-cmp")

	const res = await rs.json()

	console.log(res)
}

export default function Cmp() {
	useEffect(() => {
		// f()
	})

	return (
		<div>
			I'm a new Cmp.
			<ButtonS>Click</ButtonS>
		</div>
	)
}
