export interface User {
  id?: number;
  uername?: string;
  email?: string;
}

export interface BodySaving {
  spreadsheet_id?: string;
  sheet?: string;
  rows?: User[];
}
