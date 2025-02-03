import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                animation: 'shift',
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Dashboard',
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                    headerRight: () => (
                        <Link href="/modal" asChild>
                            <Pressable>
                                {({pressed}) => (
                                    <FontAwesome
                                        name="info-circle"
                                        size={25}
                                        color={Colors[colorScheme ?? 'light'].text}
                                        style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                                    />
                                )}
                            </Pressable>
                        </Link>
                    ),
                }}
            />
            <Tabs.Screen
                name="spending"
                options={{
                    title: 'Spending',
                    tabBarIcon: ({color}) => <TabBarIcon name="bar-chart" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="payment"
                options={{
                    title: 'Payment',
                    tabBarIcon: ({color}) => <TabBarIcon name="money" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="cards"
                options={{
                    title: 'Cards',
                    tabBarIcon: ({color}) => <TabBarIcon name="credit-card" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'More',
                    tabBarIcon: ({color}) => <TabBarIcon name="bars" color={color}/>,
                }}
            />
        </Tabs>
    );
}
