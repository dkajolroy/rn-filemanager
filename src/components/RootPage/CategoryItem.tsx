import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {textColor} from '../../constants/Colors';
import Size from '../../constants/GlobalSize';
import {RootProps} from '../../interface/NavInterface';
import {categoryPropType} from '../../interface/PropInterface';
//Item Of Category

type PropsT = {
  data: {
    Props: RootProps;
    itemData: categoryPropType;
  };
};

const CategoryItem = (props: PropsT) => {
  const {
    data: {
      Props: {navigation},
      itemData: {item},
    },
  } = props;

  const routeing = () => {
    switch (item.title) {
      case 'Image':
        navigation.navigate('IMAGES');
        break;
      case 'Video':
        navigation.navigate('VIDEO');
        break;
      case 'Document':
        navigation.navigate('DOCUMENT');
        break;
      case 'Audio':
        navigation.navigate('AUDIO');
        break;
      case 'Archive':
        navigation.navigate('ARCHIVE');
        break;
      default:
        return false;
    }
  };

  return (
    <View style={styles.categoryItem}>
      <TouchableOpacity onPress={() => routeing()} style={styles.categoryBox}>
        <Image style={styles.categoryIcon} source={item.icon} />
        <Text style={styles.categoryText}>{item.title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

const {width, height} = Dimensions.get('screen');
const containerWidth = width - Size.small;
const categoryItemWidth = containerWidth / 4;
const styles = StyleSheet.create({
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
});
