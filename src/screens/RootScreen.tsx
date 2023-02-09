import {Slider} from '@miblanchard/react-native-slider';
import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {category} from '../constants/Category';
import {textColor, themeColor} from '../constants/Colors';
import Size from '../constants/GlobalSize';
import {categoryPropType} from '../interface/PropInterface';

// Import Height Width
const {height, width} = Dimensions.get('screen');

export default function RootScreen() {
  const renderItem = ({item}: categoryPropType) => {
    return (
      <View style={styles.categoryItem}>
        <TouchableOpacity style={styles.categoryBox}>
          <Image style={styles.categoryIcon} source={item.icon} />
          <Text style={styles.categoryText}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.theme}>
      {/* User and Search ber */}
      <View style={styles.topComponent}>
        {/* Title and User */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>My Files</Text>
          <Text>Image</Text>
        </View>
        {/* Search bars */}

        <View style={styles.searchBox}>
          <Image
            style={styles.searchIcon}
            source={require('../assets/others/search.png')}
          />
          <TextInput
            style={styles.searchText}
            keyboardType="web-search"
            placeholder="Search a file..."
          />
        </View>
      </View>

      {/* Storage Properties */}
      <View>
        <Text style={styles.miniTitle}>Storage</Text>
        <View style={styles.storageContainer}>
          <View style={styles.storageItem}>
            <View style={styles.storageIconContainer}>
              <Image
                style={styles.storageIcon}
                source={require('../assets/others/phone.png')}
              />
            </View>
            <Text style={styles.storageName}>Internal Storage</Text>
            {/* Storage Size */}
            <View>
              <View style={styles.storageSizeTextContainer}>
                <Text style={styles.storageSizeText}>11.5 GB Used</Text>
                <Text style={styles.storageSizeText}>4.6 Free</Text>
              </View>
              <Slider
                thumbStyle={{
                  width: 0,
                  height: 0,
                }}
                animationType="spring"
                minimumValue={0}
                maximumTrackTintColor={textColor.secondary}
                minimumTrackTintColor={themeColor.blue}
                maximumValue={100}
                disabled
                trackStyle={{height: 6}}
                containerStyle={{height: 10}}
                value={50}
              />
            </View>
          </View>
          <View style={styles.storageItem}>
            <View style={styles.storageIconContainer}>
              <Image
                style={styles.storageIcon}
                source={require('../assets/others/cloud.png')}
              />
            </View>
            <Text style={styles.storageName}>External Storage</Text>
            <View>
              <View style={styles.storageSizeTextContainer}>
                <Text style={styles.storageSizeText}>11.5 GB Used</Text>
                <Text style={styles.storageSizeText}>4.6 Free</Text>
              </View>
              <Slider
                thumbStyle={{
                  width: 0,
                  height: 0,
                }}
                animationType="spring"
                minimumValue={0}
                disabled
                maximumTrackTintColor={textColor.secondary}
                minimumTrackTintColor={themeColor.blue}
                trackStyle={{height: 6}}
                containerStyle={{height: 10}}
                maximumValue={100}
                value={50}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Storage Properties */}
      <View>
        <Text style={styles.miniTitle}>Categories</Text>
        <View style={styles.categoryContainer}>
          <FlatList
            style={{width: '100%'}}
            data={category}
            renderItem={renderItem}
            numColumns={4}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>

      {/* Recent Files */}
      <View>
        <View style={styles.recentContainer}>
          <Text style={styles.miniTitle}>Recent Files</Text>
          <TouchableOpacity>
            <Text style={styles.seeAll}>See All</Text>
          </TouchableOpacity>
        </View>
        {/* Render All */}
        <View>
          {/* Single Item */}
          <TouchableOpacity style={styles.recentItem}>
            <Image
              style={styles.recentItemIcon}
              source={require('../assets/category/image.png')}
            />
            <View>
              <Text style={styles.recentItemName}>Beautiful Image.jpg</Text>
              <Text style={styles.recentItemDate}>8.4 MB Oct 19 2022</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

//Body
const containerWidth = width - Size.small;
//Storage Properties
const storageItemWidth = containerWidth / 2 - Size.small;
const storageItemMargin = Size.small * 2;
// Category Properties
const categoryItemWidth = containerWidth / 4;

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    backgroundColor: themeColor.primaryLight,
    paddingHorizontal: Size.small,
  },
  topComponent: {
    gap: Size.small * 2,
    marginVertical: Size.small,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: textColor.primary,
    marginBottom: Size.small,
  },
  miniTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textColor.primary,
    marginBottom: Size.small,
  },
  searchBox: {
    flexDirection: 'row',
    backgroundColor: themeColor.primary,
    borderRadius: Size.small,
    alignItems: 'center',
    paddingHorizontal: Size.small,
  },
  searchIcon: {width: 25, height: 25},
  searchText: {color: textColor.primaryLight, fontSize: 16},
  storageContainer: {
    flexDirection: 'row',
    gap: storageItemMargin / 2,
  },
  storageItem: {
    width: storageItemWidth,
    backgroundColor: themeColor.primary,
    borderRadius: Size.small,
    padding: Size.small,
  },
  storageIconContainer: {
    backgroundColor: themeColor.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Size.small,
    width: 50,
    height: 50,
  },
  storageIcon: {
    width: 30,
    height: 30,
  },
  storageName: {
    color: textColor.primary,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: Size.small,
  },
  storageSizeTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  storageSizeText: {
    color: textColor.primaryLight,
    fontWeight: 'bold',
    fontSize: 13,
  },
  categoryContainer: {
    backgroundColor: themeColor.primary,
    padding: Size.small,
    borderRadius: Size.small,
  },
  categoryItem: {
    width: categoryItemWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  categoryText: {
    color: textColor.primaryLight,
    textAlign: 'center',
    fontSize: 13,
    margin: Size.small / 2,
  },
  categoryBox: {
    margin: Size.small,
    alignItems: 'center',
  },
  recentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  seeAll: {
    fontSize: 16,
    color: textColor.primaryLight,
  },
  recentItem: {
    flexDirection: 'row',
    backgroundColor: themeColor.primary,
    borderRadius: Size.small,
    alignItems: 'center',
    padding: Size.small,
  },
  recentItemIcon: {
    width: 30,
    height: 30,
    marginRight: Size.small * 2,
  },
  recentItemName: {
    fontSize: 16,
    color: textColor.primary,
    fontWeight: 'bold',
    marginBottom: Size.small / 2,
  },
  recentItemDate: {
    fontSize: 13,
    color: textColor.primaryLight,
  },
});
