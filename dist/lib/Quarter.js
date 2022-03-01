"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quarter = void 0;
/*
 * Creates a map of the calendar months (0 indexed) that map to the quarters
 * This is a "private" function.
 */
function createQuarterMap(fiscalMonth) {
    const quarterMap = {};
    for (let monthCount = fiscalMonth; monthCount < fiscalMonth + 12; monthCount++) {
        const monthNum = monthCount % 12; // calendar month num 0 - 11 inclusive
        if (monthCount < fiscalMonth + 3) {
            quarterMap[monthNum] = {
                quarterNumber: 1,
                quarterString: 'Q1',
            };
        }
        else if (monthCount < fiscalMonth + 6) {
            quarterMap[monthNum] = {
                quarterNumber: 2,
                quarterString: 'Q2',
            };
        }
        else if (monthCount < fiscalMonth + 9) {
            quarterMap[monthNum] = {
                quarterNumber: 3,
                quarterString: 'Q3',
            };
        }
        else {
            quarterMap[monthNum] = {
                quarterNumber: 4,
                quarterString: 'Q4',
            };
        }
    }
    return quarterMap;
}
class Quarter {
    /*
     * Quarter - Represents an single quarter and contains information about it
     * @param fiscalYearInstance: The fiscal year that the quarter is in (FiscalYear class instance)
     * @param month: The calendar month in the quarter (0 - 11)
     */
    fy;
    _month;
    _quarterMap;
    constructor(fy, month) {
        this.fy = fy;
        this._month = month;
        this._quarterMap = createQuarterMap(this.fy.fiscalMonth);
    }
    // Returns the quarter number (1 - 4)
    get quarterNumber() {
        return this._quarterMap[this._month].quarterNumber;
    }
    // Returns the quarter as a string (Q1, Q2, Q3, Q4)
    get quarterString() {
        return this._quarterMap[this._month].quarterString;
    }
    // Returns the start of this quarter represented as a calendar date
    get startDate() {
        return new Date(this.fy.startDate.getFullYear(), this.fy.fiscalMonth + (this.quarterNumber - 1) * 3);
    }
    // Returns the end of this quarter represented as a calendar date
    get endDate() {
        return new Date(this.fy.startDate.getFullYear(), this.fy.fiscalMonth + this.quarterNumber * 3, 0, 23, 59, 59, 999);
    }
    previous() {
        let tmpFY = this.fy;
        let tmpMonth = this._month;
        if (this.quarterNumber === 1) {
            tmpFY = this.fy.previous();
        }
        // subtracting three months will cause the months to wrap
        // handle the reverse-wrap around case
        if (tmpMonth <= 2) {
            // subtract 2 because months are 0 indexed
            // 12 + (2 - 3) --> 11 aka December
            // 12 + (1 - 3) --> 10 aka November
            // 12 + (0 - 3) --> 9 aka October
            tmpMonth = 12 + (tmpMonth - 3);
        }
        else {
            tmpMonth -= 3;
        }
        return new Quarter(tmpFY, tmpMonth);
    }
    next() {
        let tmpFY = this.fy;
        let tmpMonth = this._month;
        if (this.quarterNumber === 4) {
            tmpFY = this.fy.next();
        }
        // subtracting three months will cause the months to wrap
        // handle the reverse-wrap around case
        if (tmpMonth >= 9) {
            // subtract 2 because months are 0 indexed
            // (9 + 3) - 12 --> 0 aka January
            // (10 + 3) - 12 --> 1 aka Feburary
            // (11 + 3) - 12 --> 2 aka March
            tmpMonth = tmpMonth + 3 - 12;
        }
        else {
            tmpMonth += 3;
        }
        return new Quarter(tmpFY, tmpMonth);
    }
}
exports.Quarter = Quarter;
//# sourceMappingURL=Quarter.js.map