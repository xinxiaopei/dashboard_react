import React from "react";
import { shallow, ShallowWrapper } from "enzyme";

import Link from "../Link";

describe("<Link />", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Link url="#">Label</Link>);
  });

  it("renders a single a element", () => {
    expect(wrapper.find("a")).toHaveLength(1);
  });

  it("renders target and rel for external links", () => {
    expect(wrapper.find("a[target][rel]")).toHaveLength(1);
    wrapper = shallow(
      <Link url="#" external={false}>
        Label
      </Link>
    );
    expect(wrapper.find("a[target][rel]")).toHaveLength(0);
  });
});
