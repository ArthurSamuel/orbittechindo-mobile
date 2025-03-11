import {Image, Text, View} from 'react-native';
import {Model_Cast} from '../../../home/api/api.type';
import {style} from './Cast.style';

interface ICast {
  data: Model_Cast[];
}

export default function Cast({data}: ICast) {
  return (
    <View>
      <Text style={{fontSize: 20}}>Cast</Text>
      <View style={style.container}>
        {data?.map((item, index) => {
          if (item.profile_path) {
            const srcAvatar = `https://image.tmdb.org/t/p/original/${item.profile_path}`;
            return (
              <View key={index} style={style.itemContainer}>
                <View style={style.item}>
                  <Image style={style.itemImage} src={srcAvatar} />
                </View>
                <View style={style.infoWrapper}>
                  <Text>{item.name}</Text>
                  <Text style={style.text}>{item.character}</Text>
                </View>
              </View>
            );
          }
        })}
      </View>
    </View>
  );
}
