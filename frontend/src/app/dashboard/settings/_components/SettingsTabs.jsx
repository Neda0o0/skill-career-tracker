"use client";

import { useState, useEffect } from "react";
import TabButton from "@/app/dashboard/settings/_components/TabButton";
import dynamic from "next/dynamic";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
// import { motion } from "framer-motion";

// lazy loaded tabs
const PersonalTab = dynamic(
  () => import("@/app/dashboard/settings/_components/_tabs/PersonalTab"),
  {
    loading: () => <LoadingSpinner />,
  }
);
const AccountTab = dynamic(
  () => import("@/app/dashboard/settings/_components/_tabs/AccountTab"),
  {
    loading: () => <LoadingSpinner />,
  }
);
const PrivacyTab = dynamic(
  () => import("@/app/dashboard/settings/_components/_tabs/PrivacyTab"),
  {
    loading: () => <LoadingSpinner />,
  }
);
const NotificationsTab = dynamic(
  () => import("@/app/dashboard/settings/_components/_tabs/NotificationsTab"),
  {
    loading: () => <LoadingSpinner />,
  }
);

const TABS = {
  PERSONAL: "personal",
  ACCOUNT: "account",
  PRIVACY: "privacy",
  NOTIFICATIONS: "notifications",
};

const SettingsTabs = () => {
  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window === "undefined") return TABS.PERSONAL;

    const savedTab = localStorage.getItem("settings-active-tab");
    const isValid = Object.values(TABS).includes(savedTab);

    return isValid ? savedTab : TABS.PERSONAL;
  });

  useEffect(() => {
    localStorage.setItem("settings-active-tab", activeTab);
  }, [activeTab]);

  return (
    <>
      <ul className="flex gap-8 justify-evenly border-b">
        <TabButton
          label="Personal Info"
          isActive={activeTab === TABS.PERSONAL}
          onClick={() => setActiveTab(TABS.PERSONAL)}
        />

        <TabButton
          label="Account Settings"
          isActive={activeTab === TABS.ACCOUNT}
          onClick={() => setActiveTab(TABS.ACCOUNT)}
        />

        <TabButton
          label="Privacy"
          isActive={activeTab === TABS.PRIVACY}
          onClick={() => setActiveTab(TABS.PRIVACY)}
        />

        <TabButton
          label="Notifications"
          isActive={activeTab === TABS.NOTIFICATIONS}
          onClick={() => setActiveTab(TABS.NOTIFICATIONS)}
        />
      </ul>

      <div className="bg-white rounded-md shadow-md min-h-80 p-6">
        {activeTab === TABS.PERSONAL && <PersonalTab />}
        {activeTab === TABS.ACCOUNT && <AccountTab />}
        {activeTab === TABS.PRIVACY && <PrivacyTab />}
        {activeTab === TABS.NOTIFICATIONS && <NotificationsTab />}
      </div>
      {/* <motion.div
        className="bg-white rounded-md shadow-md min-h-80 p-6"
        key={activeTab}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
      >
        {activeTab === TABS.PERSONAL && <PersonalTab />}
        {activeTab === TABS.ACCOUNT && <AccountTab />}
        {activeTab === TABS.PRIVACY && <PrivacyTab />}
        {activeTab === TABS.NOTIFICATIONS && <NotificationsTab />}
      </motion.div> */}
    </>
  );
};

export default SettingsTabs;
