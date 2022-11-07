import { Input, InputText } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label>
      <InputText>Find contact by name</InputText>
      <Input onChange={e => dispatch(changeFilter(e.target.value))} />
    </label>
  );
};

export default Filter;
