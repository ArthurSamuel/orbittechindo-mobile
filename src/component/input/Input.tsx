/* eslint-disable react-hooks/rules-of-hooks */
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {style} from './Input.style';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import React, {useState} from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Picker} from '@react-native-picker/picker';

interface IOptions {
  text: string;
  value: string;
}

// This will be wrapper of React Form Component
interface InputControllerProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  rules?:
    | Omit<
        RegisterOptions<T, Path<T>>,
        'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
      >
    | undefined;
  render(
    field: ControllerRenderProps<T, Path<T>>,
    fieldState: ControllerFieldState,
  ): React.ReactElement | React.ReactElement[];
}

const Input = ({
  onChange,
  label,
}: {
  onChange(e: string): void;
  label: string;
}) => {
  return (
    <TextInput
      style={style.input}
      placeholder={label}
      onChangeText={e => onChange(e)}
    />
  );
};

Input.Date = ({
  label,
  onChange,
}: {
  label: string;
  onChange(e: string): void;
}) => {
  const [date, setDate] = useState<null | Date>(null);
  const [show, setShow] = useState(false);

  const handleOnChange = (event: any, selectedDate: any) => {
    if (selectedDate) {
      onChange(selectedDate.toISOString().split('T')[0]);
      setDate(selectedDate);
      setShow(false);
    }
  };

  return (
    <View>
      <TouchableOpacity style={style.buttonDate} onPress={() => setShow(true)}>
        <Text>{label}</Text>
        {date && <Text>{date.toDateString()}</Text>}
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          value={date || new Date()}
          mode="date"
          display="default"
          onChange={handleOnChange}
        />
      )}
    </View>
  );
};

Input.Select = ({
  options,
  onChange,
}: {
  options: IOptions[];
  onChange(e: string): void;
}) => {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  return (
    <View>
      <Picker
        selectedValue={selectedValue}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          onChange(itemValue);
        }}
        style={style.select}>
        {options.map((item, index) => {
          return (
            <Picker.Item key={index} label={item.text} value={item.value} />
          );
        })}
      </Picker>
    </View>
  );
};

Input.Controller = <T extends FieldValues>({
  control,
  name,
  rules,
  render,
}: InputControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({field, fieldState}) => (
        <React.Fragment>{render(field, fieldState)}</React.Fragment>
      )}
    />
  );
};

export default Input;
