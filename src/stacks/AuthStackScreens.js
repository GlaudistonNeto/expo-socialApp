import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../screens/SignInScreen";
import SignUp from "../screens/SignUpScreen";

export default AuthStackScreens = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};