export declare class worldometer {
    version: string;
    constructor();
    static trackAll(): Promise<{
        totalCases: string;
        totalDeaths: string;
        totalRecovered: string;
        activeCases: string;
        closedCases: string;
        condition: {
            mild: string;
            critical: string;
        };
    }>;
    static trackCountry(query: any): Promise<{
        country: {
            name: string;
            flagImg: string;
        };
        cases: {
            total: string;
            recovered: string;
            deaths: string;
        };
        closedCases: {
            total: string;
            percentage: {
                death: string;
                discharge: string;
            };
        };
    }>;
}
