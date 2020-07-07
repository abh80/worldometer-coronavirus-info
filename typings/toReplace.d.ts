import toReplace from '../src/lib/toReplace'
declare function check(...args:string[]):any
declare namespace check{
    function checkReplace(...args:string[]):any
}
export {check}