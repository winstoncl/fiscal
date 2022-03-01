import { FiscalInfo } from './interfaces';
export declare class Fiscal {
    fiscalMonth: number;
    constructor(fiscalMonth: number);
    getFiscalInfoForDate(date: Date): FiscalInfo;
}
