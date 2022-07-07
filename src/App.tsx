import React, { useCallback, useEffect, useState } from 'react';
import { DataType, getData } from './api/api';
import './App.scss';
import { MainTable } from './components/MainTable/MainTable';

function App() {
  const [data, setData] = useState<DataType[]>();

  const fetchData = useCallback(async (): Promise<void> => {
    const items = await getData();
    items.forEach((el) => (el.key = el.id));
    setData(items);
  }, []);

  useEffect(() => {
    fetchData().catch(console.error);
  }, [fetchData]);

  return <main className='App'>{data && <MainTable data={data} />}</main>;
}

export default App;
