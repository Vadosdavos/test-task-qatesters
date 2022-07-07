import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';
import { DataType } from '../../api/api';

type propsType = {
  data: DataType[];
};

export const MainTable = ({ data }: propsType): JSX.Element => {
  const columns: ColumnsType<DataType> = [
    {
      title: 'Номер / Дата',
      dataIndex: 'id',
      key: 'id',
      render: (_, record) => (
        <span>{`№${record.id} \n ${new Date(record.created_date).toLocaleString('ru-RU').replace(',', '')}`}</span>
      ),
    },
    {
      title: 'Тип задания / Автор',
      dataIndex: 'order_type',
      key: 'order_type',
      render: (_, record) => (
        <span>{`${record.order_type.name} \n ${record.created_user.surname} ${record.created_user.name.charAt(
          0
        )}.${record.created_user.patronymic.charAt(0)}`}</span>
      ),
    },
    {
      title: 'Аккаунт / Терминал',
      dataIndex: 'terminal',
      key: 'terminal',
      render: (_, record) => <span>{`${record.account.name} \n ${record.terminal.name}`}</span>,
    },
    { title: 'Статус', dataIndex: 'status', key: 'status' },
  ];

  console.log(data);
  return <Table columns={columns} dataSource={data}></Table>;
};
