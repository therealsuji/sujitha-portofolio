import { Tab } from "@headlessui/react";
import React, { useState } from "react";
import { FCC } from "../utils/types";

interface TabsProps {
  names: String[];
}

export const Tabs: FCC<TabsProps> & {
  Panel: FCC;
} = ({ children, names }) => {
  const panels = React.Children.map(children, (child: any) =>
    child?.type?.displayName === "Panel" ? child : null
  );
  const tabLength = 100;
  const [position, setPosition] = useState(0);
  return (
    <Tab.Group onChange={setPosition}>
      <div className="max-w-fit">
        <Tab.List>
          <div className="flex max-w-fit">
            {names.map((value, idx) => (
              <Tab
                className="ring-0 outline-none"
                style={{ minWidth: `${tabLength}px` }}
                key={idx}
              >
                {value}
              </Tab>
            ))}
          </div>
          <div className="relative mt-4">
            <div
              style={{ minWidth: `${tabLength}px`, left: position * tabLength }}
              className="rounded-md rounded-bl-none rounded-br-none  h-1 bg-slate-100 absolute -bottom-[1px] transition-all duration-100 ease-in-out"
            ></div>
            <div className="rounded-md h-[2px] bg-slate-100 absolute w-full z-40"></div>
          </div>
        </Tab.List>
      </div>
      <Tab.Panels className="bg-secondary-black p-8 rounded-md" >
        {panels?.map((value, idx) => (
          <Tab.Panel key={idx}>{value}</Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};

const Slot1: FCC = ({ children }): JSX.Element => {
  return <div>{children}</div>;
};

const SlotPanel = Slot1;
SlotPanel.displayName = "Panel";
Tabs.Panel = SlotPanel;
