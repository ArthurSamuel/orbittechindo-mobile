import {View} from 'react-native';
import CarouselComponent from '../../component/carousel/Carousel';
import {useEffect, useState} from 'react';
import {useGetPopularMovie, useGetSearchMovie} from './api/resolver';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import FilterInput from './__component/filter/Filter';
import {Input} from '../../component/input/Input2';
import List from './__component/list/List';
import {ScrollView} from 'react-native-gesture-handler';

export default function Home({navigation}) {
  const [query, setQuery] = useState<string>('The');
  const [startDate, setStartDate] = useState<string>();
  const [endDate, setEndDate] = useState<string>();
  const [seletedCategory, setSelectedCategory] = useState<'movie' | 'tv'>(
    'movie',
  );
  const {data: dataRawSearchMovie, isLoading: fetchingSearchMovie} =
    useGetSearchMovie({
      query,
      category: seletedCategory,
      startDate,
      endDate,
    });
  const dataSearchMovie = dataRawSearchMovie?.data.results;
  const {data: dataRawPopularMovie} = useGetPopularMovie();
  const dataPopularMovie = dataRawPopularMovie?.data.results;

  console.log(dataSearchMovie);

  return (
    <ScrollView>
      <CarouselComponent data={dataPopularMovie} />
      <View style={{marginTop: 10}}>
        <FilterInput
          onSearch={e => setQuery(e)}
          onSelect={e => setSelectedCategory(e as any)}
          onEndDateChange={e => setEndDate(e)}
          onStartDateChange={e => setStartDate(e)}
        />
      </View>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <List
          onItemClick={item => {
            navigation.navigate(`Detail`, {id: item.id});
          }}
          data={dataSearchMovie}
          isLoding={fetchingSearchMovie}
        />
      </View>
    </ScrollView>
  );
}
