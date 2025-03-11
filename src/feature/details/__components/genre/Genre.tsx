import {Text, View} from 'react-native';
import {Model_MovieDetail} from '../../../home/api/api.type';
import {style} from './Genre.style';

interface IGenres {
  data: Model_MovieDetail;
}

export default function Genre({data}: IGenres) {
  return (
    <View>
      <Text style={{fontSize: 20}}>Genres</Text>
      <View style={style.container}>
        {data.genres.map((item, index) => {
          return (
            <View key={index} style={style.itemContainer}>
              <View style={style.item}>
                <Text>{item.name}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}
