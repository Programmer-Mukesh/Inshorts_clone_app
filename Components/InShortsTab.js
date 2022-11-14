import { View, Text, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import { TabView, SceneMap } from "react-native-tab-view";
import NewsScreen from "../Screens/NewsScreen";
import DiscoverScreen from "../Screens/DiscoverScreen";
import TopNavigation from "./TopNavigation";

const renderScene = SceneMap({
  first: DiscoverScreen,
  second: NewsScreen,
});

const InShortsTab = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(1);

  const [routes] = useState([
    { key: "first", title: "Discover" },
    { key: "second", title: "News" },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
      renderTabBar={() => <TopNavigation index={index} setIndex={setIndex} />}
    />
  );
};

export default InShortsTab;
