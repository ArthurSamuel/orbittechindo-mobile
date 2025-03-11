import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  card: {
    minWidth: '32.33%',
    borderRadius: 8,
    overflow: 'hidden',
    height: 200,
  },
  item: {
    height: '100%',
    backgroundColor: '#dedede',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
});
