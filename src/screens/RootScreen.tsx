import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  PermissionsAndroid,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RNFS from 'react-native-fs';
import {useDispatch} from 'react-redux';
import CategoryItem from '../components/RootPage/CategoryItem';
import Storage from '../components/RootPage/Storage';
import Top_ber from '../components/RootPage/Top_ber';
import {category} from '../constants/Category';
import {textColor, themeColor} from '../constants/Colors';
import Size from '../constants/GlobalSize';
import {RootProps} from '../interface/NavInterface';
import {DispatchType} from '../store/Store';

export default function RootScreen(Props: RootProps) {
  const requestStoragePermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'My file storage Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Permission granted');
        getAllFiles();
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const [data, setData] = useState<RNFS.ReadDirItem[]>([]);
  const dispatch = useDispatch<DispatchType>();
  const getAllFiles = () => {
    RNFS.readDir(RNFS.DownloadDirectoryPath)
      .then(result => {
        // dispatch(getImages(result));
        setData(result);
      })
      .catch(err => {
        console.log(err.message, err.code);
      });
  };
  useEffect(() => {
    requestStoragePermission();
  }, []);

  return (
    <SafeAreaView style={styles.theme}>
      {/* User and Search ber */}
      <Top_ber />
      {/* Storage Properties */}
      <View>
        <Text style={styles.miniTitle}>Storage</Text>
        <View style={styles.storageContainer}>
          <Storage {...Props} />
        </View>
      </View>

      {/* Storage Properties */}
      <View>
        <Text style={styles.miniTitle}>Categories</Text>
        <View style={styles.categoryContainer}>
          <FlatList
            style={{width: '100%'}}
            data={category}
            renderItem={itemData => <CategoryItem data={{Props, itemData}} />}
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
// Import Height Width
const {height, width} = Dimensions.get('screen');

//Body
const containerWidth = width - Size.small;
//Storage Properties
const storageItemWidth = containerWidth / 2 - Size.small;
const storageItemMargin = Size.small * 2;

const styles = StyleSheet.create({
  theme: {
    flex: 1,
    backgroundColor: themeColor.primaryLight,
    paddingHorizontal: Size.small,
  },

  miniTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: textColor.primary,
    marginBottom: Size.small,
  },
  storageContainer: {
    flexDirection: 'row',
    gap: storageItemMargin / 2,
  },

  categoryContainer: {
    backgroundColor: themeColor.primary,
    padding: Size.small,
    borderRadius: Size.small,
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
