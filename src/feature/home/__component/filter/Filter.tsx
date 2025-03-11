import {View} from 'react-native';
import {style} from './Filter.style';
import Input from '../../../../component/input/Input';

interface IFilterInput {
  onStartDateChange: (date: string) => void;
  onEndDateChange: (date: string) => void;
  onSearch: (input: string) => void;
  onSelect: (value: string) => void;
}

export default function FilterInput({
  onEndDateChange,
  onSearch,
  onSelect,
  onStartDateChange,
}: IFilterInput) {
  return (
    <View style={style.container}>
      <View>
        <Input onChange={e => onSearch(e)} />
      </View>
      <View>
        <Input.Select
          onChange={e => onSelect(e)}
          options={[
            {text: 'Movie', value: 'movie'},
            {text: 'Serie', value: 'tv'},
          ]}
        />
      </View>
      <View style={style.dateWrapper}>
        <Input.Date onChange={e => onStartDateChange(e)} label="Start Date" />
        <Input.Date onChange={e => onEndDateChange(e)} label="End Date" />
      </View>
    </View>
  );
}
