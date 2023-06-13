import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import Button from "../components/Button";
import routes from "../navigation/routes";

const WelcomeScreen = () => {
  const { navigate } = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
      blurRadius={5}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigate(routes.LOGIN)}></Button>
        <Button
          color="secondary"
          title="Register"
          onPress={() => navigate(routes.REGISTER)}
        ></Button>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    alignItems: "center",
    position: "absolute",
    top: 50,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 15,
  },
});

export default WelcomeScreen;
