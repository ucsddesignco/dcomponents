(()=>{"use strict";var e={554:(e,t,r)=>{r.r(t)},523:(e,t,r)=>{r.r(t)},636:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(556));t.default=function(e){var t=e.initialCount,r=(0,i.useState)(t),n=r[0],o=r[1];return i.default.createElement("div",null,i.default.createElement("p",null,"Count: ",n),i.default.createElement("button",{onClick:function(){o(n-1)}},"-1"),i.default.createElement("button",{onClick:function(){o(n+1)}},"+1"))}},106:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(636);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},638:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),u=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var i=u(r(556));r(554),t.default=function(e){var t=e.autoplay,r=void 0===t||t;console.log(r);var n=(0,i.useState)(!1),o=n[0],u=n[1],l=function(){u(!0)};return i.default.createElement("div",{className:"dcomp-gort"},"Click Gort.",i.default.createElement("img",{id:"dcomp-gort-img",src:"https://ih1.redbubble.net/image.3919572071.7167/pp,504x498-pad,600x600,f8f8f8.jpg",style:{display:o?"none":"block"},onClick:l,onKeyDown:function(e){" "!==(null==e?void 0:e.key)&&"Enter"!==(null==e?void 0:e.key)||(null==e||e.preventDefault(),l())},role:"button",alt:"Gort",tabIndex:0,"aria-hidden":o,"aria-label":"Select to see something fun"}),o&&i.default.createElement("iframe",{id:"dcomp-gort-iframe",src:"https://www.youtube.com/embed/lvwZQTB4iv4?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1",title:"capybara ok i pull up",allow:r?"autoplay":""}))}},815:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(638);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},392:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(r(556));r(523),t.default=function(e){var t=e.size,r=void 0===t?"medium":t,n=e.foregroundColor,u=void 0===n?"#ffffff":n,i=e.backgroundColor,l=void 0===i?"#000000":i,a=e.children,f="medium"===r?12:8,d="medium"===r?16:12;return o.default.createElement("div",{className:"Label",style:{color:u,background:l,padding:f,fontSize:d}},a)}},115:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(392);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(o).default}})},607:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Gort=t.Label=t.Counter=void 0;var o=r(106);Object.defineProperty(t,"Counter",{enumerable:!0,get:function(){return n(o).default}});var u=r(115);Object.defineProperty(t,"Label",{enumerable:!0,get:function(){return n(u).default}});var i=r(815);Object.defineProperty(t,"Gort",{enumerable:!0,get:function(){return n(i).default}})},556:e=>{e.exports=require("react")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var u=t[n]={exports:{}};return e[n].call(u.exports,u,u.exports,r),u.exports}r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n=r(607);module.exports=n})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Im14QkFBQSxnQkE2QkEsVUF2QmdCLFNBQUMsRyxJQUFFQSxFQUFZLGVBQ3ZCLEdBQW9CLElBQUFDLFVBQVNELEdBQTVCRSxFQUFLLEtBQUVDLEVBQVEsS0FDdEIsT0FDRSxtQ0FDRSxpQyxVQUFXRCxHQUNYLGtDQUNFRSxRQUFTLFdBQ1BELEVBQVNELEVBQVEsRUFDbkIsR0FBQyxNQUlILGtDQUNFRSxRQUFTLFdBQ1BELEVBQVNELEVBQVEsRUFDbkIsR0FBQyxNQU1ULEMsNEtDM0JBLGFBQVMsNEVBQUFHLE9BQU8sRywrc0JDQWhCLGdCQUNBLE9Bd0RBLFVBN0NBLFNBQWMsRyxJQUFFLElBQUFDLFNBQUFBLE9BQVEsSUFBRyxHQUFJLEVBQzdCQyxRQUFRQyxJQUFJRixHQUVOLE9BQXNCLElBQUFMLFdBQWtCLEdBQXZDUSxFQUFNLEtBQUVDLEVBQVMsS0FFbEJDLEVBQVcsV0FDZkQsR0FBVSxFQUNaLEVBV0EsT0FDRSwrQkFBS0UsVUFBVSxjLGNBRWIsK0JBQ0VDLEdBQUcsaUJBQ0hDLElBM0JOLG9GQTRCTUMsTUFBTyxDQUFFQyxRQUFVUCxFQUFtQixPQUFWLFNBQzVCTCxRQUFTTyxFQUNUTSxVQWpCd0MsU0FDNUNDLEdBRWUsT0FBWEEsYUFBQyxFQUFEQSxFQUFHQyxNQUEwQixXQUFYRCxhQUFDLEVBQURBLEVBQUdDLE9BQ3ZCRCxTQUFBQSxFQUFHRSxpQkFDSFQsSUFFSixFQVdNVSxLQUFLLFNBQ0xDLElBQUksT0FDSkMsU0FBVSxFQUFDLGNBQ0VkLEVBQU0sYUFDUixnQ0FFWkEsR0FDQyxrQ0FDRUksR0FBRyxvQkFDSEMsSUF0Q1Isb0dBdUNRVSxNQUFNLHdCQUNOQyxNQUFPbkIsRUFBVyxXQUFhLEtBS3pDLEMsNEtDdkRBLGFBQVMsNEVBQUFELE9BQU8sRywySkNBaEIsZ0JBQ0EsT0FxQ0EsVUF4QmMsU0FBQyxHLElBQ2IsSUFBQXFCLEtBQUFBLE9BQUksSUFBRyxXQUFRLEVBQ2YsSUFBQUMsZ0JBQUFBLE9BQWUsSUFBRyxZQUFTLEVBQzNCLElBQUFDLGdCQUFBQSxPQUFlLElBQUcsWUFBUyxFQUMzQkMsRUFBUSxXQUVGQyxFQUFtQixXQUFUSixFQUFvQixHQUFLLEVBQ25DSyxFQUFvQixXQUFUTCxFQUFvQixHQUFLLEdBRTFDLE9BQ0UsK0JBQ0VkLFVBQVUsUUFDVkcsTUFBTyxDQUNMaUIsTUFBT0wsRUFDUE0sV0FBWUwsRUFDWkUsUUFBTyxFQUNQQyxTQUFRLElBR1RGLEVBR1AsQyw0S0NwQ0EsYUFBUyw0RUFBQXhCLE9BQU8sRywyTENBaEIsYUFBUyw0RUFBQUEsT0FBTyxJQUNoQixhQUFTLDBFQUFBQSxPQUFPLElBQ2hCLGFBQVMseUVBQUFBLE9BQU8sRyxVQ0ZoQjZCLEVBQU9DLFFBQVVDLFFBQVEsUSxHQ0NyQkMsRUFBMkIsQ0FBQyxFQUdoQyxTQUFTQyxFQUFvQkMsR0FFNUIsSUFBSUMsRUFBZUgsRUFBeUJFLEdBQzVDLFFBQXFCRSxJQUFqQkQsRUFDSCxPQUFPQSxFQUFhTCxRQUdyQixJQUFJRCxFQUFTRyxFQUF5QkUsR0FBWSxDQUdqREosUUFBUyxDQUFDLEdBT1gsT0FIQU8sRUFBb0JILEdBQVVJLEtBQUtULEVBQU9DLFFBQVNELEVBQVFBLEVBQU9DLFFBQVNHLEdBR3BFSixFQUFPQyxPQUNmLENDckJBRyxFQUFvQk0sRUFBS1QsSUFDSCxvQkFBWFUsUUFBMEJBLE9BQU9DLGFBQzFDQyxPQUFPQyxlQUFlYixFQUFTVSxPQUFPQyxZQUFhLENBQUVHLE1BQU8sV0FFN0RGLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFYyxPQUFPLEdBQU8sRUNGOUQsSUFBSUMsRUFBc0JaLEVBQW9CLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wb25lbnQtbGliLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9Db3VudGVyL0NvdW50ZXIudHN4Iiwid2VicGFjazovL2NvbXBvbmVudC1saWItZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL0NvdW50ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29tcG9uZW50LWxpYi1leGFtcGxlLy4vc3JjL2NvbXBvbmVudHMvR29ydC9Hb3J0LnRzeCIsIndlYnBhY2s6Ly9jb21wb25lbnQtbGliLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9Hb3J0L2luZGV4LnRzIiwid2VicGFjazovL2NvbXBvbmVudC1saWItZXhhbXBsZS8uL3NyYy9jb21wb25lbnRzL0xhYmVsL0xhYmVsLnRzeCIsIndlYnBhY2s6Ly9jb21wb25lbnQtbGliLWV4YW1wbGUvLi9zcmMvY29tcG9uZW50cy9MYWJlbC9pbmRleC50cyIsIndlYnBhY2s6Ly9jb21wb25lbnQtbGliLWV4YW1wbGUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vY29tcG9uZW50LWxpYi1leGFtcGxlL2V4dGVybmFsIGNvbW1vbmpzLW1vZHVsZSBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vY29tcG9uZW50LWxpYi1leGFtcGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2NvbXBvbmVudC1saWItZXhhbXBsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2NvbXBvbmVudC1saWItZXhhbXBsZS93ZWJwYWNrL3N0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ291bnRlclByb3BzIHtcbiAgaW5pdGlhbENvdW50OiBudW1iZXI7XG59XG5cbmNvbnN0IENvdW50ZXIgPSAoeyBpbml0aWFsQ291bnQgfTogQ291bnRlclByb3BzKSA9PiB7XG4gIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoaW5pdGlhbENvdW50KTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPHA+Q291bnQ6IHtjb3VudH08L3A+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRDb3VudChjb3VudCAtIDEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICAtMVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICBzZXRDb3VudChjb3VudCArIDEpO1xuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICArMVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCIuL0NvdW50ZXJcIjtcbiIsImltcG9ydCBSZWFjdCwgeyBLZXlib2FyZEV2ZW50SGFuZGxlciwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBcIi4vR29ydC5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgR29ydFByb3BzIHtcbiAgYXV0b3BsYXk/OiBib29sZWFuO1xufVxuXG5jb25zdCBnb3J0SW1nID1cbiAgXCJodHRwczovL2loMS5yZWRidWJibGUubmV0L2ltYWdlLjM5MTk1NzIwNzEuNzE2Ny9wcCw1MDR4NDk4LXBhZCw2MDB4NjAwLGY4ZjhmOC5qcGdcIjtcbmNvbnN0IGdvcnRWaWQgPVxuICBcImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL2x2d1pRVEI0aXY0P3JlbD0wP3ZlcnNpb249MyZhdXRvcGxheT0xJmNvbnRyb2xzPTAmc2hvd2luZm89MCZsb29wPTFcIjtcblxuZnVuY3Rpb24gR29ydCh7IGF1dG9wbGF5ID0gdHJ1ZSB9OiBHb3J0UHJvcHMpIHtcbiAgY29uc29sZS5sb2coYXV0b3BsYXkpO1xuXG4gIGNvbnN0IFtwdWxsVXAsIHNldFB1bGxVcF0gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XG5cbiAgY29uc3QgcGxheUdvcnQgPSAoKSA9PiB7XG4gICAgc2V0UHVsbFVwKHRydWUpO1xuICB9O1xuXG4gIGNvbnN0IGtleVByZXNzSGFuZGxlcjogS2V5Ym9hcmRFdmVudEhhbmRsZXIgPSAoXG4gICAgZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxFbGVtZW50PlxuICApID0+IHtcbiAgICBpZiAoZT8ua2V5ID09PSBcIiBcIiB8fCBlPy5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgZT8ucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHBsYXlHb3J0KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkY29tcC1nb3J0XCI+XG4gICAgICBDbGljayBHb3J0LlxuICAgICAgPGltZ1xuICAgICAgICBpZD1cImRjb21wLWdvcnQtaW1nXCJcbiAgICAgICAgc3JjPXtnb3J0SW1nfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiAhcHVsbFVwID8gXCJibG9ja1wiIDogXCJub25lXCIgfX1cbiAgICAgICAgb25DbGljaz17cGxheUdvcnR9XG4gICAgICAgIG9uS2V5RG93bj17a2V5UHJlc3NIYW5kbGVyfVxuICAgICAgICByb2xlPVwiYnV0dG9uXCJcbiAgICAgICAgYWx0PVwiR29ydFwiXG4gICAgICAgIHRhYkluZGV4PXswfVxuICAgICAgICBhcmlhLWhpZGRlbj17cHVsbFVwfVxuICAgICAgICBhcmlhLWxhYmVsPVwiU2VsZWN0IHRvIHNlZSBzb21ldGhpbmcgZnVuXCJcbiAgICAgIC8+XG4gICAgICB7cHVsbFVwICYmIChcbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGlkPVwiZGNvbXAtZ29ydC1pZnJhbWVcIlxuICAgICAgICAgIHNyYz17Z29ydFZpZH1cbiAgICAgICAgICB0aXRsZT1cImNhcHliYXJhIG9rIGkgcHVsbCB1cFwiXG4gICAgICAgICAgYWxsb3c9e2F1dG9wbGF5ID8gXCJhdXRvcGxheVwiIDogXCJcIn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdvcnQ7XG4iLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Hb3J0J1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwiLi9MYWJlbC5zY3NzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGFiZWxQcm9wcyB7XG4gIC8qKiAgU2V0cyB0aGUgc2l6ZSovXG4gIHNpemU/OiBcIm1lZGl1bVwiIHwgXCJzbWFsbFwiO1xuICAvKiogIFNldHMgdGhlIHRleHQgY29sb3IgKi9cbiAgZm9yZWdyb3VuZENvbG9yPzogc3RyaW5nO1xuICAvKiogIFNldHMgdGhlIGJhY2tncm91bmQgY29sb3IgKi9cbiAgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nO1xuICAvKiogIFNldHMgdGhlIGxhYmVsIHRleHQgKi9cbiAgY2hpbGRyZW46IHN0cmluZztcbn1cblxuY29uc3QgTGFiZWwgPSAoe1xuICBzaXplID0gXCJtZWRpdW1cIixcbiAgZm9yZWdyb3VuZENvbG9yID0gXCIjZmZmZmZmXCIsXG4gIGJhY2tncm91bmRDb2xvciA9IFwiIzAwMDAwMFwiLFxuICBjaGlsZHJlbixcbn06IExhYmVsUHJvcHMpID0+IHtcbiAgY29uc3QgcGFkZGluZyA9IHNpemUgPT09IFwibWVkaXVtXCIgPyAxMiA6IDg7XG4gIGNvbnN0IGZvbnRTaXplID0gc2l6ZSA9PT0gXCJtZWRpdW1cIiA/IDE2IDogMTI7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJMYWJlbFwiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBjb2xvcjogZm9yZWdyb3VuZENvbG9yLFxuICAgICAgICBiYWNrZ3JvdW5kOiBiYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIHBhZGRpbmcsXG4gICAgICAgIGZvbnRTaXplLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYWJlbDtcbiIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLi9MYWJlbFwiO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb3VudGVyIH0gZnJvbSBcIi4vY29tcG9uZW50cy9Db3VudGVyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExhYmVsIH0gZnJvbSBcIi4vY29tcG9uZW50cy9MYWJlbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBHb3J0IH0gZnJvbSBcIi4vY29tcG9uZW50cy9Hb3J0XCI7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYwNyk7XG4iXSwibmFtZXMiOlsiaW5pdGlhbENvdW50IiwidXNlU3RhdGUiLCJjb3VudCIsInNldENvdW50Iiwib25DbGljayIsImRlZmF1bHQiLCJhdXRvcGxheSIsImNvbnNvbGUiLCJsb2ciLCJwdWxsVXAiLCJzZXRQdWxsVXAiLCJwbGF5R29ydCIsImNsYXNzTmFtZSIsImlkIiwic3JjIiwic3R5bGUiLCJkaXNwbGF5Iiwib25LZXlEb3duIiwiZSIsImtleSIsInByZXZlbnREZWZhdWx0Iiwicm9sZSIsImFsdCIsInRhYkluZGV4IiwidGl0bGUiLCJhbGxvdyIsInNpemUiLCJmb3JlZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjaGlsZHJlbiIsInBhZGRpbmciLCJmb250U2l6ZSIsImNvbG9yIiwiYmFja2dyb3VuZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwiX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiY2FjaGVkTW9kdWxlIiwidW5kZWZpbmVkIiwiX193ZWJwYWNrX21vZHVsZXNfXyIsImNhbGwiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJzb3VyY2VSb290IjoiIn0=