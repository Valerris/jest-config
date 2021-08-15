import { render, screen } from "@testing-library/react"
import App from "App"

describe("Sample: ", () => {
	test("test", () => {
		render(<App />)

		expect(true).toBe(true)
	})
})
