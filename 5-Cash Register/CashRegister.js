var STATE;
(function (STATE) {
    STATE["INSUFFICIENT_FUNDS"] = "INSUFFICIENT_FUNDS";
    STATE["CLOSED"] = "CLOSED";
    STATE["OPEN"] = "OPEN";
})(STATE || (STATE = {}));
var CashRegister = /** @class */ (function () {
    /**
     *
     * @param cid array of denomination with it's value
     */
    function CashRegister(cid) {
        this.totalInRegister = 0;
        this.CHANGE = [
            ["ONE HUNDRED", 100],
            ["TWENTY", 20],
            ["TEN", 10],
            ["FIVE", 5],
            ["ONE", 1],
            ["QUARTER", 0.25],
            ["DIME", 0.1],
            ["NICKEL", 0.05],
            ["PENNY", 0.01],
        ];
        this.cash = {
            PENNY: 0,
            NICKEL: 0,
            DIME: 0,
            QUARTER: 0,
            ONE: 0,
            FIVE: 0,
            TEN: 0,
            TWENTY: 0,
            "ONE HUNDRED": 0
        };
        for (var _i = 0, cid_1 = cid; _i < cid_1.length; _i++) {
            var denomination = cid_1[_i];
            this.cash[denomination[0]] = denomination[1];
            this.totalInRegister += denomination[1];
        }
        this.state = STATE.OPEN;
    }
    /**
     *
     * @param price  the item price
     * @param cash the cash given by the customer
     * @returns the current state of the register
     */
    CashRegister.prototype.giveChange = function (price, cash) {
        var required_change = +(cash - price).toFixed(2);
        var given = [
            ["ONE HUNDRED", 0],
            ["TWENTY", 0],
            ["TEN", 0],
            ["FIVE", 0],
            ["ONE", 0],
            ["QUARTER", 0],
            ["DIME", 0.0],
            ["NICKEL", 0],
            ["PENNY", 0],
        ];
        if (required_change > this.totalInRegister) {
            this.state = STATE.INSUFFICIENT_FUNDS;
            return { status: this.state, change: [] };
        }
        for (var i = 0; i < this.CHANGE.length; i++) {
            while (required_change >= this.CHANGE[i][1] &&
                this.cash[this.CHANGE[i][0]] > 0) {
                required_change = +(required_change - this.CHANGE[i][1]).toFixed(2);
                this.cash[this.CHANGE[i][0]] -= this.CHANGE[i][1];
                given[i][1] = +(given[i][1] + this.CHANGE[i][1]).toFixed(2);
                this.totalInRegister = +(this.totalInRegister - this.CHANGE[i][1]).toFixed(2);
            }
        }
        console.log(given, this.totalInRegister);
        if (required_change === 0 && this.totalInRegister === 0) {
            this.state = STATE.CLOSED;
            return { status: this.state, change: given.reverse() };
        }
        else if (required_change === 0 && this.totalInRegister > 0) {
            this.state = STATE.OPEN;
            given = given.filter(function (el) {
                return el[1] !== 0;
            });
            return { status: this.state, change: given };
        }
        else {
            this.state = STATE.INSUFFICIENT_FUNDS;
            return { status: this.state, change: [] };
        }
    };
    return CashRegister;
}());
var cashRegister = new CashRegister([
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);
console.log(cashRegister.giveChange(3.26, 100));
