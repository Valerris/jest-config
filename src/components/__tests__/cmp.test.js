import React from "react"
import Cmp from "../Cmp"
import { shallow } from "enzyme"
import { expect } from "@jest/globals"

test("Cmp", () => {
	const wrapper = shallow(<Cmp />)

	expect(wrapper).toMatchSnapshot()
})
