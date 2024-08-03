export interface IColumnTable {
    headerName: string,
    key: string,
    width?: string,
    align?: 'left' | 'right' | 'center',
    class?: string,
    type?: 'date' | 'datetime' | 'currency',
}