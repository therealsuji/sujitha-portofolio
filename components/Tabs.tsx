import { Tab } from "@headlessui/react";
import React from "react";
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
  return (
    <Tab.Group>
      <Tab.List>
        {names.map((value, key) => (
          <Tab key={key}>{value}</Tab>
        ))}
      </Tab.List>
      <Tab.Panels>
        {panels?.map((value, key) => (
          <Tab.Panel key={key}>{value}</Tab.Panel>
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
