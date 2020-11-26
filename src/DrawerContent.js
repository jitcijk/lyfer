import React from 'react';
import {View, StyleSheet} from 'react-native';
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Context} from './components/Context';
export function DrawerContent(props) {
  const paperTheme = useTheme();
  const {toggleTheme} = React.useContext(Context);
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri:
                'https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg',
            }}
            size={50}
          />
          <Title style={styles.title}>Jiwu Jang</Title>
          <Caption style={styles.caption}>@cliid</Caption>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="clock-time-four-outline"
                color={color}
                size={size}
              />
            )}
            label="Time"
            labelStyle={{fontFamily: 'CircularStd-Medium'}}
            onPress={() => {
              props.navigation.navigate('Clock');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="playlist-music-outline"
                color={color}
                size={size}
              />
            )}
            label="Music"
            labelStyle={{fontFamily: 'CircularStd-Medium'}}
            onPress={() => {
              props.navigation.navigate('Music');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="calculator"
                color={color}
                size={size}
              />
            )}
            label="Calculator"
            labelStyle={{fontFamily: 'CircularStd-Medium'}}
            onPress={() => {
              props.navigation.navigate('Calculator');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="order-bool-ascending-variant"
                color={color}
                size={size}
              />
            )}
            label="Planner"
            labelStyle={{fontFamily: 'CircularStd-Medium'}}
            onPress={() => {
              props.navigation.navigate('Planner');
            }}
          />
          <DrawerItem
            icon={({color, size}) => (
              <MaterialCommunityIcons
                name="alert-circle-outline"
                color={color}
                size={size}
              />
            )}
            label="About"
            labelStyle={{fontFamily: 'CircularStd-Medium'}}
            onPress={() => {
              props.navigation.navigate('About');
            }}
          />
        </Drawer.Section>
        <Drawer.Section title="Preferences">
          <TouchableRipple onPress={() => toggleTheme()}>
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents="none">
                <Switch value={paperTheme.dark} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontFamily: 'CircularStd-Medium',
  },
  caption: {
    fontSize: 14,
    fontFamily: 'CircularStd-Medium',
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});