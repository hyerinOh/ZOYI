import React from "react";
import ReactDOM from "react-dom";
import App from "./client/components/AppComponent";

const initialState = {
  searchValue: "",
  countryNameSorting: "asc",
  countryCodeSorting: "asc",
  countryCallingCodeSorting: "asc",
  countryCapitalSorting: "asc",
  countryRegionSorting: "asc",
  countryLists: []
};

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App {...initialState} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
