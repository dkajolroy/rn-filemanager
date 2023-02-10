import {StackScreenProps} from '@react-navigation/stack';
export type RootStackParamList = {
  ROOT: undefined;
  HOME: undefined;
  IMAGES: undefined;
  VIDEO: undefined;
  DOCUMENT: undefined;
  AUDIO: undefined;
  ARCHIVE: undefined;
};
export type RootProps = StackScreenProps<RootStackParamList, 'ROOT'>;
