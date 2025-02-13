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
                tabBarLabelStyle: {
                    fontSize: 16, // Set a larger font size for all tabs
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    headerTitle: 'OptiMax',
                    tabBarIcon: ({color}) => <TabBarIcon name="home" color={color}/>,
                    // headerRight: () => (
                    //     <Link href="/modal" asChild>
                    //         <Pressable>
                    //             {({pressed}) => (
                    //                 <FontAwesome
                    //                     name="info-circle"
                    //                     size={25}
                    //                     color={Colors[colorScheme ?? 'light'].text}
                    //                     style={{marginRight: 15, opacity: pressed ? 0.5 : 1}}
                    //                 />
                    //             )}
                    //         </Pressable>
                    //     </Link>
                    // ),
                }}
            />
            <Tabs.Screen
                name="rewards"
                options={{
                    title: 'Rewards',
                    tabBarIcon: ({color}) => <TabBarIcon name="gift" color={color}/>,
                }}
            />
            <Tabs.Screen
                name="transactions"
                options={{
                    title: 'Record',
                    tabBarIcon: ({color}) => <TabBarIcon name="exchange" color={color}/>,
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
