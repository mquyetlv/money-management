export class Pagination {
    private _total: number = 0;
    private _pageSize = 10;
    private _pageNumber = 0;

    constructor (total = 0, pageSize = 10, pageNumber = 0) {
        this._pageNumber = pageNumber;
        this._pageSize = pageSize;
        this._total = total;
    }

    set page(pageNumber: number) {
        this._pageNumber = pageNumber;
    }

    get page(): number {
        return this._pageNumber;
    }

    set size(pageSize: number) {
        this._pageSize = pageSize;
    }

    get size(): number {
        return this._pageSize;
    }

    set total(total: number) {
        this._total = total;
    }

    get total(): number {
        return this._total;
    }
}