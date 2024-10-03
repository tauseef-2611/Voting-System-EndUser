"use strict";(()=>{var e={};e.id=676,e.ids=[676],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},92824:e=>{e.exports=require("next/server")},16689:e=>{e.exports=require("react")},99369:e=>{e.exports=import("jose")},8639:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{config:()=>l,default:()=>c,routeModule:()=>u});var a=r(71802),o=r(47153),i=r(56249),s=r(13976),d=e([s]);s=(d.then?(await d)():d)[0];let c=(0,i.l)(s,"default"),l=(0,i.l)(s,"config"),u=new a.PagesAPIRouteModule({definition:{kind:o.x.PAGES_API,page:"/api/getCandidates",pathname:"/api/getCandidates",bundlePath:"",filename:""},userland:s});n()}catch(e){n(e)}})},55320:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.d(t,{je:()=>s});var a=r(99369);r(53121),r(92824);var o=e([a]);a=(o.then?(await o)():o)[0];let d=process.env.SECRET_KEY,c=new TextEncoder().encode(d),l=process.env.ADMIN_SECRET_KEY;async function i(e){try{let{payload:t}=await (0,a.jwtVerify)(e,c,{algorithms:["HS256"]});return t}catch(e){if("ERR_JWT_EXPIRED"===e.code)throw Error("Token has expired");throw Error("Token verification failed")}}async function s(e){try{return await i(e)}catch(e){return null}}new TextEncoder().encode(l),n()}catch(e){n(e)}})},63691:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(11185),a=r.n(n);let o=new(a()).Schema({candidate_id:{type:String,required:!0},name:{type:String,required:!0},phone:{type:String,required:!0},date_of_birth:{type:String,required:!0},unit:{type:String,required:!0},area:{type:String,required:!0},votes:{type:Number,required:!0}}),i=a().models.Candidate||a().model("Candidate",o)},13976:(e,t,r)=>{r.a(e,async(e,n)=>{try{r.r(t),r.d(t,{default:()=>d});var a=r(60578),o=r(63691),i=r(55320),s=e([i]);async function d(e,t){if("GET"===e.method)try{if(!await (0,i.je)(e.headers.cookie?.split("; ").find(e=>e.startsWith("session="))?.split("=")[1]))return t.status(401).json({error:"Unauthorized"});await (0,a.v)();let r=await o.Z.find({},{votes:0});t.status(200).json(r)}catch(e){t.status(500).json({error:"Internal Server Error"})}else t.setHeader("Allow",["GET"]),t.status(405).end(`Method ${e.method} Not Allowed`)}i=(s.then?(await s)():s)[0],n()}catch(e){n(e)}})},60578:(e,t,r)=>{r.d(t,{v:()=>s});var n=r(11185),a=r.n(n);let o="mongodb://tauseef:s10secqJg0UlWLL@mongodb:27017/intekhaab?authSource=admin";if(!o)throw Error("Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local");let i=global.mongoose;async function s(){if(i.conn)return i.conn;i.promise||(i.promise=a().connect(o,{useNewUrlParser:!0,useUnifiedTopology:!0}).then(e=>e));try{i.conn=await i.promise}catch(e){throw console.error("Database connection failed:",e),Error("Database connection failed")}return i.conn}i||(i=global.mongoose={conn:null,promise:null})}};var t=require("../../webpack-api-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[643],()=>r(8639));module.exports=n})();