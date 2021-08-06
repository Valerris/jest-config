import React from "react"
import Cmp from "../Cmp"
import { shallow } from "enzyme"

describe("Sample: ", () => {
	test("Cmp", () => {
		const wrapper = shallow(<Cmp />)

		expect(wrapper).toMatchSnapshot()
	})
})
