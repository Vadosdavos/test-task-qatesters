import { Button, Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { DataType } from '../../api/api';
import './MainTable.scss';

type propsType = {
  data: DataType[];
};

type btnTypes = {
  [key: string]: string;
};

export const MainTable = ({ data }: propsType): JSX.Element => {
  const btnTypes: btnTypes = {
    new: 'Новое',
    started: 'Выполняется',
    declined: 'Отменено',
    completed: 'Выполнено',
    assigned_to: 'Назначено',
  };
  const btnColors: btnTypes = {
    new: 'crimson',
    started: 'cornflowerblue',
    declined: 'black',
    completed: 'green',
    assigned_to: 'orange',
  };
  const columns: ColumnsType<DataType> = [
    {
      title: 'Номер / Дата',
      dataIndex: 'id',
      key: 'id',
      ellipsis: true,
      render: (_, record) => (
        <div className='gridContainer'>
          <div className='ellipsisContainer'>
            <span className='primaryText'>{`№${record.id}`}</span>
            <br />
            <span className='secondaryText'>{`${new Date(record.created_date)
              .toLocaleString('ru-RU')
              .replace(',', '')}`}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Тип задания / Автор',
      dataIndex: 'order_type',
      key: 'order_type',
      ellipsis: true,
      render: (_, record) => (
        <div className='gridContainer'>
          <div className='ellipsisContainer'>
            <span className='primaryText'>{`${record.order_type.name}`}</span>
            <br />
            <span className='secondaryText'>{`${record.created_user.surname} ${record.created_user.name.charAt(
              0
            )}. ${record.created_user.patronymic.charAt(0)}.`}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Аккаунт / Терминал',
      dataIndex: 'terminal',
      key: 'terminal',
      ellipsis: true,
      render: (_, record) => (
        <div className='gridContainer'>
          <div className='ellipsisContainer'>
            <span className='primaryText'>{`${record.account.name}`}</span>
            <br />
            <span className='secondaryText'>{`${record.terminal.name}`}</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      align: 'center',
      width: 150,
      render: (_, record) => (
        <Button
          type='primary'
          style={{
            backgroundColor: `${btnColors[record.status]}`,
            borderColor: `${btnColors[record.status]}`,
            width: 110,
          }}
        >
          {btnTypes[record.status]}
        </Button>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['bottomCenter'],
        showTotal: (_, range) => `записи ${range[0]}-${range[1]}`,
      }}
    ></Table>
  );
};
