(this.webpackJsonphome=this.webpackJsonphome||[]).push([[0],{14:function(A,e,t){},19:function(A,e,t){"use strict";t.r(e);var a=t(0),n=t.n(a),i=t(8),s=t.n(i),c=(t(14),t.p+"static/media/horizon.002eb653.svg"),m=t(5),g=t.n(m);function r(){for(var A=document.getElementById("sky"),e=document.body.offsetWidth,t=document.body.offsetHeight,a=document.getElementsByClassName("star")[0],n=parseInt(getComputedStyle(a).width),i=parseInt(getComputedStyle(a).margin),s=function(A){var e=A-2*i,t=Math.floor(e/(n+2*i));return e%(n+i)>n&&t++,t},c=s(e)*s(t)/11,m=1;m<c;m++){var g=a.cloneNode(!0),r=Math.floor(2*Math.random()+1),o=Math.floor(58*Math.random()+2),l=Math.floor(8*Math.random()+2),B=Math.floor(58*Math.random()+2),d=Math.floor(8*Math.random()+2),w=Math.random();g.style.width=r+"px",g.style.height=r+"px",g.style.marginLeft=o+"px",g.style.marginRight=l+"px",g.style.marginTop=B+"px",g.style.marginBottom=d+"px",g.style.opacity=w,A.appendChild(g)}var p=document.getElementsByClassName("star");Array.from(p).forEach((function(A){"1px"===A.style.width&&A.style.opacity<.3&&(A.style.animation="pulseFast 1s infinite"),"1px"===A.style.width&&A.style.opacity>.3&&A.style.opacity<.4&&(A.style.animation="pulseFast .7s infinite"),"2px"===A.style.width&&A.style.opacity>.5&&(A.style.animation="pulseSlow 1.6s infinite")}));for(var M=function(A,e){setTimeout((function(){var A=Math.floor(Math.random()*(c-0)+0);Array.from(p)[A].style.animation="shoot 2s 1"}),e*A)},f=0;f<20;f++){M(f,Math.floor(4e3*Math.random()+1e3))}}var o=t(2);function l(){return Object(a.useEffect)((function(){g.a.send({hitType:"pageview"})}),[]),Object(a.useEffect)(r,[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"sky",children:[Object(o.jsx)("div",{className:"star"}),Object(o.jsx)("div",{className:"content",children:Object(o.jsxs)("div",{className:"icons",children:[Object(o.jsx)("a",{href:"https://gist.github.com/fazeelanizam13",target:"_blank",rel:"noreferrer",title:"gists/github",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:""})}),Object(o.jsx)("a",{href:"https://not-a-tech-blog.web.app/",target:"_blank",rel:"noreferrer",title:"blog",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAAEGklEQVR4nO3bz29UVRjG8ee04EKKiYILLN24sOwxJC5hQxAXYLQaJcYQYkyMujT+A8altKXIyhi70wQb/LGDvdG9GI2hDFWxriRWVPy6ONOYTO/MOXfunXZm7vNZ3rn3Pe95z9xfZ85IZmZmZmZmZmZmZmZmZmZmZmZmZmY2LkIdQYBJSUckHZV0WNIhSQckTUnaXSV2CKFSjgBVjpf0t6Q7ktYkXZf0taRrkr4KIfxbMXa1AQBmJL0m6Yyk6arJFBmCAeimJWlZ0oUQQmtAbRQDHgYuAXcZsBpyHbS7wBKwr47a5nToBeC3begYMBIDsGkdeK5sftmnN7Bb0pKkc2UbqWKIL0HdvC/p9RDCPzk7Z3UOuF/SJ5JOVEisLyM4AJL0uaS5EMIfqR2TnWt/81e0A8WXRnYApDgIp1JnwkRGoCXtUPFH3ElJ85UiAC+WvBHdAOaB48AssKeevuwcYE+7L8eBBWC1ZE3m+m14H/BrZiMt4BXiC9lYAyaAZ4EfM2uzDuzvp6FLmQ1cBqYG0NehBuwFVjJrtFg2+Ax5L1nvATn3kbFEPBvOZ9TpTyB/pgB4NyPo5SYXf1N7EHLOhHdyA04Sr+m93KSBl51uiJejW4marWZ9YYEnMkbz7Db0a6QA5zLqdqTzuKIROZpoa1XSh7VkPV4+UJwh7eVY54ZdBTs9ngjyaQjhXm5WnWDH3kyz9PvmHUK4B6woTs93c7hzQ9EZ8FiirS/LJNYwXyQ+n+3cUDQABxJBvs9Op3l+SHy+pbZFA5B6uvk5O53muZX4fG/nhsY/x9esdD2LDriTOOaRso00SKo2v3duKBqAnxJBHs1Op3lStdlS26IBuJ4IcjI7neZ5KvH5t8kIwNsZr9RjP+1cFrCLOEXTy1udxxWdAdcSbc1IermWrMfLWUkHE/tcTUYhzu6lRrIFbHmkairgAWAtUbMbFEzGbdnQXm63nGhzWtJyUcCmaddgWekX2OXspYzAQfJ+kDnf5EFoXy3mM+q0AZR7fCcut8uxQgMvR8TLzpXMGpVfHQE8BNzObOA28CZQNLs6Vojf+pdIX/M3rdPvulHg+cxGNt0EFoETwCHG4FczYKrdlyeBC6QfUDo90yt+zsq4i5Jera1HJY3wyjhJWgghvNFrh5wBmJT0saTTdWVVxggPwGeSTldemtj+9euM4lpHy3NFcXFucoV01iNke5XvKUkXKybWBAuSng4hbAwkOjBH/pLFymrId7v8QuKGWxviI+oiccXXQNWQ66BtEF/GHuwnv6o3uGn9/ye9mSqxuhnim/CqpI8kLYUQ1voNUtffVCcUl7McU1x6Mas4XzQl6b4qsYdgAP5S/JWwJek7xb+pXpX0TR1/UzUzMzMzMzMzMzMzMzMzMzMzMzMzs/HxH0FQ0ox5cqvaAAAAAElFTkSuQmCC",alt:""})}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/fazeelanizam/",target:"_blank",rel:"noreferrer",title:"linkedin",children:Object(o.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAADrklEQVR4nO3dT4hVZRjH8e+TlsqUu3AhiAiuZqxWQdFGcxQ120iuAoWMXLRpFbSIoH0KaijMUBs3I2hJUjbWooWLNrnInVQKQjBtSoX+OD4t3guOMmfuOe8957znvuf3gdnMue97nvv+5p45f95zD4iIiIiIiIiISF/YqB24+zbgCPAqsBmYGLXPjrsH/AZcAWbM7OdROosOwN3XAMeAd4AnRilijD0ATgPvmdm/MR1EBTAY/K+B7THtM/Q9sCcmhNi/3ONo8JfaAXwS07DyJ2Cwzb9Gfzc7RRaB583sepVGMYN4JLJd7lYBb1VtFDOQOyPa9MV01QYxm6A7wNNV2/XEHTNbX6VBTABetU2fmFmlMdW2PDEFkJgCSEwBJLY6wTqvAheAG4SDly3AQeDlBLUk1+Ze0N/AITObK+j3MDBDOKAZW13eC3q3aPABzOxz4KMW6+mEtj4Bt4FNZvZgSN8TwAKwLmIdndDVT8CPwwYfwMzuASNd4Bg3bQUwdPCXWGysig5qK4DnyrxocKFnsuFaOqWtALa6+94Sr3sbeKbpYrqkzd3QBWCXmV0r6Hc/MAesjey/E6r+E277bOg/wGfAl8BNYA0wRTgQey2mnq7pegDZ6+puqBRQAIkpgMQUQGJtBfC7lVSirzdK9nNySZv/gC+Ao8CLwAbC7u46wunwN4Fv6n3L5aS4HtC284S5m7cKlv86+Dnr7vuAWUJArch9E/SxmR1YYfAfYWaXCPOe/mi2rIdyDuCimX1YtdFguvnhBupZVrYBmNn8CG0vEY7WG5dtADU41sZKFECxH4Bfml5J9gG4+2p33+fu77v7fncv9Z7NzIFvGy4v791Qd98IfAW8sOTXl9399ZJ3s/zUTGUPZfsJcHcDzvHo4APsBj4o2c2y1y7qlG0AhIleLxUsOzoIaJiFGutZVs4BvLLCsg2EW2qH+bOmWgrlHMCw0wnPlujjrzoKWUnOATw54nLM7H5NtRTKOYCxoAASUwCJKYDEFEBiCiAxBZCYAkhMASSmABJTAIkpgMQUQGIKIDHdoFEz3aAxZhRAYgogMQWQmAJITAEkpgASiwngbu1V5KPyPKKYAErd7tNTlccmJoDoO096oPJ09phTEVOEWcNj/eV6DWjn6+sHN7GdqdquBz6tOvgQ/wiTpwiPMNkR0z5D3wF7W3uEyWBFe4BT9Ow73h6zCJwgcvChnsdYTRKeHDFNmHOf+7MF7hIeYzUPzMZsdkREREREREREpJ/+B6oizAftEoUzAAAAAElFTkSuQmCC",alt:""})}),Object(o.jsx)("a",{href:"https://www.behance.net/fazeelanizam",target:"_blank",rel:"noreferrer",title:"behance",children:Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:""})})]})}),Object(o.jsx)("img",{id:"horizon",src:c,alt:"horizon"})]})})}var B=t(9),d=t(1);function w(){return Object(o.jsx)(B.a,{basename:"/home",children:Object(o.jsx)(d.c,{children:Object(o.jsx)(d.a,{exact:!0,path:"/",element:Object(o.jsx)(l,{})})})})}g.a.initialize("G-G2NXQDLY4P"),s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(w,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cc281fe4.chunk.js.map