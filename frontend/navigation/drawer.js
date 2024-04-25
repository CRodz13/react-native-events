import {
  createDrawerNavigator,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { HomeStack, ProfileStack } from "./stack";
import { Image, View, SafeAreaView, Linking } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const MyDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <SafeAreaView
            style={{ flex: 1, paddingTop: 20, backgroundColor: "#99f6e4" }}
          >
            <View
              style={{
                justiftyContent: "center",
                aligntItems: "center",
                height: 140,
              }}
            >
              <Image
                style={{ width: 100, resizeMode: "contain", height: 100 }}
                source={require("../assets/images/logos/logo.png")}
              />
            </View>
            <DrawerItemList {...props} />
            <DrawerItem
              label="More Info"
              onPress={() => Linking.openURL("https://google.com")}
              icon={() => <Ionicons name="information" size={22} />}
            />
          </SafeAreaView>
        );
      }}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: () => <Ionicons name="home" size={22} />,
        }}
      />
      <Drawer.Screen
        name="ProfilesStack"
        component={ProfileStack}
        options={{
          title: "Profile",
          drawerIcon: () => (
            <MaterialCommunityIcons name="face-man-profile" size={22} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
