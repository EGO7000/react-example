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
        elementValue.toLowerCase().includes(searchText)
      );
      setSearchList(result);
      document.title = `Найдено элементов: ${result.length}`;
    }
  }, [searchText, value]);

  const ListItem = searchList.map((elementValue) => (
    // .toString() как заглушка из документации,
    // понятное дело, что с нормальным объектом там будет id из базы
    <Element key={elementValue.toString()} value={elementValue} />
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
