(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[290],{7039:function(e,t,a){Promise.resolve().then(a.bind(a,1016))},1016:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return _}});var s=a(7437),n=a(2265),l=a(3514),r=a(4175),o=a(2421),i=a(495),d=a(6466),c=a(6910),u=a(6975),m=a(8472),x=a(6780),f=a(4867),g=a(6294);function h(e){let{table:t}=e;return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"flex items-center justify-between px-2",children:(0,s.jsxs)("div",{className:"flex items-center space-x-6 lg:space-x-8",children:[(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsx)("p",{className:"text-sm text-muted-foreground ",children:"Rows per page"}),(0,s.jsxs)(g.Ph,{value:"".concat(t.getState().pagination.pageSize),onValueChange:e=>{t.setPageSize(Number(e))},children:[(0,s.jsx)(g.i4,{className:"h-8 w-[70px]",children:(0,s.jsx)(g.ki,{placeholder:t.getState().pagination.pageSize})}),(0,s.jsx)(g.Bw,{side:"top",children:[5,10,20,30,40,50].map(e=>(0,s.jsx)(g.Ql,{value:"".concat(e),children:e},e))})]})]}),(0,s.jsxs)("div",{className:"flex w-[100px] items-center justify-center text-sm font-medium",children:["Page ",t.getState().pagination.pageIndex+1," of"," ",t.getPageCount()]}),(0,s.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,s.jsxs)(i.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(0),disabled:!t.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to first page"}),(0,s.jsx)(f.kRt,{className:"h-4 w-4"})]}),(0,s.jsxs)(i.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.previousPage(),disabled:!t.getCanPreviousPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to previous page"}),(0,s.jsx)(f.wyc,{className:"h-4 w-4"})]}),(0,s.jsxs)(i.z,{variant:"outline",className:"h-8 w-8 p-0",onClick:()=>t.nextPage(),disabled:!t.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to next page"}),(0,s.jsx)(f.XCv,{className:"h-4 w-4"})]}),(0,s.jsxs)(i.z,{variant:"outline",className:"hidden h-8 w-8 p-0 lg:flex",onClick:()=>t.setPageIndex(t.getPageCount()-1),disabled:!t.getCanNextPage(),children:[(0,s.jsx)("span",{className:"sr-only",children:"Go to last page"}),(0,s.jsx)(f.yr4,{className:"h-4 w-4"})]})]})]})})})}var p=a(809),j=a(3102),v=a(7440),N=a(4693),w=a(3151),y=a(9573),b=a(4344);function C(e){let{column:t,title:a,options:n=[]}=e,l=null==t?void 0:t.getFacetedUniqueValues(),r=new Set(null==t?void 0:t.getFilterValue());return(0,s.jsxs)(y.J2,{children:[(0,s.jsx)(y.xo,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",size:"sm",className:"h-8 border-dashed",children:[(0,s.jsx)(f.SPS,{className:"mr-2 h-4 w-4"}),a,(null==r?void 0:r.size)>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(b.Z,{orientation:"vertical",className:"mx-2 h-4"}),(0,s.jsx)(N.C,{variant:"secondary",className:"rounded-sm px-1 font-normal lg:hidden",children:r.size}),(0,s.jsx)("div",{className:"hidden space-x-1 lg:flex",children:r.size>2?(0,s.jsxs)(N.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:[r.size," selected"]}):n.filter(e=>r.has(e.value)).map(e=>(0,s.jsx)(N.C,{variant:"secondary",className:"rounded-sm px-1 font-normal",children:e.label},e.value))})]})]})}),(0,s.jsx)(y.yk,{className:"w-[200px] p-0",align:"start",children:(0,s.jsxs)(w.mY,{children:[(0,s.jsx)(w.sZ,{placeholder:a}),(0,s.jsxs)(w.e8,{children:[(0,s.jsx)(w.rb,{children:"No results found."}),(0,s.jsx)(w.fu,{children:n.map((e,a)=>{let n=r.has(e.value);return(0,s.jsxs)(w.di,{onSelect:()=>{n?r.delete(e.value):r.add(e.value);let a=Array.from(r);null==t||t.setFilterValue(a.length?a:void 0),console.log(null==t?void 0:t.getFilterValue())},children:[(0,s.jsx)("div",{className:(0,v.cn)("mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",n?"bg-primary text-primary-foreground":"opacity-80 [&_svg]:invisible"),children:(0,s.jsx)(f.nQG,{className:(0,v.cn)("h-4 w-4")})}),e.icon&&(0,s.jsx)(e.icon,{className:"mr-2 h-4 w-4 "}),(0,s.jsx)("span",{children:e.label||"Unknown"}),(null==l?void 0:l.get(e.value))&&(0,s.jsx)("span",{className:"ml-auto flex h-4 w-4 items-center justify-center font-mono text-xs",children:l.get(e.value)})]},a)})}),r.size>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(w.zz,{}),(0,s.jsx)(w.fu,{children:(0,s.jsx)(w.di,{onSelect:()=>null==t?void 0:t.setFilterValue(void 0),className:"justify-center text-center",children:"Clear filters"})})]})]})]})})]})}function S(e){var t,a;let{table:l}=e,[r,o]=(0,n.useState)([]);(0,n.useEffect)(()=>{(async()=>{try{let e=await fetch("/api/voter-areas"),t=await e.json();console.log("Fetched data:",t);let a=t.map(e=>({label:e,value:e}));o(a),console.log("Areas fetched and mapped successfully"),console.log(a)}catch(e){console.error("Error fetching areas:",e)}})()},[]);let d=l.getState().columnFilters.length>0;return console.log(l.getState().columnFilters),(0,s.jsx)("div",{className:"flex items-center justify-between",children:(0,s.jsxs)("div",{className:"flex flex-1 items-center space-x-2",children:[(0,s.jsx)(j.I,{placeholder:"Search...",value:null!==(a=null===(t=l.getColumn("name"))||void 0===t?void 0:t.getFilterValue())&&void 0!==a?a:"",onChange:e=>{var t;return null===(t=l.getColumn("name"))||void 0===t?void 0:t.setFilterValue(e.target.value)},className:"h-8 w-[150px] lg:w-[250px]"}),l.getColumn("area")&&r.length>0&&(0,s.jsx)(C,{column:l.getColumn("area"),title:"Area",options:r}),d&&(0,s.jsxs)(i.z,{variant:"ghost",onClick:()=>l.resetColumnFilters(),className:"h-8 px-2 lg:px-3",children:["Reset",(0,s.jsx)(f.Pxu,{className:"ml-2 h-4 w-4"})]})]})})}var k=a(7776),R=a(9896);function z(e){var t,a;let{election:f,user:g}=e,[j,v]=(0,n.useState)(!0),N=[{id:"select",header:e=>{let{table:t}=e;return(0,s.jsx)(d.X,{checked:t.getIsAllPageRowsSelected()||t.getIsSomePageRowsSelected()&&"indeterminate",onCheckedChange:e=>t.toggleAllPageRowsSelected(!!e),"aria-label":"Select all"})},cell:e=>{let{row:t}=e;return(0,s.jsx)(d.X,{checked:t.getIsSelected(),onCheckedChange:e=>t.toggleSelected(!!e),"aria-label":"Select row"})},enableSorting:!1,enableHiding:!0},{accessorKey:"candidate_id",header:"ID"},{accessorKey:"name",header:"Name"},{accessorKey:"unit",header:"Unit"},{accessorKey:"area",header:"Area",filterFn:(e,t,a)=>{let s=e.getValue(t);return Array.isArray(a)?a.some(e=>s.toLowerCase().includes(e.toLowerCase())):s.toLowerCase().includes(a.toLowerCase())}},{accessorKey:"phone",header:"Phone"}],[w,y]=n.useState([]);n.useEffect(()=>{console.log("Election:",f),(async()=>{try{let e=(await m.Z.get("/api/getCandidates")).data.filter(e=>e.candidate_id!==(null==g?void 0:g.voter_id));y(e),v(!1)}catch(e){e instanceof Error?alert("Error fetching data: "+e.message):alert("An unknown error occurred")}})()},[]);let[b,C]=n.useState([]),[z,P]=n.useState([]),[V,_]=n.useState({name:!0,area:!0,unit:!0,phone:!1}),[Y,F]=n.useState({}),A=null!==(a=null==f?void 0:f.council_size)&&void 0!==a?a:2,E=(0,l.b7)({data:w,columns:N,onSortingChange:C,onColumnFiltersChange:P,getCoreRowModel:(0,r.sC)(),getPaginationRowModel:(0,r.G_)(),getSortedRowModel:(0,r.tj)(),getFilteredRowModel:(0,r.vL)(),onColumnVisibilityChange:_,onRowSelectionChange:e=>{let t="function"==typeof e?e(Y):e;Object.values(t).filter(Boolean).length<=A?F(t):k.A.error("Please select ".concat(A," candidates"))},state:{sorting:b,columnFilters:z,columnVisibility:V,rowSelection:Y}}),[I,M]=n.useState([]);n.useEffect(()=>{M(E.getSelectedRowModel().rows.map(e=>e.original._id))},[E.getSelectedRowModel().rows]);let Z=async()=>{if(console.log("Voting for:",I),I.length<A){k.A.error("Please select ".concat(A," candidates"));return}try{await m.Z.post("/api/vote/".concat(null==g?void 0:g.voter_id),{candidateVotes:I}),await (0,p.Qk)(),alert("Voting successful"),window.location.href="/"}catch(e){k.A.error("Error voting: "+e)}};return j?(0,s.jsx)(R.Z,{}):(0,s.jsxs)("div",{className:"w-full",children:[(0,s.jsxs)("div",{className:"flex items-center py-4",children:[(0,s.jsx)(S,{table:E}),(0,s.jsxs)(c.h_,{children:[(0,s.jsx)(c.$F,{asChild:!0,children:(0,s.jsxs)(i.z,{variant:"outline",className:"ml-auto",children:["View ",(0,s.jsx)(o.Z,{className:"ml-2 h-4 w-4"})]})}),(0,s.jsx)(c.AW,{align:"end",children:E.getAllColumns().filter(e=>e.getCanHide()).map(e=>(0,s.jsx)(c.bO,{className:"capitalize",checked:e.getIsVisible(),onCheckedChange:t=>e.toggleVisibility(!!t),children:e.id},e.id))})]})]}),(0,s.jsx)("div",{className:"rounded-md border",children:(0,s.jsxs)(u.iA,{children:[(0,s.jsx)(u.xD,{children:E.getHeaderGroups().map(e=>(0,s.jsx)(u.SC,{children:e.headers.map(e=>(0,s.jsx)(u.ss,{children:e.isPlaceholder?null:(0,l.ie)(e.column.columnDef.header,e.getContext())},e.id))},e.id))}),(0,s.jsx)(u.RM,{children:(null===(t=E.getRowModel().rows)||void 0===t?void 0:t.length)?E.getRowModel().rows.map(e=>(0,s.jsx)(u.SC,{"data-state":e.getIsSelected()&&"selected",children:e.getVisibleCells().map(e=>(0,s.jsx)(u.pj,{children:(0,l.ie)(e.column.columnDef.cell,e.getContext())},e.id))},e.id)):(0,s.jsx)(u.SC,{children:(0,s.jsx)(u.pj,{colSpan:N.length,className:"h-24 text-center",children:"No results."})})})]})}),(0,s.jsx)("div",{className:"flex items-center justify-end space-x-2 py-4",children:(0,s.jsx)(h,{table:E})}),(0,s.jsxs)("div",{className:"flex items-center justify-around space-x-2 py-4 px-4",children:[(0,s.jsxs)("div",{className:"flex-1 text-sm text-muted-foreground",children:[E.getFilteredSelectedRowModel().rows.length," of"," ",E.getFilteredRowModel().rows.length," row(s) selected."]}),(0,s.jsxs)(x.aR,{children:[(0,s.jsx)(x.vW,{asChild:!0,children:(0,s.jsx)(i.z,{onClick:()=>console.log(E.getSelectedRowModel().rows),children:"Vote"})}),(0,s.jsxs)(x._T,{children:[(0,s.jsxs)(x.fY,{children:[(0,s.jsx)(x.f$,{children:"Are you absolutely sure?"}),(0,s.jsx)(x.yT,{children:E.getSelectedRowModel().rows.map(e=>(0,s.jsx)("p",{children:"ID: ".concat(e.original.candidate_id,", Area: ").concat(e.original.area,", Name: ").concat("object"==typeof e.original.name?JSON.stringify(e.original.name):e.original.name)},e.id))})]}),(0,s.jsxs)(x.xo,{children:[(0,s.jsx)(x.le,{children:"Cancel"}),(0,s.jsx)(x.OL,{onClick:()=>Z(),children:"Continue"})]})]})]})]})]})}var P=a(6463),V=a(9809);function _(){let e=(0,P.useRouter)(),[t,a]=(0,n.useState)(null),{user:l}=(0,V.a)();return(0,n.useEffect)(()=>{document.title="Vote | Intekhaab",m.Z.get("/api/election").then(t=>{"Advisory Council"!==t.data[0].type?e.push("/"):("ongoing"!==t.data[0].status?(alert("Election is not yet started"),e.push("/user")):"completed"===t.data[0].status&&(alert("Election is completed"),e.push("/user")),a(t.data[0]))}).catch(t=>{console.log(t),alert("Something went wrong"),e.push("/")})},[e]),(0,s.jsx)("div",{children:(0,s.jsx)(z,{election:t,user:l})})}},4693:function(e,t,a){"use strict";a.d(t,{C:function(){return o}});var s=a(7437);a(2265);var n=a(2218),l=a(7440);let r=(0,n.j)("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function o(e){let{className:t,variant:a,...n}=e;return(0,s.jsx)("div",{className:(0,l.cn)(r({variant:a}),t),...n})}},3151:function(e,t,a){"use strict";a.d(t,{mY:function(){return m},rb:function(){return g},fu:function(){return h},sZ:function(){return x},di:function(){return j},e8:function(){return f},zz:function(){return p}});var s=a(7437),n=a(2265),l=a(5353),r=a(4817),o=a(7440),i=a(3304),d=a(4697);i.fC,i.xz;let c=i.h_;i.x8;let u=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.aV,{ref:t,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",a),...n})});u.displayName=i.aV.displayName,n.forwardRef((e,t)=>{let{className:a,children:n,...l}=e;return(0,s.jsxs)(c,{children:[(0,s.jsx)(u,{}),(0,s.jsxs)(i.VY,{ref:t,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",a),...l,children:[n,(0,s.jsxs)(i.x8,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,s.jsx)(d.Z,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Close"})]})]})]})}).displayName=i.VY.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.Dx,{ref:t,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",a),...n})}).displayName=i.Dx.displayName,n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(i.dk,{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",a),...n})}).displayName=i.dk.displayName;let m=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(l.mY,{ref:t,className:(0,o.cn)("flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground",a),...n})});m.displayName=l.mY.displayName;let x=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsxs)("div",{className:"flex items-center border-b px-3","cmdk-input-wrapper":"",children:[(0,s.jsx)(r.Z,{className:"mr-2 h-4 w-4 shrink-0 opacity-50"}),(0,s.jsx)(l.mY.Input,{ref:t,className:(0,o.cn)("flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",a),...n})]})});x.displayName=l.mY.Input.displayName;let f=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(l.mY.List,{ref:t,className:(0,o.cn)("max-h-[300px] overflow-y-auto overflow-x-hidden",a),...n})});f.displayName=l.mY.List.displayName;let g=n.forwardRef((e,t)=>(0,s.jsx)(l.mY.Empty,{ref:t,className:"py-6 text-center text-sm",...e}));g.displayName=l.mY.Empty.displayName;let h=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(l.mY.Group,{ref:t,className:(0,o.cn)("overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",a),...n})});h.displayName=l.mY.Group.displayName;let p=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(l.mY.Separator,{ref:t,className:(0,o.cn)("-mx-1 h-px bg-border",a),...n})});p.displayName=l.mY.Separator.displayName;let j=n.forwardRef((e,t)=>{let{className:a,...n}=e;return(0,s.jsx)(l.mY.Item,{ref:t,className:(0,o.cn)("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[enabled]:pointer-events-none data-[enabled]:opacity-50",a),...n})});j.displayName=l.mY.Item.displayName},9573:function(e,t,a){"use strict";a.d(t,{J2:function(){return o},xo:function(){return i},yk:function(){return d}});var s=a(7437),n=a(2265),l=a(1485),r=a(7440);let o=l.fC,i=l.xz,d=n.forwardRef((e,t)=>{let{className:a,align:n="center",sideOffset:o=4,...i}=e;return(0,s.jsx)(l.h_,{children:(0,s.jsx)(l.VY,{ref:t,align:n,sideOffset:o,className:(0,r.cn)("z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",a),...i})})});d.displayName=l.VY.displayName},4344:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(7437),n=a(2265),l=a(8484),r=a(7440);let o=n.forwardRef((e,t)=>{let{className:a,orientation:n="horizontal",decorative:o=!0,...i}=e;return(0,s.jsx)(l.f,{ref:t,decorative:o,orientation:n,className:(0,r.cn)("shrink-0 bg-border","horizontal"===n?"h-[1px] w-full":"h-full w-[1px]",a),...i})});o.displayName=l.f.displayName}},function(e){e.O(0,[310,32,472,776,534,208,424,82,188,306,971,23,744],function(){return e(e.s=7039)}),_N_E=e.O()}]);