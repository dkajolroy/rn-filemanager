import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {textColor, themeColor} from '../../constants/Colors';
import Size from '../../constants/GlobalSize';

export default function Top_ber() {
  return (
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
          source={require('../../assets/others/search.png')}
        />
        <TextInput
          style={styles.searchText}
          keyboardType="web-search"
          placeholder="Search a file..."
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
