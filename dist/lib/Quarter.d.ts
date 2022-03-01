import { IFiscalYear } from './FiscalYear';
export interface IFiscalQuarter {
    fy: IFiscalYear;
    startDate: Date;
    endDate: Date;
    quarterNumber: number;
    quarterString: string;
    previous: () => IFiscalQuarter;
    next: () => IFiscalQuarter;
}
export declare class Quarter implements IFiscalQuarter {
    fy: IFiscalYear;
    private _month;
    private _quarterMap;
    constructor(fy: IFiscalYear, month: number);
    get quarterNumber(): number;
    get quarterString(): string;
    get startDate(): Date;
    get endDate(): Date;
    previous(): IFiscalQuarter;
    next(): IFiscalQuarter;
}
