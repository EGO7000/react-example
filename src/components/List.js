import React, { useState, useEffect } from 'react';
import Element from './Element';

const List = ({ value }) => {
  const [searchText, setSearchText] = useState('');
  const [searchList, setSearchList] = useState(value);

  useEffect(() => {
    if (searchText === '') {
      setSearchList(value);
      document.title = `useEffect hook example`;
    } else {
      const result = value.filter((elementValue) =>
        elementValue.toLowerCase().includes(searchText.toLowerCase())
      );
      if (!result.length) {
        setSearchList(['Ничего не найдено!']);
      } else {
        setSearchList(result);
      }
      document.title = `Найдено элементов: ${result.length}`;
    }
  }, [searchText, value]);

  const ListItem = searchList.map((elementValue, index) => (
    // {index} как заглушка из документации, понятное дело,
    // что с нормальным объектом тут будет id из базы
    <Element key={index} value={elementValue} />
  ));

  return (
    <div>
      <input
        type="text"
        placeholder="Введите строку поиска..."
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <ul>{ListItem}</ul>
    </div>
  );
};

export default List;
