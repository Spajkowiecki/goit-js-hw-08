function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},l={},a={},o=t.parcelRequire4c75;null==o&&((o=function(e){if(e in l)return l[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return l[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequire4c75=o);var r=o("kEUo3");const n=document.querySelector("form"),u=n.querySelector("label > input");let f=n.querySelector("label > textarea");n.addEventListener("input",e(r).throttle((e=>{let t={email:u.value,message:f.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500));let i=JSON.parse(localStorage.getItem("feedback-form-state"));null===localStorage.getItem("feedback-form-state")?(u.value="",f.value=""):(u.value=i.email,f.value=i.message),n.addEventListener("submit",(e=>{e.preventDefault(),console.log(localStorage.getItem("feedback-form-state")),u.value="",f.value="",localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.16447bcf.js.map