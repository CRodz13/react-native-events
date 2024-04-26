import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/events/event-list";
import { fetchEvents } from "../utils/fetchEvents";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const eventData = await fetchEvents();
        setData(eventData);
      } catch (error) {
        console.log("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      console.log("before response");
      const response = await fetch("http://localhost:8000/api/events/");
      const data = await response.json();
      console.log("did i get data");
      console.log(data);
      setData(data);
      console.log(data);
      console.log("after response");
      return data;
    } catch (error) {
      console.log("i am catch error", error);
    }
    const data = await response.json();

    setData(data);
  };
  return (
    <View>
      <EventList data={data} />
      <Button
        title="move to detail"
        onPress={() => navigation.navigate("Event")}
      ></Button>
    </View>
  );
};

export default HomeScreen;
