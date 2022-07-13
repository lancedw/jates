"use strict";function t(t,e,s,a){if("a"===s&&!a)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!a:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===s?a:"a"===s?a.call(t):a?a.value:e.get(t)}var e,s,a,i,r;class h extends Date{constructor(){super(...arguments),e.add(this)}static setFormat(t,e){h.namedFormat[t]=e}static removeFormat(t){var e;null===(e=h.namedFormat)||void 0===e||delete e[t]}getMonthName(t="long"){return"short"==t?h.monthsShort[this.getMonth()]:h.months[this.getMonth()]}getDayName(t="long"){return"short"==t?h.daysShort[this.getDay()]:h.days[this.getDay()]}getDayOfYear(){const t=new h(this.getFullYear(),0,0).getTime(),e=this.getTime()-t;return Math.floor(e/864e5)}nformat(t){var e;return this.format((null===(e=h.namedFormat)||void 0===e?void 0:e[t])||"")}format(c=h.defaultFormat){let l=[],o="";for(let t=0;t<c.length;t++)if(c[t].match(/\W/)){if(["{","}"].includes(c[t])){if("{"==c[t]){o&&l.push(o),o="{";continue}if("}"==c[t]){o+="}",l.push(o),o="";continue}}o&&(l.push(o),o=""),l.push(c[t])}else o+=c[t],t>c.length-2&&l.push(o);let n="";for(const c of l)if(c.includes("{")&&c.includes("}"))n+=c.replace("{","").replace("}","");else if(c.match(/\W/))n+=c;else switch(c){case"yyyy":n+=t(this,e,"m",s).call(this,this.getFullYear(),4);break;case"yyy":n+=t(this,e,"m",s).call(this,this.getFullYear(),3);break;case"yy":n+=t(this,e,"m",s).call(this,this.getFullYear(),2);break;case"yo":n+=t(this,e,"m",a).call(this,this.getFullYear());break;case"y":n+=this.getFullYear();break;case"qqqqq":case"QQQQQ":case"q":case"Q":n+=this.getQuarter();break;case"qqqq":case"QQQQ":n+=t(this,e,"m",a).call(this,this.getQuarter())+"quarter";break;case"qqq":case"QQQ":n+="Q"+this.getQuarter();break;case"qq":case"QQ":n+=t(this,e,"m",s).call(this,this.getQuarter(),5);break;case"qo":case"Qo":n+=t(this,e,"m",a).call(this,this.getQuarter());break;case"LLLLL":case"MMMMM":n+=h.months[this.getMonth()][0];break;case"LLLL":case"MMMM":n+=h.months[this.getMonth()];break;case"LLL":case"MMM":n+=h.monthsShort[this.getMonth()];break;case"LL":case"MM":n+=t(this,e,"m",s).call(this,this.getMonthNumber());break;case"L":case"M":n+=this.getMonthNumber().toString();break;case"Lo":case"Mo":n+=t(this,e,"m",a).call(this,this.getMonthNumber());break;case"dd":n+=t(this,e,"m",s).call(this,this.getDate());break;case"do":n+=t(this,e,"m",a).call(this,this.getDate());break;case"d":n+=this.getDate();break;case"DDD":n+=t(this,e,"m",s).call(this,this.getDayOfYear(),3);break;case"DD":n+=t(this,e,"m",s).call(this,this.getDayOfYear(),2);break;case"Do":n+=t(this,e,"m",a).call(this,this.getDayOfYear());break;case"D":n+=t(this,e,"m",s).call(this,this.getDayOfYear(),1);break;case"EEEEEE":n+=h.days[this.getDay()-1].substring(0,2);break;case"EEEEE":n+=h.days[this.getDay()-1].substring(0,1);break;case"EEEE":n+=h.days[this.getDay()-1];break;case"EEE":case"EE":case"E":n+=h.days[this.getDay()-1].substring(0,3);break;case"aaaaa":n+=t(this,e,"m",i).call(this).charAt(0);break;case"aaaa":n+=t(this,e,"m",i).call(this).split("").join(",");break;case"aaa":n+=t(this,e,"m",i).call(this);break;case"aa":case"a":n+=t(this,e,"m",i).call(this).toUpperCase();break;case"hh":n+=t(this,e,"m",s).call(this,t(this,e,"m",r).call(this,this.getHours(),1,12));break;case"ho":n+=t(this,e,"m",a).call(this,t(this,e,"m",r).call(this,this.getHours(),1,12));break;case"h":n+=t(this,e,"m",r).call(this,this.getHours(),1,12);break;case"HH":n+=t(this,e,"m",s).call(this,t(this,e,"m",r).call(this,this.getHours(),0,23));break;case"Ho":n+=t(this,e,"m",a).call(this,t(this,e,"m",r).call(this,this.getHours(),0,23));break;case"H":n+=t(this,e,"m",r).call(this,this.getHours(),0,23);break;case"kk":n+=t(this,e,"m",s).call(this,t(this,e,"m",r).call(this,this.getHours(),1,24));break;case"ko":n+=t(this,e,"m",a).call(this,t(this,e,"m",r).call(this,this.getHours(),1,24));break;case"k":n+=t(this,e,"m",r).call(this,this.getHours(),1,24);break;case"mm":n+=t(this,e,"m",s).call(this,this.getMinutes());break;case"mo":n+=t(this,e,"m",a).call(this,this.getMinutes());break;case"m":n+=this.getMinutes();break;case"ss":n+=t(this,e,"m",s).call(this,this.getSeconds());break;case"so":n+=t(this,e,"m",a).call(this,this.getSeconds());break;case"s":n+=this.getSeconds();break;case"SSS":n+=t(this,e,"m",s).call(this,this.getMilliseconds(),3);break;case"SS":n+=t(this,e,"m",s).call(this,this.getMilliseconds());break;case"S":n+=this.getMilliseconds()}return n}add(t,e){const s=this.getTime();switch(e.toLocaleLowerCase()){case"d":case"day":case"days":this.setTime(s+24*t*60*60*1e3);break;case"minute":case"minutes":case"min":case"mins":this.setTime(s+60*t*1e3)}}getMonthNumber(){return this.getMonth()+1>12?1:this.getMonth()+1}getQuarter(){return Math.ceil(this.getMonthNumber()/4)}}e=new WeakSet,s=function(t,e=2){const s=t.toString();return s.length>e-1?s:"0".repeat(e-s.length)+s},a=function(t){return 1==parseInt(t.toString().slice(-1))?t.toString()+"st":2==parseInt(t.toString().slice(-1))?t.toString()+"nd":3==parseInt(t.toString().slice(-1))?t.toString()+"rd":4==parseInt(t.toString().slice(-1))||5==parseInt(t.toString().slice(-1))?t.toString()+"th":6==parseInt(t.toString().slice(-1))?t.toString()+"st":parseInt(t.toString().slice(-1))>6&&parseInt(t.toString().slice(-1))<10||t>10&&t<20||t%10==0?t.toString()+"th":void 0},i=function(){return this.getHours()>12||11==this.getHours()&&(this.getMinutes()>0||this.getSeconds()>0||this.getMilliseconds()>0)?"am":"pm"},r=function(t,e,s){return t>s?e+(t-s-1):t<e?e:t},h.defaultFormat="",h.namedFormat={},h.months=["January","February","March","April","May","June","July","August","September","October","November","December"],h.monthsShort=["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"],h.days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],h.daysShort=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];const c=new h;console.log(c.format("yyyy-MM-dd")),c.add(100,"days"),console.log(c.format("yyyy-MM-dd")),module.exports=h;
