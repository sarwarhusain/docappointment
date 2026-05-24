import MyBooking from "@/component/MyBooking";
import { Tabs } from "@heroui/react";
import React from "react";

const DashBoard = () => {
  return (
    <div className="container mx-auto my-20">
      <h2>Dashboard</h2>
      <Tabs className="w-full">
        <Tabs.ListContainer>
          <Tabs.List aria-label="Options">
            <Tabs.Tab id="analytics">
              My Booking
              <Tabs.Indicator />
            </Tabs.Tab>
            <Tabs.Tab id="reports">
              Profile
              <Tabs.Indicator />
            </Tabs.Tab>
          </Tabs.List>
        </Tabs.ListContainer>

        <Tabs.Panel className="pt-4 " id="analytics">
          <MyBooking></MyBooking>
        </Tabs.Panel>
        <Tabs.Panel className="pt-4" id="reports">
          <p>Generate and download detailed reports.</p>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export default DashBoard;
