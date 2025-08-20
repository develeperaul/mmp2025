export type ParamsList = {
  type: 'new' | 'active',
}

export interface ReqCreateBody {
  accountNumber: string,
  amount: string,
  bankBik: string,
  inn: string,
}

export interface ReqListItem {
    id:            string;
    accountNumber: string;
    bikBank:       string;
    cardNumber:    string;
    inn:           string;
    amount:        number;
    status:        ReqStatus;
}

export interface ReqStatus {
    value:       number;
    description: string;
}
