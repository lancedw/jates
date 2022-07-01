"use strict";function t(t,e,s,a){if("a"===s&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?a:"a"===s?a.call(t):a?a.value:e.get(t)}var e,s,a,i,h;class r extends Date{constructor(){super(...arguments),e.add(this),this.months=["January","February","March","April","May","June","July","August","September","October","November","December"],this.monthsShort=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],this.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],this.daysShort=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]}getMonthName(t="long"){return"short"==t?this.monthsShort[this.getMonth()]:this.months[this.getMonth()]}getDayName(t="long"){return"short"==t?this.daysShort[this.getDay()]:this.days[this.getDay()]}getDayOfYear(){const t=new r(this.getFullYear(),0,0).getTime(),e=this.getTime()-t;return Math.floor(e/864e5)}format(r){let c=[],l="";for(let t=0;t<r.length;t++)if(r[t].match(/\W/)){if(["{","}"].includes(r[t])){if("{"==r[t]){l&&c.push(l),l="{";continue}if("}"==r[t]){l+="}",c.push(l),l="";continue}}l&&(c.push(l),l=""),c.push(r[t])}else l+=r[t],t>r.length-2&&c.push(l);let o="";for(const r of c)if(r.includes("{")&&r.includes("}"))o+=r.replace("{","").replace("}","");else if(r.match(/\W/))o+=r;else switch(r){case"yyyy":o+=t(this,e,"m",s).call(this,this.getFullYear(),4);break;case"yyy":o+=t(this,e,"m",s).call(this,this.getFullYear(),3);break;case"yy":o+=t(this,e,"m",s).call(this,this.getFullYear(),2);break;case"yo":o+=t(this,e,"m",a).call(this,this.getFullYear());break;case"y":o+=this.getFullYear();break;case"qqqqq":case"QQQQQ":case"q":case"Q":o+=this.getQuarter();break;case"qqqq":case"QQQQ":o+=t(this,e,"m",a).call(this,this.getQuarter())+"quarter";break;case"qqq":case"QQQ":o+="Q"+this.getQuarter();break;case"qq":case"QQ":o+=t(this,e,"m",s).call(this,this.getQuarter(),5);break;case"qo":case"Qo":o+=t(this,e,"m",a).call(this,this.getQuarter());break;case"LLLLL":case"MMMMM":o+=this.months[this.getMonth()][0];break;case"LLLL":case"MMMM":o+=this.months[this.getMonth()];break;case"LLL":case"MMM":o+=this.monthsShort[this.getMonth()];break;case"LL":case"MM":o+=t(this,e,"m",s).call(this,this.getMonthNumber());break;case"L":case"M":o+=this.getMonthNumber().toString();break;case"Lo":case"Mo":o+=t(this,e,"m",a).call(this,this.getMonthNumber());break;case"dd":o+=t(this,e,"m",s).call(this,this.getDate());break;case"do":o+=t(this,e,"m",a).call(this,this.getDate());break;case"d":o+=this.getDate();break;case"DDD":o+=t(this,e,"m",s).call(this,this.getDayOfYear(),3);break;case"DD":o+=t(this,e,"m",s).call(this,this.getDayOfYear(),2);break;case"Do":o+=t(this,e,"m",a).call(this,this.getDayOfYear());break;case"D":o+=t(this,e,"m",s).call(this,this.getDayOfYear(),1);break;case"EEEEEE":o+=this.days[this.getDay()-1].substring(0,2);break;case"EEEEE":o+=this.days[this.getDay()-1].substring(0,1);break;case"EEEE":o+=this.days[this.getDay()-1];break;case"EEE":case"EE":case"E":o+=this.days[this.getDay()-1].substring(0,3);break;case"aaaaa":o+=t(this,e,"m",i).call(this).charAt(0);break;case"aaaa":o+=t(this,e,"m",i).call(this).split("").join(",");break;case"aaa":o+=t(this,e,"m",i).call(this);break;case"aa":case"a":o+=t(this,e,"m",i).call(this).toUpperCase();break;case"hh":o+=t(this,e,"m",s).call(this,t(this,e,"m",h).call(this,this.getHours(),1,12));break;case"ho":o+=t(this,e,"m",a).call(this,t(this,e,"m",h).call(this,this.getHours(),1,12));break;case"h":o+=t(this,e,"m",h).call(this,this.getHours(),1,12);break;case"HH":o+=t(this,e,"m",s).call(this,t(this,e,"m",h).call(this,this.getHours(),0,23));break;case"Ho":o+=t(this,e,"m",a).call(this,t(this,e,"m",h).call(this,this.getHours(),0,23));break;case"H":o+=t(this,e,"m",h).call(this,this.getHours(),0,23);break;case"kk":o+=t(this,e,"m",s).call(this,t(this,e,"m",h).call(this,this.getHours(),1,24));break;case"ko":o+=t(this,e,"m",a).call(this,t(this,e,"m",h).call(this,this.getHours(),1,24));break;case"k":o+=t(this,e,"m",h).call(this,this.getHours(),1,24)}return o}getMonthNumber(){return this.getMonth()+1>12?1:this.getMonth()+1}getQuarter(){return Math.ceil(this.getMonthNumber()/4)}}e=new WeakSet,s=function(t,e=2){const s=t.toString();return s.length>e-1?s:"0".repeat(e-s.length)+s},a=function(t){return 1==parseInt(t.toString().slice(-1))?t.toString()+"st":2==parseInt(t.toString().slice(-1))?t.toString()+"nd":3==parseInt(t.toString().slice(-1))?t.toString()+"rd":4==parseInt(t.toString().slice(-1))||5==parseInt(t.toString().slice(-1))?t.toString()+"th":6==parseInt(t.toString().slice(-1))?t.toString()+"st":parseInt(t.toString().slice(-1))>6&&parseInt(t.toString().slice(-1))<10||t>10&&t<20||t%10==0?t.toString()+"th":void 0},i=function(){return this.getHours()>12||11==this.getHours()&&(this.getMinutes()>0||this.getSeconds()>0||this.getMilliseconds()>0)?"am":"pm"},h=function(t,e,s){return t>s?e+(t-s-1):t<e?e:t};const c=new r;console.log(c.format("Ho")),module.exports=r;
