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

const url =
  'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220708T102901Z&X-Amz-Expires=86400&X-Amz-Signature=2ee4d791fb4d17b12e9ebe1cbcb84578926e5e52ee390083fb41892b87ca1824&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22&x-id=GetObject';

export const getData = async (): Promise<DataType[]> => (await fetch(url)).json();
