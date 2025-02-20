export interface BodySaving {
  spreadsheet_id?: string;
  sheet?: string;
  rows?: any[][];
}

export interface BodiesSaving {
  tables?: BodySaving[];
}

export interface BodyTables {
  table?: string;
  rows?: any[][];
}
