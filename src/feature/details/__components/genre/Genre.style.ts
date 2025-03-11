import {StyleSheet} from 'react-native';

export const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemContainer: {
    minWidth: '50%',
    padding: 10,
  },
  item: {
    borderWidth: 1,
    borderColor: '#dedede',
    height: 40,
    borderRadius: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
