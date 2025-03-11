import {Image, TouchableOpacity, View} from 'react-native';
import {style} from './List.style';
import {Model_Movie} from '../../api/api.type';

interface IList {
  data?: Model_Movie[];
  isLoding?: boolean;
  onItemClick(item: Model_Movie): void;
}

export default function List({data, isLoding, onItemClick}: IList) {
  if (isLoding) {
    return null;
  }

  const handleOnClick = (item: Model_Movie) => {
    onItemClick(item);
  };

  return (
    <View style={style.container}>
      {data?.map((item, index) => {
        if (item.poster_path) {
          const src = `https://image.tmdb.org/t/p/original/${item.poster_path}`;
          return (
            <TouchableOpacity
              key={index}
              style={style.card}
              onPress={() => handleOnClick(item)}>
              <View style={style.item}>
                <Image style={style.image} src={src} />
              </View>
            </TouchableOpacity>
          );
        }
      })}
    </View>
  );
}
