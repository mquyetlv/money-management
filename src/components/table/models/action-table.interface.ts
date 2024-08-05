export interface IActionTable {
    tooltip: string,
    icon: string,
    action: (rowData: any) => void,
}