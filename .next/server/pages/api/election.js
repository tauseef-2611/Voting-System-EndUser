"use strict";(()=>{var e={};e.id=832,e.ids=[832],e.modules={11185:e=>{e.exports=require("mongoose")},72934:e=>{e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},92824:e=>{e.exports=require("next/server")},16689:e=>{e.exports=require("react")},99369:e=>{e.exports=import("jose")},42689:(e,r,t)=>{t.a(e,async(e,n)=>{try{t.r(r),t.d(r,{config:()=>u,default:()=>l,routeModule:()=>d});var o=t(71802),i=t(47153),a=t(56249),s=t(23202),c=e([s]);s=(c.then?(await c)():c)[0];let l=(0,a.l)(s,"default"),u=(0,a.l)(s,"config"),d=new o.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/election",pathname:"/api/election",bundlePath:"",filename:""},userland:s});n()}catch(e){n(e)}})},55320:(e,r,t)=>{t.a(e,async(e,n)=>{try{t.d(r,{je:()=>s});var o=t(99369);t(53121),t(92824);var i=e([o]);o=(i.then?(await i)():i)[0];let c=process.env.SECRET_KEY,l=new TextEncoder().encode(c),u=process.env.ADMIN_SECRET_KEY;async function a(e){try{let{payload:r}=await (0,o.jwtVerify)(e,l,{algorithms:["HS256"]});return r}catch(e){if("ERR_JWT_EXPIRED"===e.code)throw Error("Token has expired");throw Error("Token verification failed")}}async function s(e){try{return await a(e)}catch(e){return null}}new TextEncoder().encode(u),n()}catch(e){n(e)}})},46711:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(11185),o=t.n(n);let i=new(o()).Schema({area:{type:String,required:!0},date:{type:Date,required:!0},type:{type:String,required:!0,enum:["Presidential","Advisory Council","Electoral College"]},status:{type:String,required:!0,enum:["ready","ongoing","completed"]},presiding_officer:{type:String,required:!0},ecRatio:{type:String},council_size:{type:Number,required:function(){return"Advisory Council"===this.type}},nominee_size:{type:Number,required:function(){return"Presidential"===this.type}},perAreaNominees:{type:Map,of:Number}}),a=o().models.Election||o().model("Election",i)},23202:(e,r,t)=>{t.a(e,async(e,n)=>{try{t.r(r),t.d(r,{default:()=>l});var o=t(60578),i=t(46711),a=t(55320),s=e([a]);a=(s.then?(await s)():s)[0];let c=async(e,r)=>{if("GET"===e.method)try{if(!await (0,a.je)(e.headers.cookie?.split("; ").find(e=>e.startsWith("session="))?.split("=")[1]))return r.status(401).json({error:"Unauthorized"});await (0,o.v)();let t=await i.Z.find({});if(0===t.length){r.status(304).json({error:"No election found"});return}r.status(200).json(t)}catch(e){console.error("Error fetching elections:",e),r.status(500).send({error:"Internal Server Error",details:e.message})}else r.status(405).send({error:"Method Not Allowed"})},l=(e,r)=>{c(e,r)};n()}catch(e){n(e)}})},60578:(e,r,t)=>{t.d(r,{v:()=>s});var n=t(11185),o=t.n(n);let i="mongodb://tauseef:IntekhaabPurAman@20.2.88.8:27017/yourdbname?authSource=admin";if(!i)throw Error("Please define the NEXT_PUBLIC_MONGODB_URI environment variable inside .env.local");let a=global.mongoose;async function s(){if(a.conn)return a.conn;a.promise||(a.promise=o().connect(i,{useNewUrlParser:!0,useUnifiedTopology:!0}).then(e=>e));try{a.conn=await a.promise}catch(e){throw console.error("Database connection failed:",e),Error("Database connection failed")}return a.conn}a||(a=global.mongoose={conn:null,promise:null})}};var r=require("../../webpack-api-runtime.js");r.C(e);var t=e=>r(r.s=e),n=r.X(0,[643],()=>t(42689));module.exports=n})();