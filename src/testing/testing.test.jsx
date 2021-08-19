// mocking HTTP requests

import * as React from "react"
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { rest } from "msw"
import { setupServer } from "msw/node"
import Login from "components/testing"
import faker from "faker"

function buildLoginForm(overrides) {
	return {
		username: faker.internet.userName(),
		password: faker.internet.password(),
		...overrides,
	}
}

const server = setupServer(
	rest.post(
		"http://localhost:8080/api/login",
		async (req, res, ctx) => {
			if (!req.body.password) {
				return res(
					ctx.status(400),
					ctx.json({ message: "password required" })
				)
			}
			if (!req.body.username) {
				return res(
					ctx.status(400),
					ctx.json({ message: "username required" })
				)
			}
			return res(ctx.json({ username: req.body.username }))
		}
	)
)

beforeAll(() => server.listen())
afterAll(() => server.close())

test(`logging in displays the user's username`, async () => {
	render(<Login />)
	const { username, password } = buildLoginForm()

	userEvent.type(screen.getByLabelText(/username/i), username)
	userEvent.type(screen.getByLabelText(/password/i), password)
	userEvent.click(screen.getByRole("button", { name: /submit/i }))

	await waitForElementToBeRemoved(
		await screen.getByLabelText(/loading/i)
	)

	screen.debug()

	expect(screen.getByText(username)).toBeInTheDocument()
})
