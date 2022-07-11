interface NameItemType {
  name: string;
  oguid: string;
}

interface CreatedUserType extends NameItemType {
  surname: string;
  patronymic: string;
}

export interface DataType {
  key: React.Key;
  id: number;
  oguid: string;
  status: string;
  order_type: NameItemType;
  terminal: NameItemType;
  account: NameItemType;
  created_user: CreatedUserType;
  created_date: number;
}

export const getData = async (): Promise<DataType[]> =>
  (
    await fetch('test_data.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
  ).json();
