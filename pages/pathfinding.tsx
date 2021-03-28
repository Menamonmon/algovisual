import React, { useState } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import AlgoPageLayout from "../components/AlgoPageLayout";

import pathfindingInfo from "../algoinfo/pathfinding";
import SelectorMenu from "../components/SelectorMenu";

const pathfindingInfoList = [];
for (const [algoName, { fullName }] of pathfindingInfo) {
  pathfindingInfoList.push({ name: fullName, value: algoName });
}

type AlgoSpeed = "f" | "m" | "s";

type AlgoSettings = {
  algoName: string | null;
  fullName: string | null;
  speed: AlgoSpeed | null;
};

interface SettingsBarProps {
  settings: AlgoSettings;
  setSettings: React.Dispatch<React.SetStateAction<AlgoSettings>>;
}

const SettingsBar: React.FC<SettingsBarProps> = ({ setSettings, settings }) => {
  const speedValues: { name: string; value: AlgoSpeed }[] = [
    { name: "Fast", value: "f" },
    { name: "Medium", value: "m" },
    { name: "Slow", value: "s" },
  ];

  return (
    <div className="flex flex-row space-x-10">
      <SelectorMenu
        menuTitle="Algorithm"
        items={pathfindingInfoList}
        current={{ value: settings.algoName, name: settings.fullName }}
        update={(newValue) =>
          setSettings((p) => ({
            ...p,
            algoName: newValue.value,
            fullName: newValue.name,
          }))
        }
      />
      <SelectorMenu
        menuTitle="Speed"
        items={speedValues}
        current={speedValues.find(({ value }) => value === settings.speed)}
        update={({ value }) => {
          setSettings((p) => ({ ...p, speed: value as AlgoSpeed }));
        }}
      />
    </div>
  );
};

const PathfindingPage = () => {
  const [settings, setSettings] = useState<AlgoSettings>({
    algoName: null,
    fullName: null,
    speed: null,
  });

  return (
    <Layout
      head={
        <Head>
          <title>Pathfinding | AlgoVisual</title>
        </Head>
      }
    >
      <AlgoPageLayout algorithmTitle={"Pathfinding"}>
        <SettingsBar settings={settings} setSettings={setSettings} />
      </AlgoPageLayout>
    </Layout>
  );
};

export default PathfindingPage;
