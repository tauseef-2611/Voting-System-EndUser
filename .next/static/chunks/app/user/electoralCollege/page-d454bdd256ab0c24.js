(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{4824:function(e,r,t){Promise.resolve().then(t.bind(t,3790))},809:function(e,r,t){"use strict";t.d(r,{Gg:function(){return o},Qk:function(){return s},XR:function(){return a}}),t(4590);var n=t(8064);(0,n.$)("722ed65feea5b21261bbd2c76a7f077b1d509037"),(0,n.$)("6e3a33b373d25097280279d1c091fc56c15c844f"),(0,n.$)("35d4c1441f5f064fdebf725c84a6fb8128d8a81c"),(0,n.$)("01a038b941520912faba054f25a519491687433d"),(0,n.$)("31c603db583e6f4979512039e3a77f9ed93048f0");var a=(0,n.$)("37a5a71dc1211cb496f250b7079bb409ff231298"),s=(0,n.$)("beddca5024040d472c74a752bd260aad0d5e71ed"),o=(0,n.$)("796f752e6ac3f9cff407e402a73d9720c3fdb593");(0,n.$)("a3d3abb1e9e0d23ce2919fdc20b5d51b8dc3863b")},9809:function(e,r,t){"use strict";t.d(r,{a:function(){return d},d:function(){return c}});var n=t(7437),a=t(2265),s=t(809),o=t(6463);let i=(0,a.createContext)(void 0),c=e=>{let{children:r}=e,[t,c]=(0,a.useState)(null),d=(0,o.useRouter)();return(0,a.useEffect)(()=>{(async()=>{let e=await (0,s.Gg)();e?c(e.user):(alert("You are not logged in"),d.push("/"))})()},[d]),(0,n.jsx)(i.Provider,{value:{user:t,setUser:c},children:r})},d=()=>{let e=(0,a.useContext)(i);if(void 0===e)throw Error("useUser must be used within a UserProvider");return e}},3790:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var n=t(7437),a=t(2265),s=t(8472),o=t(6463),i=t(4693),c=t(495),d=t(6013),u=t(7138),l=t(9809),f=e=>{let{election:r}=e,{user:t}=(0,l.a)();return(0,n.jsxs)(d.Zb,{className:"max-w-sm mx-auto my-4 shadow-lg sm:max-w-md",children:[(0,n.jsxs)(d.Ol,{children:[(0,n.jsxs)(d.ll,{children:[r.area," Elections"]}),(0,n.jsxs)(d.SZ,{children:[r.type," Election"]})]}),(0,n.jsxs)(d.aY,{children:[(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"Area Nominees:"})," ",r.perAreaNominees["".concat(null==t?void 0:t.area)]]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("strong",{children:"Status:"}),(0,n.jsx)(i.C,{children:r.status})]})]}),(0,n.jsxs)(d.SZ,{className:"mt-4",children:[(0,n.jsxs)("strong",{children:["(Article 7.B)",(0,n.jsx)("br",{})," Criteria for electing members of the Advisory Council"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("li",{children:"He should be a member of the Organisation but should not aspire to the membership of the Advisory Council or any other post in the Organisation."}),(0,n.jsx)("li",{children:"He should be, on the whole, better than other members in his electoral constituency in terms of religious knowledge, piety, understanding of affairs, sagacity and soundness of opinion, observance of the Constitution, and steadfastness in the way of Allah."})]})]}),(0,n.jsx)(u.default,{href:"/user/electoralCollege/vote",children:(0,n.jsx)(c.z,{className:"mt-4",children:"Next"})})]})]})},h=t(7776);function b(){let[e,r]=(0,a.useState)(null),t=(0,o.useRouter)(),{user:i}=(0,l.a)();return(0,a.useEffect)(()=>{if(!i)return;let e=async()=>{try{if(!(await s.Z.get("/api/voter-present/".concat(i.voter_id))).data.present){h.A.error("Your attendance is not marked"),t.push("/user");return}h.A.success("Your attendance is marked")}catch(e){console.error("Error fetching data:",e),h.A.error("Something went wrong"),t.push("/")}};s.Z.get("/api/election").then(e=>{"Electoral College"!==e.data[0].type?t.push("/"):r(e.data[0])}).catch(e=>{console.log(e),alert("Something went wrong"),t.push("/")}),e()},[i,t]),(0,n.jsx)("div",{children:e&&(0,n.jsx)(f,{election:e})})}},4693:function(e,r,t){"use strict";t.d(r,{C:function(){return i}});var n=t(7437);t(2265);var a=t(2218),s=t(7440);let o=(0,a.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function i(e){let{className:r,variant:t,...a}=e;return(0,n.jsx)("div",{className:(0,s.cn)(o({variant:t}),r),...a})}},495:function(e,r,t){"use strict";t.d(r,{d:function(){return c},z:function(){return d}});var n=t(7437),a=t(2265),s=t(1538),o=t(2218),i=t(7440);let c=(0,o.j)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef((e,r)=>{let{className:t,variant:a,size:o,asChild:d=!1,...u}=e,l=d?s.g7:"button";return(0,n.jsx)(l,{className:(0,i.cn)(c({variant:a,size:o,className:t})),ref:r,...u})});d.displayName="Button"},6013:function(e,r,t){"use strict";t.d(r,{Ol:function(){return i},SZ:function(){return d},Zb:function(){return o},aY:function(){return u},eW:function(){return l},ll:function(){return c}});var n=t(7437),a=t(2265),s=t(7440);let o=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",t),...a})});o.displayName="Card";let i=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex flex-col space-y-1.5 p-6",t),...a})});i.displayName="CardHeader";let c=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("h3",{ref:r,className:(0,s.cn)("text-2xl font-semibold leading-none tracking-tight",t),...a})});c.displayName="CardTitle";let d=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("p",{ref:r,className:(0,s.cn)("text-sm text-muted-foreground",t),...a})});d.displayName="CardDescription";let u=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("p-6 pt-0",t),...a})});u.displayName="CardContent";let l=a.forwardRef((e,r)=>{let{className:t,...a}=e;return(0,n.jsx)("div",{ref:r,className:(0,s.cn)("flex items-center p-6 pt-0",t),...a})});l.displayName="CardFooter"},7440:function(e,r,t){"use strict";t.d(r,{cn:function(){return s}});var n=t(4839),a=t(6164);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,a.m6)((0,n.W)(r))}},8064:function(e,r,t){"use strict";Object.defineProperty(r,"$",{enumerable:!0,get:function(){return a}});let n=t(4590);function a(e){let{createServerReference:r}=t(6671);return r(e,n.callServer)}}},function(e){e.O(0,[32,472,776,138,971,23,744],function(){return e(e.s=4824)}),_N_E=e.O()}]);