import { render, screen } from "@testing-library/react"
import App from "App"

describe("Sample: ", () => {
	test("test", () => {
		render(<App />)

		screen.debug()

		expect(true).toBe(true)
	})
})
