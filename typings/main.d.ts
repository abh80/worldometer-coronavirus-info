import main from '../src/lib/main'
declare const version ='2.8.0' ;
export {main,version,worldometer_coronavirus_info}
declare function worldometer_coronavirus_info(...args: any[]): any;

declare namespace worldometer_coronavirus_info {
    function trackAll(...args: any[]): void;

    function trackCountry(...args: any[]): void;

}
 
