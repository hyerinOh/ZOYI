import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure } from "enzyme";
import { shallow, mount } from "enzyme";
import AppComponent from "../client/components/AppComponent";
import SearchBar from "../client/components/SearchBar";
configure({ adapter: new Adapter() });

const initialState = {
  searchValue: "asia",
  countryNameSorting: "asc",
  countryCodeSorting: "asc",
  countryCallingCodeSorting: "asc",
  countryCapitalSorting: "asc",
  countryRegionSorting: "asc",
  countryLists: [
    {
      name: "Korea",
      alpha2Code: "KR",
      callingCoes: ["82"],
      capital: "seoul",
      region: "Asia"
    }
  ]
};

describe("<AppComponent />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<AppComponent {...initialState} />);
  });

  it("should render a one <div>", () => {
    expect(wrapper.find("div.mainWrapper").to.have.lengthOf(1));
  });
});
