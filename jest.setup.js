import Enzyme from "enzyme"
import Adapter from "@wojtekmaj/enzyme-adapter-react-17"
import "@testing-library/jest-dom"
import fetchMock from "jest-fetch-mock"
fetchMock.enableMocks()
fetchMock.dontMock()

Enzyme.configure({ adapter: new Adapter() })
