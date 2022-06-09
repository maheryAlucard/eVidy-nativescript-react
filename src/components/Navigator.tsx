import * as React from "react";
import { BaseNavigationContainer } from '@react-navigation/core';
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { _NAVIGATION } from '../Static/NavigationPath';
import { HomeScreen } from "./HomeScreen";
import { SecondaryScreen } from "./SecondaryScreen";

const StackNavigator = stackNavigatorFactory();

export const mainStackNavigator = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName={_NAVIGATION.HOME}
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                },
                headerShown: false,
                stackAnimation: 'flip'
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
            />
            <StackNavigator.Screen
                name="Secondary"
                component={SecondaryScreen}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);
