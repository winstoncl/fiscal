"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fiscal = void 0;
const Quarter_1 = require("./lib/Quarter");
const FiscalYear_1 = require("./lib/FiscalYear");
function getYearDeltaForCalendarMonth(fiscalMonth, monthNum) {
    // if fiscal months match up with calendar, there is never a delta
    if (fiscalMonth === 0) {
        return 0;
    }
    if (monthNum >= fiscalMonth) {
        // we are in the "next" fiscal year as compared to the calendar year
        return 1;
    }
    else {
        return 0;
    }
}
class Fiscal {
    fiscalMonth;
    constructor(fiscalMonth) {
        this.fiscalMonth = fiscalMonth;
    }
    getFiscalInfoForDate(date) {
        date = date || new Date(); // optional parameter
        const fiscalYear = date.getFullYear() + getYearDeltaForCalendarMonth(this.fiscalMonth, date.getMonth());
        const fy = new FiscalYear_1.FiscalYear(fiscalYear, this.fiscalMonth);
        const quarter = new Quarter_1.Quarter(fy, date.getMonth());
        return {
            fiscalYear: fy,
            quarter,
            calendar: {
                calendarMonth: date.getMonth(),
                calendarYear: date.getFullYear(),
            },
        };
    }
}
exports.Fiscal = Fiscal;
//# sourceMappingURL=index.js.map