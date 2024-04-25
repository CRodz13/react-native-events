import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="some profile"
        onPress={() => navigation.navigate("Profile", { profileId: 1 })}
      />
    </View>
  );
};

export default ProfileScreen;
