export interface IFiscalYear {
    fiscalYear: number;
    fiscalMonth: number;
    startDate: Date;
    endDate: Date;
    previous: () => IFiscalYear;
    next: () => IFiscalYear;
}
export declare class FiscalYear implements IFiscalYear {
    fiscalYear: number;
    fiscalMonth: number;
    constructor(fiscalYear: number, fiscalMonth: number);
    get startDate(): Date;
    get endDate(): Date;
    previous(): FiscalYear;
    next(): FiscalYear;
}
