import {Slider} from '@miblanchard/react-native-slider';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {textColor, themeColor} from '../../constants/Colors';
import Size from '../../constants/GlobalSize';
import {RootProps} from '../../interface/NavInterface';

export default function Storage({navigation}: RootProps) {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate('HOME')}
        style={styles.storageItem}>
        <View style={styles.storageIconContainer}>
          <Image
            style={styles.storageIcon}
            source={require('../../assets/others/phone.png')}
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
      </TouchableOpacity>
      <View style={styles.storageItem}>
        <View style={styles.storageIconContainer}>
          <Image
            style={styles.storageIcon}
            source={require('../../assets/others/cloud.png')}
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
            animationType="timing"
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
    </>
  );
}

const {width, height} = Dimensions.get('screen');
//Body
const containerWidth = width - Size.small;
//Storage Properties
const storageItemWidth = containerWidth / 2 - Size.small;
const storageItemMargin = Size.small * 2;
const styles = StyleSheet.create({
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
});
