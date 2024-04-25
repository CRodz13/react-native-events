import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { HeaderBackButton } from "@react-navigation/elements";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { profileId, title, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 20 }}>ProfileId: {profileId}</Text>
      <Text style={{ fontSize: 20 }}>{title}</Text>
      <Text style={{ fontSize: 20 }}>{description}</Text>
    </View>
  );
};

export default ProfileDetailScreen;
