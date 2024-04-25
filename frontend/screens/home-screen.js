import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <EventList />
      <Button
        title="move to detail"
        onPress={() => navigation.navigate("Event")}
      ></Button>
    </View>
  );
};

export default HomeScreen;
