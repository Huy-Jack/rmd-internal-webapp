import { PROGRESS_LIST } from './constant';
import { FirebaseProduct } from './interface';

export type Progress = keyof typeof PROGRESS_LIST;

export type Size = 'S' | 'M' | 'L';

// export type FirebaseTable = Record<string, Product>;
export type FirebaseTable = { [key in string]: FirebaseProduct };

export type TableList = FirebaseTable[];
