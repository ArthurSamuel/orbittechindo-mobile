import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    width: '50%',
    paddingBottom: 10,
    alignItems: 'center',
  },
  item: {
    overflow: 'hidden',
    height: 100,
    width: 100,
    borderRadius: '100%',
  },
  itemImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    alignSelf: 'flex-start',
  },
  infoWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    width: '100%',
    marginTop: 7,
  },
  text: {
    textAlign: 'center',
    marginTop: 3,
    fontWeight: 'bold',
  },
});
