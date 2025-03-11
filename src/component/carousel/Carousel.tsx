import * as React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import {Model_Movie} from '../../feature/home/api/api.type';

interface ICarouselComponent {
  data?: Model_Movie[];
}

export default function CarouselComponent({data}: ICarouselComponent) {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
          return (
            <View style={styles.item}>
              <Image src={src} style={styles.image} />
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#dedede',
    height: 200,
  },
  image: {
    height: '100%',
    objectFit: 'cover',
    width: 130,
  },
});
