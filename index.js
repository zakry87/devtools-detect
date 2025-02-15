/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/

!function() {
    "use strict";
    const i = {
        isOpen: !1,
        orientation: void 0
    }
      , e = (i,e)=>{
        window.dispatchEvent(new CustomEvent("devtoolschange",{
            detail: {
                isOpen: i,
                orientation: e
            }
        }))
    }
      , n = ({emitEvents: n=!0}={})=>{
        const o = window.outerWidth - window.innerWidth > 168.1
          , t = window.outerHeight - window.innerHeight > 168.1
          , d = o ? "vertical" : "horizontal";
        t && o || !(window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || o || t) ? (i.isOpen && n && e(!1, void 0),
        i.isOpen = !1,
        i.orientation = void 0) : (i.isOpen && i.orientation === d || !n || e(!0, d),
        i.isOpen = !0,
        i.orientation = d)
    }
    ;
    n({
        emitEvents: !1
    }),
    setInterval(n, 500),
    "undefined" != typeof module && module.exports ? module.exports = i : window.devtools = i
}();


export default devtools;
