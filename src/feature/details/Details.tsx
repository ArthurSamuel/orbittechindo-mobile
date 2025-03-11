import {Image, Text, View} from 'react-native';
import {Model_MovieDetail, Model_MovieCredit} from '../home/api/api.type';
import {useGetDetailMovie, useGetCreditMovie} from '../home/api/resolver';
import {style} from './Details.style';
import Cast from './__components/cast/Cast';
import {ScrollView} from 'react-native-gesture-handler';
import Genre from './__components/genre/Genre';

export default function Detail({route}) {
  const {id} = route.params;
  const {data: data, isLoading: fetchMovieDetail} = useGetDetailMovie({
    movie_id: id || '0',
  });
  const dataDetailMovie: Model_MovieDetail = data?.data;
  const {data: dataRawCreditMovie} = useGetCreditMovie({
    movie_id: id || '0',
  });
  const dataCreditMovie: Model_MovieCredit = dataRawCreditMovie?.data;
  const src = `https://image.tmdb.org/t/p/original/${dataDetailMovie?.poster_path}`;

  if (fetchMovieDetail) {
    return null;
  }

  return (
    <ScrollView>
      <Image src={src} style={style.image} />
      <View style={{padding: 10}}>
        <Text style={{fontSize: 25}}>
          {dataDetailMovie.title} ({dataDetailMovie.release_date})
        </Text>
        <Text style={{marginTop: 7}}>{dataDetailMovie.overview}</Text>
        <Text style={{marginTop: 7, fontSize: 30}}>
          {dataDetailMovie.vote_average.toFixed(1)} / 10
        </Text>
        <View style={{marginTop: 7}}>
          <Genre data={dataDetailMovie} />
        </View>
        <View style={{marginTop: 7}}>
          <Cast data={dataCreditMovie.cast} />
        </View>
      </View>
    </ScrollView>
  );
}
