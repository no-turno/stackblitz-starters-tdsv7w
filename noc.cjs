/// <reference types="systemjs"/>
/// <reference lib="scripthost"/>
/// <reference lib="webworker"/>

module.exports = {
    get $() {
        return btoa('$')
    },
    get _() {
        return btoa('_')
    },
    get "&"() {
        return btoa('&')
    },
    get ">_"() {
        return btoa('>_')
    },
    $_: {},
    __: {},
    "&_": {},
    ">_": {}
}