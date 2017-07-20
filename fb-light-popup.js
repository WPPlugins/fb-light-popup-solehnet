/*
---
MooTools: the javascript framework

web build:
 - http://mootools.net/core/3df52ba47c6f28b99d7c3717f39aca05

packager build:
 - packager build Core/Element.Dimensions Core/Request Core/JSON

copyrights:
  - [MooTools](http://mootools.net)

licenses:
  - [MIT License](http://mootools.net/license.txt)
...
*/
(function(){this.MooTools={version:"1.3.2",build:"c9f1ff10e9e7facb65e9481049ed1b450959d587"};var e=this.typeOf=function(i){if(i==null){return"null";}if(i.$family){return i.$family();
}if(i.nodeName){if(i.nodeType==1){return"element";}if(i.nodeType==3){return(/\S/).test(i.nodeValue)?"textnode":"whitespace";}}else{if(typeof i.length=="number"){if(i.callee){return"arguments";
}if("item" in i){return"collection";}}}return typeof i;};var u=this.instanceOf=function(w,i){if(w==null){return false;}var v=w.$constructor||w.constructor;
while(v){if(v===i){return true;}v=v.parent;}return w instanceof i;};var f=this.Function;var r=true;for(var q in {toString:1}){r=null;}if(r){r=["hasOwnProperty","valueOf","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","constructor"];
}f.prototype.overloadSetter=function(v){var i=this;return function(x,w){if(x==null){return this;}if(v||typeof x!="string"){for(var y in x){i.call(this,y,x[y]);
}if(r){for(var z=r.length;z--;){y=r[z];if(x.hasOwnProperty(y)){i.call(this,y,x[y]);}}}}else{i.call(this,x,w);}return this;};};f.prototype.overloadGetter=function(v){var i=this;
return function(x){var y,w;if(v||typeof x!="string"){y=x;}else{if(arguments.length>1){y=arguments;}}if(y){w={};for(var z=0;z<y.length;z++){w[y[z]]=i.call(this,y[z]);
}}else{w=i.call(this,x);}return w;};};f.prototype.extend=function(i,v){this[i]=v;}.overloadSetter();f.prototype.implement=function(i,v){this.prototype[i]=v;
}.overloadSetter();var o=Array.prototype.slice;f.from=function(i){return(e(i)=="function")?i:function(){return i;};};Array.from=function(i){if(i==null){return[];
}return(k.isEnumerable(i)&&typeof i!="string")?(e(i)=="array")?i:o.call(i):[i];};Number.from=function(v){var i=parseFloat(v);return isFinite(i)?i:null;
};String.from=function(i){return i+"";};f.implement({hide:function(){this.$hidden=true;return this;},protect:function(){this.$protected=true;return this;
}});var k=this.Type=function(x,w){if(x){var v=x.toLowerCase();var i=function(y){return(e(y)==v);};k["is"+x]=i;if(w!=null){w.prototype.$family=(function(){return v;
}).hide();w.type=i;}}if(w==null){return null;}w.extend(this);w.$constructor=k;w.prototype.$constructor=w;return w;};var p=Object.prototype.toString;k.isEnumerable=function(i){return(i!=null&&typeof i.length=="number"&&p.call(i)!="[object Function]");
};var b={};var d=function(i){var v=e(i.prototype);return b[v]||(b[v]=[]);};var h=function(w,A){if(A&&A.$hidden){return;}var v=d(this);for(var x=0;x<v.length;
x++){var z=v[x];if(e(z)=="type"){h.call(z,w,A);}else{z.call(this,w,A);}}var y=this.prototype[w];if(y==null||!y.$protected){this.prototype[w]=A;}if(this[w]==null&&e(A)=="function"){t.call(this,w,function(i){return A.apply(i,o.call(arguments,1));
});}};var t=function(i,w){if(w&&w.$hidden){return;}var v=this[i];if(v==null||!v.$protected){this[i]=w;}};k.implement({implement:h.overloadSetter(),extend:t.overloadSetter(),alias:function(i,v){h.call(this,i,this.prototype[v]);
}.overloadSetter(),mirror:function(i){d(this).push(i);return this;}});new k("Type",k);var c=function(v,z,x){var w=(z!=Object),D=z.prototype;if(w){z=new k(v,z);
}for(var A=0,y=x.length;A<y;A++){var E=x[A],C=z[E],B=D[E];if(C){C.protect();}if(w&&B){delete D[E];D[E]=B.protect();}}if(w){z.implement(D);}return c;};c("String",String,["charAt","charCodeAt","concat","indexOf","lastIndexOf","match","quote","replace","search","slice","split","substr","substring","toLowerCase","toUpperCase"])("Array",Array,["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice","indexOf","lastIndexOf","filter","forEach","every","map","some","reduce","reduceRight"])("Number",Number,["toExponential","toFixed","toLocaleString","toPrecision"])("Function",f,["apply","call","bind"])("RegExp",RegExp,["exec","test"])("Object",Object,["create","defineProperty","defineProperties","keys","getPrototypeOf","getOwnPropertyDescriptor","getOwnPropertyNames","preventExtensions","isExtensible","seal","isSealed","freeze","isFrozen"])("Date",Date,["now"]);
Object.extend=t.overloadSetter();Date.extend("now",function(){return +(new Date);});new k("Boolean",Boolean);Number.prototype.$family=function(){return isFinite(this)?"number":"null";
}.hide();Number.extend("random",function(v,i){return Math.floor(Math.random()*(i-v+1)+v);});var l=Object.prototype.hasOwnProperty;Object.extend("forEach",function(i,w,x){for(var v in i){if(l.call(i,v)){w.call(x,i[v],v,i);
}}});Object.each=Object.forEach;Array.implement({forEach:function(x,y){for(var w=0,v=this.length;w<v;w++){if(w in this){x.call(y,this[w],w,this);}}},each:function(i,v){Array.forEach(this,i,v);
return this;}});var s=function(i){switch(e(i)){case"array":return i.clone();case"object":return Object.clone(i);default:return i;}};Array.implement("clone",function(){var v=this.length,w=new Array(v);
while(v--){w[v]=s(this[v]);}return w;});var a=function(v,i,w){switch(e(w)){case"object":if(e(v[i])=="object"){Object.merge(v[i],w);}else{v[i]=Object.clone(w);
}break;case"array":v[i]=w.clone();break;default:v[i]=w;}return v;};Object.extend({merge:function(C,y,x){if(e(y)=="string"){return a(C,y,x);}for(var B=1,w=arguments.length;
B<w;B++){var z=arguments[B];for(var A in z){a(C,A,z[A]);}}return C;},clone:function(i){var w={};for(var v in i){w[v]=s(i[v]);}return w;},append:function(z){for(var y=1,w=arguments.length;
y<w;y++){var v=arguments[y]||{};for(var x in v){z[x]=v[x];}}return z;}});["Object","WhiteSpace","TextNode","Collection","Arguments"].each(function(i){new k(i);
});var j=Date.now();String.extend("uniqueID",function(){return(j++).toString(36);});var g=this.Hash=new k("Hash",function(i){if(e(i)=="hash"){i=Object.clone(i.getClean());
}for(var v in i){this[v]=i[v];}return this;});g.implement({forEach:function(i,v){Object.forEach(this,i,v);},getClean:function(){var v={};for(var i in this){if(this.hasOwnProperty(i)){v[i]=this[i];
}}return v;},getLength:function(){var v=0;for(var i in this){if(this.hasOwnProperty(i)){v++;}}return v;}});g.alias("each","forEach");Object.type=k.isObject;
var n=this.Native=function(i){return new k(i.name,i.initialize);};n.type=k.type;n.implement=function(x,v){for(var w=0;w<x.length;w++){x[w].implement(v);
}return n;};var m=Array.type;Array.type=function(i){return u(i,Array)||m(i);};this.$A=function(i){return Array.from(i).slice();};this.$arguments=function(v){return function(){return arguments[v];
};};this.$chk=function(i){return !!(i||i===0);};this.$clear=function(i){clearTimeout(i);clearInterval(i);return null;};this.$defined=function(i){return(i!=null);
};this.$each=function(w,v,x){var i=e(w);((i=="arguments"||i=="collection"||i=="array"||i=="elements")?Array:Object).each(w,v,x);};this.$empty=function(){};
this.$extend=function(v,i){return Object.append(v,i);};this.$H=function(i){return new g(i);};this.$merge=function(){var i=Array.slice(arguments);i.unshift({});
return Object.merge.apply(null,i);};this.$lambda=f.from;this.$mixin=Object.merge;this.$random=Number.random;this.$splat=Array.from;this.$time=Date.now;
this.$type=function(i){var v=e(i);if(v=="elements"){return"array";}return(v=="null")?false:v;};this.$unlink=function(i){switch(e(i)){case"object":return Object.clone(i);
case"array":return Array.clone(i);case"hash":return new g(i);default:return i;}};})();Array.implement({every:function(c,d){for(var b=0,a=this.length;b<a;
b++){if((b in this)&&!c.call(d,this[b],b,this)){return false;}}return true;},filter:function(d,e){var c=[];for(var b=0,a=this.length;b<a;b++){if((b in this)&&d.call(e,this[b],b,this)){c.push(this[b]);
}}return c;},indexOf:function(c,d){var a=this.length;for(var b=(d<0)?Math.max(0,a+d):d||0;b<a;b++){if(this[b]===c){return b;}}return -1;},map:function(d,e){var c=[];
for(var b=0,a=this.length;b<a;b++){if(b in this){c[b]=d.call(e,this[b],b,this);}}return c;},some:function(c,d){for(var b=0,a=this.length;b<a;b++){if((b in this)&&c.call(d,this[b],b,this)){return true;
}}return false;},clean:function(){return this.filter(function(a){return a!=null;});},invoke:function(a){var b=Array.slice(arguments,1);return this.map(function(c){return c[a].apply(c,b);
});},associate:function(c){var d={},b=Math.min(this.length,c.length);for(var a=0;a<b;a++){d[c[a]]=this[a];}return d;},link:function(c){var a={};for(var e=0,b=this.length;
e<b;e++){for(var d in c){if(c[d](this[e])){a[d]=this[e];delete c[d];break;}}}return a;},contains:function(a,b){return this.indexOf(a,b)!=-1;},append:function(a){this.push.apply(this,a);
return this;},getLast:function(){return(this.length)?this[this.length-1]:null;},getRandom:function(){return(this.length)?this[Number.random(0,this.length-1)]:null;
},include:function(a){if(!this.contains(a)){this.push(a);}return this;},combine:function(c){for(var b=0,a=c.length;b<a;b++){this.include(c[b]);}return this;
},erase:function(b){for(var a=this.length;a--;){if(this[a]===b){this.splice(a,1);}}return this;},empty:function(){this.length=0;return this;},flatten:function(){var d=[];
for(var b=0,a=this.length;b<a;b++){var c=typeOf(this[b]);if(c=="null"){continue;}d=d.concat((c=="array"||c=="collection"||c=="arguments"||instanceOf(this[b],Array))?Array.flatten(this[b]):this[b]);
}return d;},pick:function(){for(var b=0,a=this.length;b<a;b++){if(this[b]!=null){return this[b];}}return null;},hexToRgb:function(b){if(this.length!=3){return null;
}var a=this.map(function(c){if(c.length==1){c+=c;}return c.toInt(16);});return(b)?a:"rgb("+a+")";},rgbToHex:function(d){if(this.length<3){return null;}if(this.length==4&&this[3]==0&&!d){return"transparent";
}var b=[];for(var a=0;a<3;a++){var c=(this[a]-0).toString(16);b.push((c.length==1)?"0"+c:c);}return(d)?b:"#"+b.join("");}});Array.alias("extend","append");
var $pick=function(){return Array.from(arguments).pick();};Function.extend({attempt:function(){for(var b=0,a=arguments.length;b<a;b++){try{return arguments[b]();
}catch(c){}}return null;}});Function.implement({attempt:function(a,c){try{return this.apply(c,Array.from(a));}catch(b){}return null;},bind:function(c){var a=this,b=(arguments.length>1)?Array.slice(arguments,1):null;
return function(){if(!b&&!arguments.length){return a.call(c);}if(b&&arguments.length){return a.apply(c,b.concat(Array.from(arguments)));}return a.apply(c,b||arguments);
};},pass:function(b,c){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},delay:function(b,c,a){return setTimeout(this.pass((a==null?[]:a),c),b);
},periodical:function(c,b,a){return setInterval(this.pass((a==null?[]:a),b),c);}});delete Function.prototype.bind;Function.implement({create:function(b){var a=this;
b=b||{};return function(d){var c=b.arguments;c=(c!=null)?Array.from(c):Array.slice(arguments,(b.event)?1:0);if(b.event){c=[d||window.event].extend(c);}var e=function(){return a.apply(b.bind||null,c);
};if(b.delay){return setTimeout(e,b.delay);}if(b.periodical){return setInterval(e,b.periodical);}if(b.attempt){return Function.attempt(e);}return e();};
},bind:function(c,b){var a=this;if(b!=null){b=Array.from(b);}return function(){return a.apply(c,b||arguments);};},bindWithEvent:function(c,b){var a=this;
if(b!=null){b=Array.from(b);}return function(d){return a.apply(c,(b==null)?arguments:[d].concat(b));};},run:function(a,b){return this.apply(b,Array.from(a));
}});var $try=Function.attempt;Number.implement({limit:function(b,a){return Math.min(a,Math.max(b,this));},round:function(a){a=Math.pow(10,a||0).toFixed(a<0?-a:0);
return Math.round(this*a)/a;},times:function(b,c){for(var a=0;a<this;a++){b.call(c,a,this);}},toFloat:function(){return parseFloat(this);},toInt:function(a){return parseInt(this,a||10);
}});Number.alias("each","times");(function(b){var a={};b.each(function(c){if(!Number[c]){a[c]=function(){return Math[c].apply(null,[this].concat(Array.from(arguments)));
};}});Number.implement(a);})(["abs","acos","asin","atan","atan2","ceil","cos","exp","floor","log","max","min","pow","sin","sqrt","tan"]);String.implement({test:function(a,b){return((typeOf(a)=="regexp")?a:new RegExp(""+a,b)).test(this);
},contains:function(a,b){return(b)?(b+this+b).indexOf(b+a+b)>-1:this.indexOf(a)>-1;},trim:function(){return this.replace(/^\s+|\s+$/g,"");},clean:function(){return this.replace(/\s+/g," ").trim();
},camelCase:function(){return this.replace(/-\D/g,function(a){return a.charAt(1).toUpperCase();});},hyphenate:function(){return this.replace(/[A-Z]/g,function(a){return("-"+a.charAt(0).toLowerCase());
});},capitalize:function(){return this.replace(/\b[a-z]/g,function(a){return a.toUpperCase();});},escapeRegExp:function(){return this.replace(/([-.*+?^${}()|[\]\/\\])/g,"\\$1");
},toInt:function(a){return parseInt(this,a||10);},toFloat:function(){return parseFloat(this);},hexToRgb:function(b){var a=this.match(/^#?(\w{1,2})(\w{1,2})(\w{1,2})$/);
return(a)?a.slice(1).hexToRgb(b):null;},rgbToHex:function(b){var a=this.match(/\d{1,3}/g);return(a)?a.rgbToHex(b):null;},substitute:function(a,b){return this.replace(b||(/\\?\{([^{}]+)\}/g),function(d,c){if(d.charAt(0)=="\\"){return d.slice(1);
}return(a[c]!=null)?a[c]:"";});}});(function(){var l=this.document;var j=l.window=this;var b=1;this.$uid=(j.ActiveXObject)?function(e){return(e.uid||(e.uid=[b++]))[0];
}:function(e){return e.uid||(e.uid=b++);};$uid(j);$uid(l);var a=navigator.userAgent.toLowerCase(),c=navigator.platform.toLowerCase(),k=a.match(/(opera|ie|firefox|chrome|version)[\s\/:]([\w\d\.]+)?.*?(safari|version[\s\/:]([\w\d\.]+)|$)/)||[null,"unknown",0],g=k[1]=="ie"&&l.documentMode;
var p=this.Browser={extend:Function.prototype.extend,name:(k[1]=="version")?k[3]:k[1],version:g||parseFloat((k[1]=="opera"&&k[4])?k[4]:k[2]),Platform:{name:a.match(/ip(?:ad|od|hone)/)?"ios":(a.match(/(?:webos|android)/)||c.match(/mac|win|linux/)||["other"])[0]},Features:{xpath:!!(l.evaluate),air:!!(j.runtime),query:!!(l.querySelector),json:!!(j.JSON)},Plugins:{}};
p[p.name]=true;p[p.name+parseInt(p.version,10)]=true;p.Platform[p.Platform.name]=true;p.Request=(function(){var r=function(){return new XMLHttpRequest();
};var q=function(){return new ActiveXObject("MSXML2.XMLHTTP");};var e=function(){return new ActiveXObject("Microsoft.XMLHTTP");};return Function.attempt(function(){r();
return r;},function(){q();return q;},function(){e();return e;});})();p.Features.xhr=!!(p.Request);var i=(Function.attempt(function(){return navigator.plugins["Shockwave Flash"].description;
},function(){return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version");})||"0 r0").match(/\d+/g);p.Plugins.Flash={version:Number(i[0]||"0."+i[1])||0,build:Number(i[2])||0};
p.exec=function(q){if(!q){return q;}if(j.execScript){j.execScript(q);}else{var e=l.createElement("script");e.setAttribute("type","text/javascript");e.text=q;
l.head.appendChild(e);l.head.removeChild(e);}return q;};String.implement("stripScripts",function(q){var e="";var r=this.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi,function(s,t){e+=t+"\n";
return"";});if(q===true){p.exec(e);}else{if(typeOf(q)=="function"){q(e,r);}}return r;});p.extend({Document:this.Document,Window:this.Window,Element:this.Element,Event:this.Event});
this.Window=this.$constructor=new Type("Window",function(){});this.$family=Function.from("window").hide();Window.mirror(function(e,q){j[e]=q;});this.Document=l.$constructor=new Type("Document",function(){});
l.$family=Function.from("document").hide();Document.mirror(function(e,q){l[e]=q;});l.html=l.documentElement;if(!l.head){l.head=l.getElementsByTagName("head")[0];
}if(l.execCommand){try{l.execCommand("BackgroundImageCache",false,true);}catch(h){}}if(this.attachEvent&&!this.addEventListener){var d=function(){this.detachEvent("onunload",d);
l.head=l.html=l.window=null;};this.attachEvent("onunload",d);}var n=Array.from;try{n(l.html.childNodes);}catch(h){Array.from=function(q){if(typeof q!="string"&&Type.isEnumerable(q)&&typeOf(q)!="array"){var e=q.length,r=new Array(e);
while(e--){r[e]=q[e];}return r;}return n(q);};var m=Array.prototype,o=m.slice;["pop","push","reverse","shift","sort","splice","unshift","concat","join","slice"].each(function(e){var q=m[e];
Array[e]=function(r){return q.apply(Array.from(r),o.call(arguments,1));};});}if(p.Platform.ios){p.Platform.ipod=true;}p.Engine={};var f=function(q,e){p.Engine.name=q;
p.Engine[q+e]=true;p.Engine.version=e;};if(p.ie){p.Engine.trident=true;switch(p.version){case 6:f("trident",4);break;case 7:f("trident",5);break;case 8:f("trident",6);
}}if(p.firefox){p.Engine.gecko=true;if(p.version>=3){f("gecko",19);}else{f("gecko",18);}}if(p.safari||p.chrome){p.Engine.webkit=true;switch(p.version){case 2:f("webkit",419);
break;case 3:f("webkit",420);break;case 4:f("webkit",525);}}if(p.opera){p.Engine.presto=true;if(p.version>=9.6){f("presto",960);}else{if(p.version>=9.5){f("presto",950);
}else{f("presto",925);}}}if(p.name=="unknown"){switch((a.match(/(?:webkit|khtml|gecko)/)||[])[0]){case"webkit":case"khtml":p.Engine.webkit=true;break;case"gecko":p.Engine.gecko=true;
}}this.$exec=p.exec;})();(function(){var k,n,l,g,a={},c={},m=/\\/g;var e=function(q,p){if(q==null){return null;}if(q.Slick===true){return q;}q=(""+q).replace(/^\s+|\s+$/g,"");
g=!!p;var o=(g)?c:a;if(o[q]){return o[q];}k={Slick:true,expressions:[],raw:q,reverse:function(){return e(this.raw,true);}};n=-1;while(q!=(q=q.replace(j,b))){}k.length=k.expressions.length;
return o[k.raw]=(g)?h(k):k;};var i=function(o){if(o==="!"){return" ";}else{if(o===" "){return"!";}else{if((/^!/).test(o)){return o.replace(/^!/,"");}else{return"!"+o;
}}}};var h=function(u){var r=u.expressions;for(var p=0;p<r.length;p++){var t=r[p];var q={parts:[],tag:"*",combinator:i(t[0].combinator)};for(var o=0;o<t.length;
o++){var s=t[o];if(!s.reverseCombinator){s.reverseCombinator=" ";}s.combinator=s.reverseCombinator;delete s.reverseCombinator;}t.reverse().push(q);}return u;
};var f=function(o){return o.replace(/[-[\]{}()*+?.\\^$|,#\s]/g,function(p){return"\\"+p;});};var j=new RegExp("^(?:\\s*(,)\\s*|\\s*(<combinator>+)\\s*|(\\s+)|(<unicode>+|\\*)|\\#(<unicode>+)|\\.(<unicode>+)|\\[\\s*(<unicode1>+)(?:\\s*([*^$!~|]?=)(?:\\s*(?:([\"']?)(.*?)\\9)))?\\s*\\](?!\\])|(:+)(<unicode>+)(?:\\((?:(?:([\"'])([^\\13]*)\\13)|((?:\\([^)]+\\)|[^()]*)+))\\))?)".replace(/<combinator>/,"["+f(">+~`!@$%^&={}\\;</")+"]").replace(/<unicode>/g,"(?:[\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])").replace(/<unicode1>/g,"(?:[:\\w\\u00a1-\\uFFFF-]|\\\\[^\\s0-9a-f])"));
function b(x,s,D,z,r,C,q,B,A,y,u,F,G,v,p,w){if(s||n===-1){k.expressions[++n]=[];l=-1;if(s){return"";}}if(D||z||l===-1){D=D||" ";var t=k.expressions[n];
if(g&&t[l]){t[l].reverseCombinator=i(D);}t[++l]={combinator:D,tag:"*"};}var o=k.expressions[n][l];if(r){o.tag=r.replace(m,"");}else{if(C){o.id=C.replace(m,"");
}else{if(q){q=q.replace(m,"");if(!o.classList){o.classList=[];}if(!o.classes){o.classes=[];}o.classList.push(q);o.classes.push({value:q,regexp:new RegExp("(^|\\s)"+f(q)+"(\\s|$)")});
}else{if(G){w=w||p;w=w?w.replace(m,""):null;if(!o.pseudos){o.pseudos=[];}o.pseudos.push({key:G.replace(m,""),value:w,type:F.length==1?"class":"element"});
}else{if(B){B=B.replace(m,"");u=(u||"").replace(m,"");var E,H;switch(A){case"^=":H=new RegExp("^"+f(u));break;case"$=":H=new RegExp(f(u)+"$");break;case"~=":H=new RegExp("(^|\\s)"+f(u)+"(\\s|$)");
break;case"|=":H=new RegExp("^"+f(u)+"(-|$)");break;case"=":E=function(I){return u==I;};break;case"*=":E=function(I){return I&&I.indexOf(u)>-1;};break;
case"!=":E=function(I){return u!=I;};break;default:E=function(I){return !!I;};}if(u==""&&(/^[*$^]=$/).test(A)){E=function(){return false;};}if(!E){E=function(I){return I&&H.test(I);
};}if(!o.attributes){o.attributes=[];}o.attributes.push({key:B,operator:A,value:u,test:E});}}}}}return"";}var d=(this.Slick||{});d.parse=function(o){return e(o);
};d.escapeRegExp=f;if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);(function(){var j={},l={},b=Object.prototype.toString;
j.isNativeCode=function(c){return(/\{\s*\[native code\]\s*\}/).test(""+c);};j.isXML=function(c){return(!!c.xmlVersion)||(!!c.xml)||(b.call(c)=="[object XMLDocument]")||(c.nodeType==9&&c.documentElement.nodeName!="HTML");
};j.setDocument=function(w){var t=w.nodeType;if(t==9){}else{if(t){w=w.ownerDocument;}else{if(w.navigator){w=w.document;}else{return;}}}if(this.document===w){return;
}this.document=w;var y=w.documentElement,u=this.getUIDXML(y),o=l[u],A;if(o){for(A in o){this[A]=o[A];}return;}o=l[u]={};o.root=y;o.isXMLDocument=this.isXML(w);
o.brokenStarGEBTN=o.starSelectsClosedQSA=o.idGetsName=o.brokenMixedCaseQSA=o.brokenGEBCN=o.brokenCheckedQSA=o.brokenEmptyAttributeQSA=o.isHTMLDocument=o.nativeMatchesSelector=false;
var m,n,x,q,r;var s,c="slick_uniqueid";var z=w.createElement("div");var p=w.body||w.getElementsByTagName("body")[0]||y;p.appendChild(z);try{z.innerHTML='<a id="'+c+'"></a>';
o.isHTMLDocument=!!w.getElementById(c);}catch(v){}if(o.isHTMLDocument){z.style.display="none";z.appendChild(w.createComment(""));n=(z.getElementsByTagName("*").length>1);
try{z.innerHTML="foo</foo>";s=z.getElementsByTagName("*");m=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");}catch(v){}o.brokenStarGEBTN=n||m;try{z.innerHTML='<a name="'+c+'"></a><b id="'+c+'"></b>';
o.idGetsName=w.getElementById(c)===z.firstChild;}catch(v){}if(z.getElementsByClassName){try{z.innerHTML='<a class="f"></a><a class="b"></a>';z.getElementsByClassName("b").length;
z.firstChild.className="b";q=(z.getElementsByClassName("b").length!=2);}catch(v){}try{z.innerHTML='<a class="a"></a><a class="f b a"></a>';x=(z.getElementsByClassName("a").length!=2);
}catch(v){}o.brokenGEBCN=q||x;}if(z.querySelectorAll){try{z.innerHTML="foo</foo>";s=z.querySelectorAll("*");o.starSelectsClosedQSA=(s&&!!s.length&&s[0].nodeName.charAt(0)=="/");
}catch(v){}try{z.innerHTML='<a class="MiX"></a>';o.brokenMixedCaseQSA=!z.querySelectorAll(".MiX").length;}catch(v){}try{z.innerHTML='<select><option selected="selected">a</option></select>';
o.brokenCheckedQSA=(z.querySelectorAll(":checked").length==0);}catch(v){}try{z.innerHTML='<a class=""></a>';o.brokenEmptyAttributeQSA=(z.querySelectorAll('[class*=""]').length!=0);
}catch(v){}}try{z.innerHTML='<form action="s"><input id="action"/></form>';r=(z.firstChild.getAttribute("action")!="s");}catch(v){}o.nativeMatchesSelector=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector;
if(o.nativeMatchesSelector){try{o.nativeMatchesSelector.call(y,":slick");o.nativeMatchesSelector=null;}catch(v){}}}try{y.slick_expando=1;delete y.slick_expando;
o.getUID=this.getUIDHTML;}catch(v){o.getUID=this.getUIDXML;}p.removeChild(z);z=s=p=null;o.getAttribute=(o.isHTMLDocument&&r)?function(D,B){var E=this.attributeGetters[B];
if(E){return E.call(D);}var C=D.getAttributeNode(B);return(C)?C.nodeValue:null;}:function(C,B){var D=this.attributeGetters[B];return(D)?D.call(C):C.getAttribute(B);
};o.hasAttribute=(y&&this.isNativeCode(y.hasAttribute))?function(C,B){return C.hasAttribute(B);}:function(C,B){C=C.getAttributeNode(B);return !!(C&&(C.specified||C.nodeValue));
};o.contains=(y&&this.isNativeCode(y.contains))?function(B,C){return B.contains(C);}:(y&&y.compareDocumentPosition)?function(B,C){return B===C||!!(B.compareDocumentPosition(C)&16);
}:function(B,C){if(C){do{if(C===B){return true;}}while((C=C.parentNode));}return false;};o.documentSorter=(y.compareDocumentPosition)?function(C,B){if(!C.compareDocumentPosition||!B.compareDocumentPosition){return 0;
}return C.compareDocumentPosition(B)&4?-1:C===B?0:1;}:("sourceIndex" in y)?function(C,B){if(!C.sourceIndex||!B.sourceIndex){return 0;}return C.sourceIndex-B.sourceIndex;
}:(w.createRange)?function(E,C){if(!E.ownerDocument||!C.ownerDocument){return 0;}var D=E.ownerDocument.createRange(),B=C.ownerDocument.createRange();D.setStart(E,0);
D.setEnd(E,0);B.setStart(C,0);B.setEnd(C,0);return D.compareBoundaryPoints(Range.START_TO_END,B);}:null;y=null;for(A in o){this[A]=o[A];}};var e=/^([#.]?)((?:[\w-]+|\*))$/,g=/\[.+[*$^]=(?:""|'')?\]/,f={};
j.search=function(U,z,H,s){var p=this.found=(s)?null:(H||[]);if(!U){return p;}else{if(U.navigator){U=U.document;}else{if(!U.nodeType){return p;}}}var F,O,V=this.uniques={},I=!!(H&&H.length),y=(U.nodeType==9);
if(this.document!==(y?U:U.ownerDocument)){this.setDocument(U);}if(I){for(O=p.length;O--;){V[this.getUID(p[O])]=true;}}if(typeof z=="string"){var r=z.match(e);
simpleSelectors:if(r){var u=r[1],v=r[2],A,E;if(!u){if(v=="*"&&this.brokenStarGEBTN){break simpleSelectors;}E=U.getElementsByTagName(v);if(s){return E[0]||null;
}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{if(u=="#"){if(!this.isHTMLDocument||!y){break simpleSelectors;}A=U.getElementById(v);
if(!A){return p;}if(this.idGetsName&&A.getAttributeNode("id").nodeValue!=v){break simpleSelectors;}if(s){return A||null;}if(!(I&&V[this.getUID(A)])){p.push(A);
}}else{if(u=="."){if(!this.isHTMLDocument||((!U.getElementsByClassName||this.brokenGEBCN)&&U.querySelectorAll)){break simpleSelectors;}if(U.getElementsByClassName&&!this.brokenGEBCN){E=U.getElementsByClassName(v);
if(s){return E[0]||null;}for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}else{var T=new RegExp("(^|\\s)"+d.escapeRegExp(v)+"(\\s|$)");E=U.getElementsByTagName("*");
for(O=0;A=E[O++];){className=A.className;if(!(className&&T.test(className))){continue;}if(s){return A;}if(!(I&&V[this.getUID(A)])){p.push(A);}}}}}}if(I){this.sort(p);
}return(s)?null:p;}querySelector:if(U.querySelectorAll){if(!this.isHTMLDocument||f[z]||this.brokenMixedCaseQSA||(this.brokenCheckedQSA&&z.indexOf(":checked")>-1)||(this.brokenEmptyAttributeQSA&&g.test(z))||(!y&&z.indexOf(",")>-1)||d.disableQSA){break querySelector;
}var S=z,x=U;if(!y){var C=x.getAttribute("id"),t="slickid__";x.setAttribute("id",t);S="#"+t+" "+S;U=x.parentNode;}try{if(s){return U.querySelector(S)||null;
}else{E=U.querySelectorAll(S);}}catch(Q){f[z]=1;break querySelector;}finally{if(!y){if(C){x.setAttribute("id",C);}else{x.removeAttribute("id");}U=x;}}if(this.starSelectsClosedQSA){for(O=0;
A=E[O++];){if(A.nodeName>"@"&&!(I&&V[this.getUID(A)])){p.push(A);}}}else{for(O=0;A=E[O++];){if(!(I&&V[this.getUID(A)])){p.push(A);}}}if(I){this.sort(p);
}return p;}F=this.Slick.parse(z);if(!F.length){return p;}}else{if(z==null){return p;}else{if(z.Slick){F=z;}else{if(this.contains(U.documentElement||U,z)){(p)?p.push(z):p=z;
return p;}else{return p;}}}}this.posNTH={};this.posNTHLast={};this.posNTHType={};this.posNTHTypeLast={};this.push=(!I&&(s||(F.length==1&&F.expressions[0].length==1)))?this.pushArray:this.pushUID;
if(p==null){p=[];}var M,L,K;var B,J,D,c,q,G,W;var N,P,o,w,R=F.expressions;search:for(O=0;(P=R[O]);O++){for(M=0;(o=P[M]);M++){B="combinator:"+o.combinator;
if(!this[B]){continue search;}J=(this.isXMLDocument)?o.tag:o.tag.toUpperCase();D=o.id;c=o.classList;q=o.classes;G=o.attributes;W=o.pseudos;w=(M===(P.length-1));
this.bitUniques={};if(w){this.uniques=V;this.found=p;}else{this.uniques={};this.found=[];}if(M===0){this[B](U,J,D,q,G,W,c);if(s&&w&&p.length){break search;
}}else{if(s&&w){for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);if(p.length){break search;}}}else{for(L=0,K=N.length;L<K;L++){this[B](N[L],J,D,q,G,W,c);
}}}N=this.found;}}if(I||(F.expressions.length>1)){this.sort(p);}return(s)?(p[0]||null):p;};j.uidx=1;j.uidk="slick-uniqueid";j.getUIDXML=function(m){var c=m.getAttribute(this.uidk);
if(!c){c=this.uidx++;m.setAttribute(this.uidk,c);}return c;};j.getUIDHTML=function(c){return c.uniqueNumber||(c.uniqueNumber=this.uidx++);};j.sort=function(c){if(!this.documentSorter){return c;
}c.sort(this.documentSorter);return c;};j.cacheNTH={};j.matchNTH=/^([+-]?\d*)?([a-z]+)?([+-]\d+)?$/;j.parseNTHArgument=function(p){var n=p.match(this.matchNTH);
if(!n){return false;}var o=n[2]||false;var m=n[1]||1;if(m=="-"){m=-1;}var c=+n[3]||0;n=(o=="n")?{a:m,b:c}:(o=="odd")?{a:2,b:1}:(o=="even")?{a:2,b:0}:{a:0,b:m};
return(this.cacheNTH[p]=n);};j.createNTHPseudo=function(o,m,c,n){return function(r,p){var t=this.getUID(r);if(!this[c][t]){var z=r.parentNode;if(!z){return false;
}var q=z[o],s=1;if(n){var y=r.nodeName;do{if(q.nodeName!=y){continue;}this[c][this.getUID(q)]=s++;}while((q=q[m]));}else{do{if(q.nodeType!=1){continue;
}this[c][this.getUID(q)]=s++;}while((q=q[m]));}}p=p||"n";var u=this.cacheNTH[p]||this.parseNTHArgument(p);if(!u){return false;}var x=u.a,w=u.b,v=this[c][t];
if(x==0){return w==v;}if(x>0){if(v<w){return false;}}else{if(w<v){return false;}}return((v-w)%x)==0;};};j.pushArray=function(o,c,q,n,m,p){if(this.matchSelector(o,c,q,n,m,p)){this.found.push(o);
}};j.pushUID=function(p,c,r,o,m,q){var n=this.getUID(p);if(!this.uniques[n]&&this.matchSelector(p,c,r,o,m,q)){this.uniques[n]=true;this.found.push(p);}};
j.matchNode=function(m,n){if(this.isHTMLDocument&&this.nativeMatchesSelector){try{return this.nativeMatchesSelector.call(m,n.replace(/\[([^=]+)=\s*([^'"\]]+?)\s*\]/g,'[$1="$2"]'));
}catch(u){}}var t=this.Slick.parse(n);if(!t){return true;}var r=t.expressions,p,s=0,q;for(q=0;(currentExpression=r[q]);q++){if(currentExpression.length==1){var o=currentExpression[0];
if(this.matchSelector(m,(this.isXMLDocument)?o.tag:o.tag.toUpperCase(),o.id,o.classes,o.attributes,o.pseudos)){return true;}s++;}}if(s==t.length){return false;
}var c=this.search(this.document,t),v;for(q=0;v=c[q++];){if(v===m){return true;}}return false;};j.matchPseudo=function(p,c,o){var m="pseudo:"+c;if(this[m]){return this[m](p,o);
}var n=this.getAttribute(p,c);return(o)?o==n:!!n;};j.matchSelector=function(n,u,c,o,p,r){if(u){var s=(this.isXMLDocument)?n.nodeName:n.nodeName.toUpperCase();
if(u=="*"){if(s<"@"){return false;}}else{if(s!=u){return false;}}}if(c&&n.getAttribute("id")!=c){return false;}var q,m,t;if(o){for(q=o.length;q--;){t=n.getAttribute("class")||n.className;
if(!(t&&o[q].regexp.test(t))){return false;}}}if(p){for(q=p.length;q--;){m=p[q];if(m.operator?!m.test(this.getAttribute(n,m.key)):!this.hasAttribute(n,m.key)){return false;
}}}if(r){for(q=r.length;q--;){m=r[q];if(!this.matchPseudo(n,m.key,m.value)){return false;}}}return true;};var i={" ":function(p,v,m,q,r,t,o){var s,u,n;
if(this.isHTMLDocument){getById:if(m){u=this.document.getElementById(m);if((!u&&p.all)||(this.idGetsName&&u&&u.getAttributeNode("id").nodeValue!=m)){n=p.all[m];
if(!n){return;}if(!n[0]){n=[n];}for(s=0;u=n[s++];){var c=u.getAttributeNode("id");if(c&&c.nodeValue==m){this.push(u,v,null,q,r,t);break;}}return;}if(!u){if(this.contains(this.root,p)){return;
}else{break getById;}}else{if(this.document!==p&&!this.contains(p,u)){return;}}this.push(u,v,null,q,r,t);return;}getByClass:if(q&&p.getElementsByClassName&&!this.brokenGEBCN){n=p.getElementsByClassName(o.join(" "));
if(!(n&&n.length)){break getByClass;}for(s=0;u=n[s++];){this.push(u,v,m,null,r,t);}return;}}getByTag:{n=p.getElementsByTagName(v);if(!(n&&n.length)){break getByTag;
}if(!this.brokenStarGEBTN){v=null;}for(s=0;u=n[s++];){this.push(u,v,m,q,r,t);}}},">":function(o,c,q,n,m,p){if((o=o.firstChild)){do{if(o.nodeType==1){this.push(o,c,q,n,m,p);
}}while((o=o.nextSibling));}},"+":function(o,c,q,n,m,p){while((o=o.nextSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);break;}}},"^":function(o,c,q,n,m,p){o=o.firstChild;
if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:+"](o,c,q,n,m,p);}}},"~":function(p,c,r,o,m,q){while((p=p.nextSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}},"++":function(o,c,q,n,m,p){this["combinator:+"](o,c,q,n,m,p);
this["combinator:!+"](o,c,q,n,m,p);},"~~":function(o,c,q,n,m,p){this["combinator:~"](o,c,q,n,m,p);this["combinator:!~"](o,c,q,n,m,p);},"!":function(o,c,q,n,m,p){while((o=o.parentNode)){if(o!==this.document){this.push(o,c,q,n,m,p);
}}},"!>":function(o,c,q,n,m,p){o=o.parentNode;if(o!==this.document){this.push(o,c,q,n,m,p);}},"!+":function(o,c,q,n,m,p){while((o=o.previousSibling)){if(o.nodeType==1){this.push(o,c,q,n,m,p);
break;}}},"!^":function(o,c,q,n,m,p){o=o.lastChild;if(o){if(o.nodeType==1){this.push(o,c,q,n,m,p);}else{this["combinator:!+"](o,c,q,n,m,p);}}},"!~":function(p,c,r,o,m,q){while((p=p.previousSibling)){if(p.nodeType!=1){continue;
}var n=this.getUID(p);if(this.bitUniques[n]){break;}this.bitUniques[n]=true;this.push(p,c,r,o,m,q);}}};for(var h in i){j["combinator:"+h]=i[h];}var k={empty:function(c){var m=c.firstChild;
return !(m&&m.nodeType==1)&&!(c.innerText||c.textContent||"").length;},not:function(c,m){return !this.matchNode(c,m);},contains:function(c,m){return(c.innerText||c.textContent||"").indexOf(m)>-1;
},"first-child":function(c){while((c=c.previousSibling)){if(c.nodeType==1){return false;}}return true;},"last-child":function(c){while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"only-child":function(n){var m=n;while((m=m.previousSibling)){if(m.nodeType==1){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeType==1){return false;
}}return true;},"nth-child":j.createNTHPseudo("firstChild","nextSibling","posNTH"),"nth-last-child":j.createNTHPseudo("lastChild","previousSibling","posNTHLast"),"nth-of-type":j.createNTHPseudo("firstChild","nextSibling","posNTHType",true),"nth-last-of-type":j.createNTHPseudo("lastChild","previousSibling","posNTHTypeLast",true),index:function(m,c){return this["pseudo:nth-child"](m,""+c+1);
},even:function(c){return this["pseudo:nth-child"](c,"2n");},odd:function(c){return this["pseudo:nth-child"](c,"2n+1");},"first-of-type":function(c){var m=c.nodeName;
while((c=c.previousSibling)){if(c.nodeName==m){return false;}}return true;},"last-of-type":function(c){var m=c.nodeName;while((c=c.nextSibling)){if(c.nodeName==m){return false;
}}return true;},"only-of-type":function(n){var m=n,o=n.nodeName;while((m=m.previousSibling)){if(m.nodeName==o){return false;}}var c=n;while((c=c.nextSibling)){if(c.nodeName==o){return false;
}}return true;},enabled:function(c){return !c.disabled;},disabled:function(c){return c.disabled;},checked:function(c){return c.checked||c.selected;},focus:function(c){return this.isHTMLDocument&&this.document.activeElement===c&&(c.href||c.type||this.hasAttribute(c,"tabindex"));
},root:function(c){return(c===this.root);},selected:function(c){return c.selected;}};for(var a in k){j["pseudo:"+a]=k[a];}j.attributeGetters={"class":function(){return this.getAttribute("class")||this.className;
},"for":function(){return("htmlFor" in this)?this.htmlFor:this.getAttribute("for");},href:function(){return("href" in this)?this.getAttribute("href",2):this.getAttribute("href");
},style:function(){return(this.style)?this.style.cssText:this.getAttribute("style");},tabindex:function(){var c=this.getAttributeNode("tabindex");return(c&&c.specified)?c.nodeValue:null;
},type:function(){return this.getAttribute("type");}};var d=j.Slick=(this.Slick||{});d.version="1.1.5";d.search=function(m,n,c){return j.search(m,n,c);
};d.find=function(c,m){return j.search(c,m,null,true);};d.contains=function(c,m){j.setDocument(c);return j.contains(c,m);};d.getAttribute=function(m,c){return j.getAttribute(m,c);
};d.match=function(m,c){if(!(m&&c)){return false;}if(!c||c===m){return true;}j.setDocument(m);return j.matchNode(m,c);};d.defineAttributeGetter=function(c,m){j.attributeGetters[c]=m;
return this;};d.lookupAttributeGetter=function(c){return j.attributeGetters[c];};d.definePseudo=function(c,m){j["pseudo:"+c]=function(o,n){return m.call(o,n);
};return this;};d.lookupPseudo=function(c){var m=j["pseudo:"+c];if(m){return function(n){return m.call(this,n);};}return null;};d.override=function(m,c){j.override(m,c);
return this;};d.isXML=j.isXML;d.uidOf=function(c){return j.getUIDHTML(c);};if(!this.Slick){this.Slick=d;}}).apply((typeof exports!="undefined")?exports:this);
var Element=function(b,g){var h=Element.Constructors[b];if(h){return h(g);}if(typeof b!="string"){return document.id(b).set(g);}if(!g){g={};}if(!(/^[\w-]+$/).test(b)){var e=Slick.parse(b).expressions[0][0];
b=(e.tag=="*")?"div":e.tag;if(e.id&&g.id==null){g.id=e.id;}var d=e.attributes;if(d){for(var f=0,c=d.length;f<c;f++){var a=d[f];if(g[a.key]!=null){continue;
}if(a.value!=null&&a.operator=="="){g[a.key]=a.value;}else{if(!a.value&&!a.operator){g[a.key]=true;}}}}if(e.classList&&g["class"]==null){g["class"]=e.classList.join(" ");
}}return document.newElement(b,g);};if(Browser.Element){Element.prototype=Browser.Element.prototype;}new Type("Element",Element).mirror(function(a){if(Array.prototype[a]){return;
}var b={};b[a]=function(){var h=[],e=arguments,j=true;for(var g=0,d=this.length;g<d;g++){var f=this[g],c=h[g]=f[a].apply(f,e);j=(j&&typeOf(c)=="element");
}return(j)?new Elements(h):h;};Elements.implement(b);});if(!Browser.Element){Element.parent=Object;Element.Prototype={"$family":Function.from("element").hide()};
Element.mirror(function(a,b){Element.Prototype[a]=b;});}Element.Constructors={};Element.Constructors=new Hash;var IFrame=new Type("IFrame",function(){var e=Array.link(arguments,{properties:Type.isObject,iframe:function(f){return(f!=null);
}});var c=e.properties||{},b;if(e.iframe){b=document.id(e.iframe);}var d=c.onload||function(){};delete c.onload;c.id=c.name=[c.id,c.name,b?(b.id||b.name):"IFrame_"+String.uniqueID()].pick();
b=new Element(b||"iframe",c);var a=function(){d.call(b.contentWindow);};if(window.frames[c.id]){a();}else{b.addListener("load",a);}return b;});var Elements=this.Elements=function(a){if(a&&a.length){var e={},d;
for(var c=0;d=a[c++];){var b=Slick.uidOf(d);if(!e[b]){e[b]=true;this.push(d);}}}};Elements.prototype={length:0};Elements.parent=Array;new Type("Elements",Elements).implement({filter:function(a,b){if(!a){return this;
}return new Elements(Array.filter(this,(typeOf(a)=="string")?function(c){return c.match(a);}:a,b));}.protect(),push:function(){var d=this.length;for(var b=0,a=arguments.length;
b<a;b++){var c=document.id(arguments[b]);if(c){this[d++]=c;}}return(this.length=d);}.protect(),unshift:function(){var b=[];for(var c=0,a=arguments.length;
c<a;c++){var d=document.id(arguments[c]);if(d){b.push(d);}}return Array.prototype.unshift.apply(this,b);}.protect(),concat:function(){var b=new Elements(this);
for(var c=0,a=arguments.length;c<a;c++){var d=arguments[c];if(Type.isEnumerable(d)){b.append(d);}else{b.push(d);}}return b;}.protect(),append:function(c){for(var b=0,a=c.length;
b<a;b++){this.push(c[b]);}return this;}.protect(),empty:function(){while(this.length){delete this[--this.length];}return this;}.protect()});Elements.alias("extend","append");
(function(){var g=Array.prototype.splice,b={"0":0,"1":1,length:2};g.call(b,1,1);if(b[1]==1){Elements.implement("splice",function(){var e=this.length;g.apply(this,arguments);
while(e>=this.length){delete this[e--];}return this;}.protect());}Elements.implement(Array.prototype);Array.mirror(Elements);var f;try{var a=document.createElement("<input name=x>");
f=(a.name=="x");}catch(c){}var d=function(e){return(""+e).replace(/&/g,"&amp;").replace(/"/g,"&quot;");};Document.implement({newElement:function(e,h){if(h&&h.checked!=null){h.defaultChecked=h.checked;
}if(f&&h){e="<"+e;if(h.name){e+=' name="'+d(h.name)+'"';}if(h.type){e+=' type="'+d(h.type)+'"';}e+=">";delete h.name;delete h.type;}return this.id(this.createElement(e)).set(h);
}});})();Document.implement({newTextNode:function(a){return this.createTextNode(a);},getDocument:function(){return this;},getWindow:function(){return this.window;
},id:(function(){var a={string:function(d,c,b){d=Slick.find(b,"#"+d.replace(/(\W)/g,"\\$1"));return(d)?a.element(d,c):null;},element:function(b,c){$uid(b);
if(!c&&!b.$family&&!(/^(?:object|embed)$/i).test(b.tagName)){Object.append(b,Element.Prototype);}return b;},object:function(c,d,b){if(c.toElement){return a.element(c.toElement(b),d);
}return null;}};a.textnode=a.whitespace=a.window=a.document=function(b){return b;};return function(c,e,d){if(c&&c.$family&&c.uid){return c;}var b=typeOf(c);
return(a[b])?a[b](c,e,d||document):null;};})()});if(window.$==null){Window.implement("$",function(a,b){return document.id(a,b,this.document);});}Window.implement({getDocument:function(){return this.document;
},getWindow:function(){return this;}});[Document,Element].invoke("implement",{getElements:function(a){return Slick.search(this,a,new Elements);},getElement:function(a){return document.id(Slick.find(this,a));
}});(function(b,d,a){this.Selectors={};var e=this.Selectors.Pseudo=new Hash();var c=function(){for(var f in e){if(e.hasOwnProperty(f)){Slick.definePseudo(f,e[f]);
delete e[f];}}};Slick.search=function(g,h,f){c();return b.call(this,g,h,f);};Slick.find=function(f,g){c();return d.call(this,f,g);};Slick.match=function(g,f){c();
return a.call(this,g,f);};})(Slick.search,Slick.find,Slick.match);if(window.$$==null){Window.implement("$$",function(a){var f=new Elements;if(arguments.length==1&&typeof a=="string"){return Slick.search(this.document,a,f);
}var c=Array.flatten(arguments);for(var d=0,b=c.length;d<b;d++){var e=c[d];switch(typeOf(e)){case"element":f.push(e);break;case"string":Slick.search(this.document,e,f);
}}return f;});}if(window.$$==null){Window.implement("$$",function(a){if(arguments.length==1){if(typeof a=="string"){return Slick.search(this.document,a,new Elements);
}else{if(Type.isEnumerable(a)){return new Elements(a);}}}return new Elements(arguments);});}(function(){var k={},i={};var n={input:"checked",option:"selected",textarea:"value"};
var e=function(p){return(i[p]||(i[p]={}));};var j=function(q){var p=q.uid;if(q.removeEvents){q.removeEvents();}if(q.clearAttributes){q.clearAttributes();
}if(p!=null){delete k[p];delete i[p];}return q;};var o=["defaultValue","accessKey","cellPadding","cellSpacing","colSpan","frameBorder","maxLength","readOnly","rowSpan","tabIndex","useMap"];
var d=["compact","nowrap","ismap","declare","noshade","checked","disabled","readOnly","multiple","selected","noresize","defer","defaultChecked"];var g={html:"innerHTML","class":"className","for":"htmlFor",text:(function(){var p=document.createElement("div");
return(p.textContent==null)?"innerText":"textContent";})()};var m=["type"];var h=["value","defaultValue"];var l=/^(?:href|src|usemap)$/i;d=d.associate(d);
o=o.associate(o.map(String.toLowerCase));m=m.associate(m);Object.append(g,h.associate(h));var c={before:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p);
}},after:function(q,p){var r=p.parentNode;if(r){r.insertBefore(q,p.nextSibling);}},bottom:function(q,p){p.appendChild(q);},top:function(q,p){p.insertBefore(q,p.firstChild);
}};c.inside=c.bottom;Object.each(c,function(q,r){r=r.capitalize();var p={};p["inject"+r]=function(s){q(this,document.id(s,true));return this;};p["grab"+r]=function(s){q(document.id(s,true),this);
return this;};Element.implement(p);});var b=function(s,r){if(!s){return r;}s=Object.clone(Slick.parse(s));var q=s.expressions;for(var p=q.length;p--;){q[p][0].combinator=r;
}return s;};Element.implement({set:function(r,q){var p=Element.Properties[r];(p&&p.set)?p.set.call(this,q):this.setProperty(r,q);}.overloadSetter(),get:function(q){var p=Element.Properties[q];
return(p&&p.get)?p.get.apply(this):this.getProperty(q);}.overloadGetter(),erase:function(q){var p=Element.Properties[q];(p&&p.erase)?p.erase.apply(this):this.removeProperty(q);
return this;},setProperty:function(q,r){q=o[q]||q;if(r==null){return this.removeProperty(q);}var p=g[q];(p)?this[p]=r:(d[q])?this[q]=!!r:this.setAttribute(q,""+r);
return this;},setProperties:function(p){for(var q in p){this.setProperty(q,p[q]);}return this;},getProperty:function(q){q=o[q]||q;var p=g[q]||m[q];return(p)?this[p]:(d[q])?!!this[q]:(l.test(q)?this.getAttribute(q,2):(p=this.getAttributeNode(q))?p.nodeValue:null)||null;
},getProperties:function(){var p=Array.from(arguments);return p.map(this.getProperty,this).associate(p);},removeProperty:function(q){q=o[q]||q;var p=g[q];
(p)?this[p]="":(d[q])?this[q]=false:this.removeAttribute(q);return this;},removeProperties:function(){Array.each(arguments,this.removeProperty,this);return this;
},hasClass:function(p){return this.className.clean().contains(p," ");},addClass:function(p){if(!this.hasClass(p)){this.className=(this.className+" "+p).clean();
}return this;},removeClass:function(p){this.className=this.className.replace(new RegExp("(^|\\s)"+p+"(?:\\s|$)"),"$1");return this;},toggleClass:function(p,q){if(q==null){q=!this.hasClass(p);
}return(q)?this.addClass(p):this.removeClass(p);},adopt:function(){var s=this,p,u=Array.flatten(arguments),t=u.length;if(t>1){s=p=document.createDocumentFragment();
}for(var r=0;r<t;r++){var q=document.id(u[r],true);if(q){s.appendChild(q);}}if(p){this.appendChild(p);}return this;},appendText:function(q,p){return this.grab(this.getDocument().newTextNode(q),p);
},grab:function(q,p){c[p||"bottom"](document.id(q,true),this);return this;},inject:function(q,p){c[p||"bottom"](this,document.id(q,true));return this;},replaces:function(p){p=document.id(p,true);
p.parentNode.replaceChild(this,p);return this;},wraps:function(q,p){q=document.id(q,true);return this.replaces(q).grab(q,p);},getPrevious:function(p){return document.id(Slick.find(this,b(p,"!~")));
},getAllPrevious:function(p){return Slick.search(this,b(p,"!~"),new Elements);},getNext:function(p){return document.id(Slick.find(this,b(p,"~")));},getAllNext:function(p){return Slick.search(this,b(p,"~"),new Elements);
},getFirst:function(p){return document.id(Slick.search(this,b(p,">"))[0]);},getLast:function(p){return document.id(Slick.search(this,b(p,">")).getLast());
},getParent:function(p){return document.id(Slick.find(this,b(p,"!")));},getParents:function(p){return Slick.search(this,b(p,"!"),new Elements);},getSiblings:function(p){return Slick.search(this,b(p,"~~"),new Elements);
},getChildren:function(p){return Slick.search(this,b(p,">"),new Elements);},getWindow:function(){return this.ownerDocument.window;},getDocument:function(){return this.ownerDocument;
},getElementById:function(p){return document.id(Slick.find(this,"#"+(""+p).replace(/(\W)/g,"\\$1")));},getSelected:function(){this.selectedIndex;return new Elements(Array.from(this.options).filter(function(p){return p.selected;
}));},toQueryString:function(){var p=[];this.getElements("input, select, textarea").each(function(r){var q=r.type;if(!r.name||r.disabled||q=="submit"||q=="reset"||q=="file"||q=="image"){return;
}var s=(r.get("tag")=="select")?r.getSelected().map(function(t){return document.id(t).get("value");}):((q=="radio"||q=="checkbox")&&!r.checked)?null:r.get("value");
Array.from(s).each(function(t){if(typeof t!="undefined"){p.push(encodeURIComponent(r.name)+"="+encodeURIComponent(t));}});});return p.join("&");},destroy:function(){var p=j(this).getElementsByTagName("*");
Array.each(p,j);Element.dispose(this);return null;},empty:function(){Array.from(this.childNodes).each(Element.dispose);return this;},dispose:function(){return(this.parentNode)?this.parentNode.removeChild(this):this;
},match:function(p){return !p||Slick.match(this,p);}});var a=function(t,s,q){if(!q){t.setAttributeNode(document.createAttribute("id"));}if(t.clearAttributes){t.clearAttributes();
t.mergeAttributes(s);t.removeAttribute("uid");if(t.options){var u=t.options,p=s.options;for(var r=u.length;r--;){u[r].selected=p[r].selected;}}}var v=n[s.tagName.toLowerCase()];
if(v&&s[v]){t[v]=s[v];}};Element.implement("clone",function(r,p){r=r!==false;var w=this.cloneNode(r),q;if(r){var s=w.getElementsByTagName("*"),u=this.getElementsByTagName("*");
for(q=s.length;q--;){a(s[q],u[q],p);}}a(w,this,p);if(Browser.ie){var t=w.getElementsByTagName("object"),v=this.getElementsByTagName("object");for(q=t.length;
q--;){t[q].outerHTML=v[q].outerHTML;}}return document.id(w);});var f={contains:function(p){return Slick.contains(this,p);}};if(!document.contains){Document.implement(f);
}if(!document.createElement("div").contains){Element.implement(f);}Element.implement("hasChild",function(p){return this!==p&&this.contains(p);});[Element,Window,Document].invoke("implement",{addListener:function(s,r){if(s=="unload"){var p=r,q=this;
r=function(){q.removeListener("unload",r);p();};}else{k[$uid(this)]=this;}if(this.addEventListener){this.addEventListener(s,r,!!arguments[2]);}else{this.attachEvent("on"+s,r);
}return this;},removeListener:function(q,p){if(this.removeEventListener){this.removeEventListener(q,p,!!arguments[2]);}else{this.detachEvent("on"+q,p);
}return this;},retrieve:function(q,p){var s=e($uid(this)),r=s[q];if(p!=null&&r==null){r=s[q]=p;}return r!=null?r:null;},store:function(q,p){var r=e($uid(this));
r[q]=p;return this;},eliminate:function(p){var q=e($uid(this));delete q[p];return this;}});if(window.attachEvent&&!window.addEventListener){window.addListener("unload",function(){Object.each(k,j);
if(window.CollectGarbage){CollectGarbage();}});}})();Element.Properties={};Element.Properties=new Hash;Element.Properties.style={set:function(a){this.style.cssText=a;
},get:function(){return this.style.cssText;},erase:function(){this.style.cssText="";}};Element.Properties.tag={get:function(){return this.tagName.toLowerCase();
}};(function(a){if(a!=null){Element.Properties.maxlength=Element.Properties.maxLength={get:function(){var b=this.getAttribute("maxLength");return b==a?null:b;
}};}})(document.createElement("input").getAttribute("maxLength"));Element.Properties.html=(function(){var c=Function.attempt(function(){var e=document.createElement("table");
e.innerHTML="<tr><td></td></tr>";});var d=document.createElement("div");var a={table:[1,"<table>","</table>"],select:[1,"<select>","</select>"],tbody:[2,"<table><tbody>","</tbody></table>"],tr:[3,"<table><tbody><tr>","</tr></tbody></table>"]};
a.thead=a.tfoot=a.tbody;var b={set:function(){var f=Array.flatten(arguments).join("");var g=(!c&&a[this.get("tag")]);if(g){var h=d;h.innerHTML=g[1]+f+g[2];
for(var e=g[0];e--;){h=h.firstChild;}this.empty().adopt(h.childNodes);}else{this.innerHTML=f;}}};b.erase=b.set;return b;})();(function(){var c=document.html;
Element.Properties.styles={set:function(f){this.setStyles(f);}};var e=(c.style.opacity!=null);var d=/alpha\(opacity=([\d.]+)\)/i;var b=function(g,f){if(!g.currentStyle||!g.currentStyle.hasLayout){g.style.zoom=1;
}if(e){g.style.opacity=f;}else{f=(f*100).limit(0,100).round();f=(f==100)?"":"alpha(opacity="+f+")";var h=g.style.filter||g.getComputedStyle("filter")||"";
g.style.filter=d.test(h)?h.replace(d,f):h+f;}};Element.Properties.opacity={set:function(g){var f=this.style.visibility;if(g==0&&f!="hidden"){this.style.visibility="hidden";
}else{if(g!=0&&f!="visible"){this.style.visibility="visible";}}b(this,g);},get:(e)?function(){var f=this.style.opacity||this.getComputedStyle("opacity");
return(f=="")?1:f;}:function(){var f,g=(this.style.filter||this.getComputedStyle("filter"));if(g){f=g.match(d);}return(f==null||g==null)?1:(f[1]/100);}};
var a=(c.style.cssFloat==null)?"styleFloat":"cssFloat";Element.implement({getComputedStyle:function(h){if(this.currentStyle){return this.currentStyle[h.camelCase()];
}var g=Element.getDocument(this).defaultView,f=g?g.getComputedStyle(this,null):null;return(f)?f.getPropertyValue((h==a)?"float":h.hyphenate()):null;},setOpacity:function(f){b(this,f);
return this;},getOpacity:function(){return this.get("opacity");},setStyle:function(g,f){switch(g){case"opacity":return this.set("opacity",parseFloat(f));
case"float":g=a;}g=g.camelCase();if(typeOf(f)!="string"){var h=(Element.Styles[g]||"@").split(" ");f=Array.from(f).map(function(k,j){if(!h[j]){return"";
}return(typeOf(k)=="number")?h[j].replace("@",Math.round(k)):k;}).join(" ");}else{if(f==String(Number(f))){f=Math.round(f);}}this.style[g]=f;return this;
},getStyle:function(l){switch(l){case"opacity":return this.get("opacity");case"float":l=a;}l=l.camelCase();var f=this.style[l];if(!f||l=="zIndex"){f=[];
for(var k in Element.ShortStyles){if(l!=k){continue;}for(var j in Element.ShortStyles[k]){f.push(this.getStyle(j));}return f.join(" ");}f=this.getComputedStyle(l);
}if(f){f=String(f);var h=f.match(/rgba?\([\d\s,]+\)/);if(h){f=f.replace(h[0],h[0].rgbToHex());}}if(Browser.opera||(Browser.ie&&isNaN(parseFloat(f)))){if((/^(height|width)$/).test(l)){var g=(l=="width")?["left","right"]:["top","bottom"],i=0;
g.each(function(m){i+=this.getStyle("border-"+m+"-width").toInt()+this.getStyle("padding-"+m).toInt();},this);return this["offset"+l.capitalize()]-i+"px";
}if(Browser.opera&&String(f).indexOf("px")!=-1){return f;}if((/^border(.+)Width|margin|padding/).test(l)){return"0px";}}return f;},setStyles:function(g){for(var f in g){this.setStyle(f,g[f]);
}return this;},getStyles:function(){var f={};Array.flatten(arguments).each(function(g){f[g]=this.getStyle(g);},this);return f;}});Element.Styles={left:"@px",top:"@px",bottom:"@px",right:"@px",width:"@px",height:"@px",maxWidth:"@px",maxHeight:"@px",minWidth:"@px",minHeight:"@px",backgroundColor:"rgb(@, @, @)",backgroundPosition:"@px @px",color:"rgb(@, @, @)",fontSize:"@px",letterSpacing:"@px",lineHeight:"@px",clip:"rect(@px @px @px @px)",margin:"@px @px @px @px",padding:"@px @px @px @px",border:"@px @ rgb(@, @, @) @px @ rgb(@, @, @) @px @ rgb(@, @, @)",borderWidth:"@px @px @px @px",borderStyle:"@ @ @ @",borderColor:"rgb(@, @, @) rgb(@, @, @) rgb(@, @, @) rgb(@, @, @)",zIndex:"@",zoom:"@",fontWeight:"@",textIndent:"@px",opacity:"@"};
Element.Styles=new Hash(Element.Styles);Element.ShortStyles={margin:{},padding:{},border:{},borderWidth:{},borderStyle:{},borderColor:{}};["Top","Right","Bottom","Left"].each(function(l){var k=Element.ShortStyles;
var g=Element.Styles;["margin","padding"].each(function(m){var n=m+l;k[m][n]=g[n]="@px";});var j="border"+l;k.border[j]=g[j]="@px @ rgb(@, @, @)";var i=j+"Width",f=j+"Style",h=j+"Color";
k[j]={};k.borderWidth[i]=k[j][i]=g[i]="@px";k.borderStyle[f]=k[j][f]=g[f]="@";k.borderColor[h]=k[j][h]=g[h]="rgb(@, @, @)";});})();(function(){var h=document.createElement("div"),e=document.createElement("div");
h.style.height="0";h.appendChild(e);var d=(e.offsetParent===h);h=e=null;var l=function(m){return k(m,"position")!="static"||a(m);};var i=function(m){return l(m)||(/^(?:table|td|th)$/i).test(m.tagName);
};Element.implement({scrollTo:function(m,n){if(a(this)){this.getWindow().scrollTo(m,n);}else{this.scrollLeft=m;this.scrollTop=n;}return this;},getSize:function(){if(a(this)){return this.getWindow().getSize();
}return{x:this.offsetWidth,y:this.offsetHeight};},getScrollSize:function(){if(a(this)){return this.getWindow().getScrollSize();}return{x:this.scrollWidth,y:this.scrollHeight};
},getScroll:function(){if(a(this)){return this.getWindow().getScroll();}return{x:this.scrollLeft,y:this.scrollTop};},getScrolls:function(){var n=this.parentNode,m={x:0,y:0};
while(n&&!a(n)){m.x+=n.scrollLeft;m.y+=n.scrollTop;n=n.parentNode;}return m;},getOffsetParent:d?function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}var n=(k(m,"position")=="static")?i:l;while((m=m.parentNode)){if(n(m)){return m;}}return null;}:function(){var m=this;if(a(m)||k(m,"position")=="fixed"){return null;
}try{return m.offsetParent;}catch(n){}return null;},getOffsets:function(){if(this.getBoundingClientRect&&!Browser.Platform.ios){var r=this.getBoundingClientRect(),o=document.id(this.getDocument().documentElement),q=o.getScroll(),t=this.getScrolls(),s=(k(this,"position")=="fixed");
return{x:r.left.toInt()+t.x+((s)?0:q.x)-o.clientLeft,y:r.top.toInt()+t.y+((s)?0:q.y)-o.clientTop};}var n=this,m={x:0,y:0};if(a(this)){return m;}while(n&&!a(n)){m.x+=n.offsetLeft;
m.y+=n.offsetTop;if(Browser.firefox){if(!c(n)){m.x+=b(n);m.y+=g(n);}var p=n.parentNode;if(p&&k(p,"overflow")!="visible"){m.x+=b(p);m.y+=g(p);}}else{if(n!=this&&Browser.safari){m.x+=b(n);
m.y+=g(n);}}n=n.offsetParent;}if(Browser.firefox&&!c(this)){m.x-=b(this);m.y-=g(this);}return m;},getPosition:function(p){if(a(this)){return{x:0,y:0};}var q=this.getOffsets(),n=this.getScrolls();
var m={x:q.x-n.x,y:q.y-n.y};if(p&&(p=document.id(p))){var o=p.getPosition();return{x:m.x-o.x-b(p),y:m.y-o.y-g(p)};}return m;},getCoordinates:function(o){if(a(this)){return this.getWindow().getCoordinates();
}var m=this.getPosition(o),n=this.getSize();var p={left:m.x,top:m.y,width:n.x,height:n.y};p.right=p.left+p.width;p.bottom=p.top+p.height;return p;},computePosition:function(m){return{left:m.x-j(this,"margin-left"),top:m.y-j(this,"margin-top")};
},setPosition:function(m){return this.setStyles(this.computePosition(m));}});[Document,Window].invoke("implement",{getSize:function(){var m=f(this);return{x:m.clientWidth,y:m.clientHeight};
},getScroll:function(){var n=this.getWindow(),m=f(this);return{x:n.pageXOffset||m.scrollLeft,y:n.pageYOffset||m.scrollTop};},getScrollSize:function(){var o=f(this),n=this.getSize(),m=this.getDocument().body;
return{x:Math.max(o.scrollWidth,m.scrollWidth,n.x),y:Math.max(o.scrollHeight,m.scrollHeight,n.y)};},getPosition:function(){return{x:0,y:0};},getCoordinates:function(){var m=this.getSize();
return{top:0,left:0,bottom:m.y,right:m.x,height:m.y,width:m.x};}});var k=Element.getComputedStyle;function j(m,n){return k(m,n).toInt()||0;}function c(m){return k(m,"-moz-box-sizing")=="border-box";
}function g(m){return j(m,"border-top-width");}function b(m){return j(m,"border-left-width");}function a(m){return(/^(?:body|html)$/i).test(m.tagName);
}function f(m){var n=m.getDocument();return(!n.compatMode||n.compatMode=="CSS1Compat")?n.html:n.body;}})();Element.alias({position:"setPosition"});[Window,Document,Element].invoke("implement",{getHeight:function(){return this.getSize().y;
},getWidth:function(){return this.getSize().x;},getScrollTop:function(){return this.getScroll().y;},getScrollLeft:function(){return this.getScroll().x;
},getScrollHeight:function(){return this.getScrollSize().y;},getScrollWidth:function(){return this.getScrollSize().x;},getTop:function(){return this.getPosition().y;
},getLeft:function(){return this.getPosition().x;}});(function(){var a=Object.prototype.hasOwnProperty;Object.extend({subset:function(d,g){var f={};for(var e=0,b=g.length;
e<b;e++){var c=g[e];if(c in d){f[c]=d[c];}}return f;},map:function(b,e,f){var d={};for(var c in b){if(a.call(b,c)){d[c]=e.call(f,b[c],c,b);}}return d;},filter:function(b,e,g){var d={};
for(var c in b){var f=b[c];if(a.call(b,c)&&e.call(g,f,c,b)){d[c]=f;}}return d;},every:function(b,d,e){for(var c in b){if(a.call(b,c)&&!d.call(e,b[c],c)){return false;
}}return true;},some:function(b,d,e){for(var c in b){if(a.call(b,c)&&d.call(e,b[c],c)){return true;}}return false;},keys:function(b){var d=[];for(var c in b){if(a.call(b,c)){d.push(c);
}}return d;},values:function(c){var b=[];for(var d in c){if(a.call(c,d)){b.push(c[d]);}}return b;},getLength:function(b){return Object.keys(b).length;},keyOf:function(b,d){for(var c in b){if(a.call(b,c)&&b[c]===d){return c;
}}return null;},contains:function(b,c){return Object.keyOf(b,c)!=null;},toQueryString:function(b,c){var d=[];Object.each(b,function(h,g){if(c){g=c+"["+g+"]";
}var f;switch(typeOf(h)){case"object":f=Object.toQueryString(h,g);break;case"array":var e={};h.each(function(k,j){e[j]=k;});f=Object.toQueryString(e,g);
break;default:f=g+"="+encodeURIComponent(h);}if(h!=null){d.push(f);}});return d.join("&");}});})();Hash.implement({has:Object.prototype.hasOwnProperty,keyOf:function(a){return Object.keyOf(this,a);
},hasValue:function(a){return Object.contains(this,a);},extend:function(a){Hash.each(a||{},function(c,b){Hash.set(this,b,c);},this);return this;},combine:function(a){Hash.each(a||{},function(c,b){Hash.include(this,b,c);
},this);return this;},erase:function(a){if(this.hasOwnProperty(a)){delete this[a];}return this;},get:function(a){return(this.hasOwnProperty(a))?this[a]:null;
},set:function(a,b){if(!this[a]||this.hasOwnProperty(a)){this[a]=b;}return this;},empty:function(){Hash.each(this,function(b,a){delete this[a];},this);
return this;},include:function(a,b){if(this[a]==null){this[a]=b;}return this;},map:function(a,b){return new Hash(Object.map(this,a,b));},filter:function(a,b){return new Hash(Object.filter(this,a,b));
},every:function(a,b){return Object.every(this,a,b);},some:function(a,b){return Object.some(this,a,b);},getKeys:function(){return Object.keys(this);},getValues:function(){return Object.values(this);
},toQueryString:function(a){return Object.toQueryString(this,a);}});Hash.extend=Object.append;Hash.alias({indexOf:"keyOf",contains:"hasValue"});(function(){var a=this.Class=new Type("Class",function(h){if(instanceOf(h,Function)){h={initialize:h};
}var g=function(){e(this);if(g.$prototyping){return this;}this.$caller=null;var i=(this.initialize)?this.initialize.apply(this,arguments):this;this.$caller=this.caller=null;
return i;}.extend(this).implement(h);g.$constructor=a;g.prototype.$constructor=g;g.prototype.parent=c;return g;});var c=function(){if(!this.$caller){throw new Error('The method "parent" cannot be called.');
}var g=this.$caller.$name,h=this.$caller.$owner.parent,i=(h)?h.prototype[g]:null;if(!i){throw new Error('The method "'+g+'" has no parent.');}return i.apply(this,arguments);
};var e=function(g){for(var h in g){var j=g[h];switch(typeOf(j)){case"object":var i=function(){};i.prototype=j;g[h]=e(new i);break;case"array":g[h]=j.clone();
break;}}return g;};var b=function(g,h,j){if(j.$origin){j=j.$origin;}var i=function(){if(j.$protected&&this.$caller==null){throw new Error('The method "'+h+'" cannot be called.');
}var l=this.caller,m=this.$caller;this.caller=m;this.$caller=i;var k=j.apply(this,arguments);this.$caller=m;this.caller=l;return k;}.extend({$owner:g,$origin:j,$name:h});
return i;};var f=function(h,i,g){if(a.Mutators.hasOwnProperty(h)){i=a.Mutators[h].call(this,i);if(i==null){return this;}}if(typeOf(i)=="function"){if(i.$hidden){return this;
}this.prototype[h]=(g)?i:b(this,h,i);}else{Object.merge(this.prototype,h,i);}return this;};var d=function(g){g.$prototyping=true;var h=new g;delete g.$prototyping;
return h;};a.implement("implement",f.overloadSetter());a.Mutators={Extends:function(g){this.parent=g;this.prototype=d(g);},Implements:function(g){Array.from(g).each(function(j){var h=new j;
for(var i in h){f.call(this,i,h[i],true);}},this);}};})();(function(){this.Chain=new Class({$chain:[],chain:function(){this.$chain.append(Array.flatten(arguments));
return this;},callChain:function(){return(this.$chain.length)?this.$chain.shift().apply(this,arguments):false;},clearChain:function(){this.$chain.empty();
return this;}});var a=function(b){return b.replace(/^on([A-Z])/,function(c,d){return d.toLowerCase();});};this.Events=new Class({$events:{},addEvent:function(d,c,b){d=a(d);
if(c==$empty){return this;}this.$events[d]=(this.$events[d]||[]).include(c);if(b){c.internal=true;}return this;},addEvents:function(b){for(var c in b){this.addEvent(c,b[c]);
}return this;},fireEvent:function(e,c,b){e=a(e);var d=this.$events[e];if(!d){return this;}c=Array.from(c);d.each(function(f){if(b){f.delay(b,this,c);}else{f.apply(this,c);
}},this);return this;},removeEvent:function(e,d){e=a(e);var c=this.$events[e];if(c&&!d.internal){var b=c.indexOf(d);if(b!=-1){delete c[b];}}return this;
},removeEvents:function(d){var e;if(typeOf(d)=="object"){for(e in d){this.removeEvent(e,d[e]);}return this;}if(d){d=a(d);}for(e in this.$events){if(d&&d!=e){continue;
}var c=this.$events[e];for(var b=c.length;b--;){if(b in c){this.removeEvent(e,c[b]);}}}return this;}});this.Options=new Class({setOptions:function(){var b=this.options=Object.merge.apply(null,[{},this.options].append(arguments));
if(this.addEvent){for(var c in b){if(typeOf(b[c])!="function"||!(/^on[A-Z]/).test(c)){continue;}this.addEvent(c,b[c]);delete b[c];}}return this;}});})();
(function(){var d=function(){},a=("onprogress" in new Browser.Request);var c=this.Request=new Class({Implements:[Chain,Events,Options],options:{url:"",data:"",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"text/javascript, text/html, application/xml, text/xml, */*"},async:true,format:false,method:"post",link:"ignore",isSuccess:null,emulation:true,urlEncoded:true,encoding:"utf-8",evalScripts:false,evalResponse:false,timeout:0,noCache:false},initialize:function(e){this.xhr=new Browser.Request();
this.setOptions(e);this.headers=this.options.headers;},onStateChange:function(){var e=this.xhr;if(e.readyState!=4||!this.running){return;}this.running=false;
this.status=0;Function.attempt(function(){var f=e.status;this.status=(f==1223)?204:f;}.bind(this));e.onreadystatechange=d;if(a){e.onprogress=e.onloadstart=d;
}clearTimeout(this.timer);this.response={text:this.xhr.responseText||"",xml:this.xhr.responseXML};if(this.options.isSuccess.call(this,this.status)){this.success(this.response.text,this.response.xml);
}else{this.failure();}},isSuccess:function(){var e=this.status;return(e>=200&&e<300);},isRunning:function(){return !!this.running;},processScripts:function(e){if(this.options.evalResponse||(/(ecma|java)script/).test(this.getHeader("Content-type"))){return Browser.exec(e);
}return e.stripScripts(this.options.evalScripts);},success:function(f,e){this.onSuccess(this.processScripts(f),e);},onSuccess:function(){this.fireEvent("complete",arguments).fireEvent("success",arguments).callChain();
},failure:function(){this.onFailure();},onFailure:function(){this.fireEvent("complete").fireEvent("failure",this.xhr);},loadstart:function(e){this.fireEvent("loadstart",[e,this.xhr]);
},progress:function(e){this.fireEvent("progress",[e,this.xhr]);},timeout:function(){this.fireEvent("timeout",this.xhr);},setHeader:function(e,f){this.headers[e]=f;
return this;},getHeader:function(e){return Function.attempt(function(){return this.xhr.getResponseHeader(e);}.bind(this));},check:function(){if(!this.running){return true;
}switch(this.options.link){case"cancel":this.cancel();return true;case"chain":this.chain(this.caller.pass(arguments,this));return false;}return false;},send:function(o){if(!this.check(o)){return this;
}this.options.isSuccess=this.options.isSuccess||this.isSuccess;this.running=true;var l=typeOf(o);if(l=="string"||l=="element"){o={data:o};}var h=this.options;
o=Object.append({data:h.data,url:h.url,method:h.method},o);var j=o.data,f=String(o.url),e=o.method.toLowerCase();switch(typeOf(j)){case"element":j=document.id(j).toQueryString();
break;case"object":case"hash":j=Object.toQueryString(j);}if(this.options.format){var m="format="+this.options.format;j=(j)?m+"&"+j:m;}if(this.options.emulation&&!["get","post"].contains(e)){var k="_method="+e;
j=(j)?k+"&"+j:k;e="post";}if(this.options.urlEncoded&&["post","put"].contains(e)){var g=(this.options.encoding)?"; charset="+this.options.encoding:"";this.headers["Content-type"]="application/x-www-form-urlencoded"+g;
}if(!f){f=document.location.pathname;}var i=f.lastIndexOf("/");if(i>-1&&(i=f.indexOf("#"))>-1){f=f.substr(0,i);}if(this.options.noCache){f+=(f.contains("?")?"&":"?")+String.uniqueID();
}if(j&&e=="get"){f+=(f.contains("?")?"&":"?")+j;j=null;}var n=this.xhr;if(a){n.onloadstart=this.loadstart.bind(this);n.onprogress=this.progress.bind(this);
}n.open(e.toUpperCase(),f,this.options.async,this.options.user,this.options.password);if(this.options.user&&"withCredentials" in n){n.withCredentials=true;
}n.onreadystatechange=this.onStateChange.bind(this);Object.each(this.headers,function(q,p){try{n.setRequestHeader(p,q);}catch(r){this.fireEvent("exception",[p,q]);
}},this);this.fireEvent("request");n.send(j);if(!this.options.async){this.onStateChange();}if(this.options.timeout){this.timer=this.timeout.delay(this.options.timeout,this);
}return this;},cancel:function(){if(!this.running){return this;}this.running=false;var e=this.xhr;e.abort();clearTimeout(this.timer);e.onreadystatechange=d;
if(a){e.onprogress=e.onloadstart=d;}this.xhr=new Browser.Request();this.fireEvent("cancel");return this;}});var b={};["get","post","put","delete","GET","POST","PUT","DELETE"].each(function(e){b[e]=function(g){var f={method:e};
if(g!=null){f.data=g;}return this.send(f);};});c.implement(b);Element.Properties.send={set:function(e){var f=this.get("send").cancel();f.setOptions(e);
return this;},get:function(){var e=this.retrieve("send");if(!e){e=new c({data:this,link:"cancel",method:this.get("method")||"post",url:this.get("action")});
this.store("send",e);}return e;}};Element.implement({send:function(e){var f=this.get("send");f.send({data:this,url:e||f.options.url});return this;}});})();
if(typeof JSON=="undefined"){this.JSON={};}JSON=new Hash({stringify:JSON.stringify,parse:JSON.parse});(function(){var special={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};
var escape=function(chr){return special[chr]||"\\u"+("0000"+chr.charCodeAt(0).toString(16)).slice(-4);};JSON.validate=function(string){string=string.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");
return(/^[\],:{}\s]*$/).test(string);};JSON.encode=JSON.stringify?function(obj){return JSON.stringify(obj);}:function(obj){if(obj&&obj.toJSON){obj=obj.toJSON();
}switch(typeOf(obj)){case"string":return'"'+obj.replace(/[\x00-\x1f\\"]/g,escape)+'"';case"array":return"["+obj.map(JSON.encode).clean()+"]";case"object":case"hash":var string=[];
Object.each(obj,function(value,key){var json=JSON.encode(value);if(json){string.push(JSON.encode(key)+":"+json);}});return"{"+string+"}";case"number":case"boolean":return""+obj;
case"null":return"null";}return null;};JSON.decode=function(string,secure){if(!string||typeOf(string)!="string"){return null;}if(secure||JSON.secure){if(JSON.parse){return JSON.parse(string);
}if(!JSON.validate(string)){throw new Error("JSON could not decode the input; security is enabled and the value is not secure.");}}return eval("("+string+")");
};})();
function Ajax() {
  this.responseType = Ajax.RAW;
  this.method = Ajax.POST;
  this.request = null;
  this.timeout = 0;
}
Ajax.RAW = 'raw';
Ajax.JSON = 'json';
Ajax.XML = 'xml'
Ajax.POST = 'post';
Ajax.GET = 'get';
Ajax.encode = function(params) {
	var data = '';
	for(var k in params) {
		var result = Ajax.prepare(k,params[k]);
		if(result.length > 0) {
			data += (data.length > 0?'&':'')+result;
		}
	}
	return data;
}

Ajax.prepare = function(key,value) {
	if(typeof value == "number" || typeof value == "string" || typeof value == "boolean") {
		return encodeURIComponent(key)+'='+encodeURIComponent(String(value));
	}
	else {
		var data = '';
		if(value instanceof Array) {
		  for(var k = 0 ; k < value.length ; k++) {
		    var result = Ajax.prepare(key+'['+k+']',value[k]);
  			if(result.length > 0) {
  				data += (data.length > 0?'&':'')+result;
  			}
		  }
		}
		else {
  		for(var k in value) {
  			var result = Ajax.prepare(key+'['+k+']',value[k]);
  			if(result.length > 0) {
  				data += (data.length > 0?'&':'')+result;
  			}
  		}
  	}
		return data;
	}
}
Ajax.prototype = {
  post: function(url,params) {
    var ajax = this;
    var data = '';
    if(!params) {
      params = {};
    }
    if(typeof params == 'object') {
      data += Ajax.encode(params);
      /*
      for(var key in params) {
        data += (data.length > 0?'&':'')+encodeURIComponent(key)+'='+encodeURIComponent(params[key]);
      }*/
      if(Ajax.auth_params) {
        for(var key in Ajax.auth_params) {
          data += (data.length > 0?'&':'')+encodeURIComponent(key)+'='+encodeURIComponent(Ajax.auth_params[key]);
        }
      }
    }
    else if (typeof params == 'string') {
      data = params;
      if(Ajax.auth_params) {
        for(var key in Ajax.auth_params) {
          data += (data.length > 0?'&':'')+encodeURIComponent(key)+'='+encodeURIComponent(Ajax.auth_params[key]);
        }
      }
    }
    else {
      data = '';
    }
    this.request = new Request({
      url:url,
      method:this.method,
      data:data,
      timeout:this.timeout ? this.timeout : 0,
      onSuccess: function(responseText, responseXML) {
        if(typeof ajax.ondone == 'function') {
          switch(ajax.responseType) {
            case Ajax.RAW:
              ajax.ondone(responseText);
              break;
            case Ajax.XML:
              ajax.ondone(responseXML);
              break;
            case Ajax.JSON:
              ajax.ondone(JSON.decode(responseText,true));
              break;
          }
        }
      },
      onFailure: function(xhr) {
        if(typeof ajax.onerror == 'function') {
          ajax.onerror(xhr);
        }
      },
      onTimeout: function() {
        if(typeof ajax.ontimeout == 'function') {
          ajax.ontimeout();
        }
      }
    });
    this.request.send();
  },
  abort:function() {
    if(this.request) {
      this.request.cancel();
    }
  }
}
Ajax.setFBAuthListener = function() {
  if(typeof FB != 'undefined' && FB.Event && FB.Event.subscribe) {
    FB.Event.subscribe('auth.authResponseChange', Ajax.processFBAuthResponse);
  }
  if(typeof FB != 'undefined' && FB.getLoginStatus) {
    FB.getLoginStatus(Ajax.processFBAuthResponse);
  }
}
Ajax.processFBAuthResponse = function(response) {
  if(response && response.authResponse) {
    var authEmpty = true;
    if(Ajax.auth_params) {
      for(var k in Ajax.auth_params) {
        authEmpty = false;
        break;
      }
    }
    if(authEmpty) {
      if(response.authResponse.signedRequest) {
        Ajax.auth_params = {
          signed_request:response.authResponse.signedRequest
        };
      }
    }
  }
};
if(typeof FBWrapper != 'undefined') {
  FBWrapper.onReady(function() {
    Ajax.setFBAuthListener();
  });
}
else {
  Ajax.setFBAuthListener();
}
Utils = {
  CLASSLOOPER_MODE_HAS: 0,
  CLASSLOOPER_MODE_ADD: 1,
  CLASSLOOPER_MODE_REMOVE: 2,
  CLASSLOOPER_MODE_TOGGLE: 4,
  initialized: false,
  windowLoaded: false,
  windowLoadedCallbacks: [],
  init: function() {
    if(!this.initialized) {
      this.initialized = true;      
      
      this.destroyer = document.createElement('div');
      this.destroyer.style.position = 'absolute';
      this.destroyer.style.right = '0px';
      this.destroyer.style.bottom = '0px';
      this.destroyer.style.display = 'none';
      document.body.appendChild(this.destroyer);
    }
  },
  onWindowLoad: function() {
    setTimeout(function() {
      if(!Utils.windowLoaded) {
        Utils.windowLoaded = true;
        while(Utils.windowLoadedCallbacks.length > 0) {
          var callback = Utils.windowLoadedCallbacks.shift();
          if(typeof callback == 'function') {
            setTimeout(callback,0);
          }
        }
      }
    },100);
  },
  afterWindowLoad: function(callback) {
    if(typeof callback == 'function') {
      if(Utils.windowLoaded) {
        setTimeout(callback,0);
      }
      else {
        Utils.windowLoadedCallbacks[Utils.windowLoadedCallbacks.length] = callback;
      }
    }
  },
  addEventListener: function(obj,event,func) {
    if(obj.addEventListener) {
      obj.addEventListener(event,func,false);
    }
    else if (obj.attachEvent) {
      obj.attachEvent('on'+event,func);
    }
    else {
      obj['on'+event] = func;
    }
  },
  removeEventListener: function(obj,event,func) {
    if(obj.removeEventListener) {
      obj.removeEventListener(event,func,false);
    }
    else if (obj.detachEvent) {
      obj.detachEvent('on'+event,func);
    }
    else {
      if(obj['on'+event] == func) {
        delete obj['on'+event];
      }
    }
  },
  destroy_dom: function(dom) {
    Utils.init();
    this.destroyer.appendChild(dom);
    this.destroyer.innerHTML = '';
  },
  getCoordinates: function(dom) {
    var coords = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      right: 0,
      bottom: 0
    };
    var temp = dom;
    while(temp.offsetParent) {
      coords.left += temp.offsetLeft;
      coords.top += temp.offsetTop;
      temp = temp.offsetParent;
    }
    if(dom.offsetWidth) {
      coords.width = dom.offsetWidth;
    }
    if(dom.offsetHeight) {
      coords.height = dom.offsetHeight;
    }
    coords.right = coords.left + coords.width;
    coords.bottom = coords.top + coords.height;
    return coords;
  },
  getWindowCoordinates: function() {
    var coords = {
      top: 0,
      left: 0,
      width: 0,
      height: 0,
      right: 0,
      bottom: 0
    };
    if(window.screenLeft != undefined) {
      coords.left = window.screenLeft;
      coords.top = window.screenTop;
    }
    else if (window.screenX != undefined) {
      coords.left = window.screenX;
      coords.top = window.screenY;
    }
    if(window.innerWidth) {
      coords.width = window.innerWidth;
      coords.height = window.innerHeight;
    }
    else if (window.offsetWidth) {
      coords.width = window.offsetWidth;
      coords.height = window.offsetHeight;
    }
    else if (document && document.body && document.body.offsetWidth) {
      coords.width = document.body.offsetWidth;
      coords.height = document.body.offsetHeight;
    }
    else if (document && document.documentElement && document.documentElement.offsetWidth) {
      coords.width = document.documentElement.offsetWidth;
      coords.height = document.documentElement.offsetHeight;
    }
    return coords;
  },
  form_params: function(frm) {
    var params = {};
    for(var i = 0 ; i < frm.elements.length ; i++) {
      if(frm.elements[i].tagName.toLowerCase()=='input' && frm.elements[i].type=='radio') {
        if(!frm.elements[i].checked) {
          continue;
        }
      }
      var pname = frm.elements[i].name;
      var pval = frm.elements[i].value;
      if(pname && pname.length>0) {
        params[pname] = pval;
      }
    }
    return params;  
  },
  get_iframe_doc: function(idname) {
    if(window.frames && window.frames[idname] && window.frames[idname].document) {
      return window.frames[idname].document;
    }
    else {
      var elem = document.getElementById(idname);
      if(elem) {
        if(elem.contentWindow && elem.contentWindow.document) {
          return elem.contentWindow.document;
        }
        else if (elem.contentDocument) {
          return elem.contentDocument;
        }
      }
    }
    return false;
  },
  addClass: function(dom,className) {
    return Utils._classLooper(dom,className,Utils.CLASSLOOPER_MODE_ADD);
  },
  removeClass: function(dom,className) {
    return Utils._classLooper(dom,className,Utils.CLASSLOOPER_MODE_REMOVE);
  },
  hasClass: function(dom,className) {
    return Utils._classLooper(dom,className,Utils.CLASSLOOPER_MODE_HAS);
  },
  toggleClass: function(dom,className) {
    return Utils._classLooper(dom,className,Utils.CLASSLOOPER_MODE_TOGGLE);
  },
  _classLooper: function(dom,className,mde) {
    var cnames = Utils.getClasses(dom);
    for(var i = 0 ; i < cnames.length ; i++) {
      if(cnames[i] == className) {
        switch(mde) {
          case Utils.CLASSLOOPER_MODE_HAS:
            return true;
          case Utils.CLASSLOOPER_MODE_ADD:
            return false;
          case Utils.CLASSLOOPER_MODE_TOGGLE:
          case Utils.CLASSLOOPER_MODE_REMOVE:
            cnames.splice(i,1);
            dom.className = cnames.join(' ');
            return mde==Utils.CLASSLOOPER_MODE_REMOVE;
        }
      }
    }
    switch(mde) {
      case Utils.CLASSLOOPER_MODE_HAS:
        return false;
      case Utils.CLASSLOOPER_MODE_TOGGLE:
      case Utils.CLASSLOOPER_MODE_ADD:
        cnames[cnames.length] = className;
        dom.className = cnames.join(' ');
        return true;
      case Utils.CLASSLOOPER_MODE_REMOVE:
        return false;
    }
  },
  getClasses: function(dom) {
    var cur = dom.className?Utils.trim(dom.className):'';
    if(cur.length > 0) {
      return cur.split(/[\s]+/);
    }
    return [];
  },
  trim: function(text) {
    if(typeof text == 'string') {
      return text.replace(/^[\s]+/,'').replace(/[\s]+$/,'');
    }
    return '';
  },
  getUrlParams: function() {
    var params = {};
    var parts = window.location.search.substr(1).split('&');
    for(var i = 0 ; i < parts.length ; i++) {
      var spl = parts[i].split('=');
      var k = decodeURIComponent(spl.shift());
      var v = '';
      if(spl.length > 0) {
        v = decodeURIComponent(spl.join('='));
      }
      params[k] = v;
    }
    return params;
  },
  getUrlParam: function(key) {
    return Utils.getUrlParams()[key];
  },
  getCookies: function() {
    var cookies = {};
    var parts = document.cookie.split(';');
    for(var i = 0 ; i < parts.length ; i++) {
      var cpart = Utils.trim(parts[i]).split('=');
      var cname = unescape(cpart[0]);
      var cvalue = unescape(cpart.slice(1).join('='));
      cookies[cname] = cvalue;
    }
    return cookies;
  },
  getCookie: function(cName) {
    return Utils.getCookies()[cName];
  },
  setCookie: function(cName,cValue,expires) {
    document.cookie = escape(cName)+'='+escape(cValue)+(expires ? ';expires='+expires.toUTCString() : '');
  },
  shuffle: function(o) {
  	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
  	return o;
  },
  addslashes: function(text) {
    return text.replace(/['"]/g,'\\$&');
  },
  stripslashes: function(text) {
    return text.replace(/\\./g,'$&');
  },
  htmlentities: function(text) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  },
  generate_callback: function(callback,arg) {
	  return function() {
	    callback(arg);
	  };
	},
	binary_insert_index: function(array,item,comparator) {
	  var min = 0;
	  var max = array.length;
		
		while(min != max) {
		  var mid = Math.floor((min + max)/2);
		  var other = array[mid];
		  var compared = comparator(item,other);
		  if(compared < 0) {
				max = mid;
			}
			else if (compared > 0) {
				min = mid+1;
			}
			else {
				min = mid;
				break;
			}
		}
		return min;
	},
	array_equals: function(array1,array2) {
	  if(array1 == array2) {
	    return true;
	  }
	  if(array1 && array2) {
	    if(array1.length != array2.length) {
	      return false;
	    }
	    for(var i = 0 ; i < array1.length ; i++) {
	      if(array1[i] != array2[i]) {
	        return false;
	      }
	    }
	  }
	  return true;
	}	
}
Utils.addEventListener(window,'load',Utils.onWindowLoad);
function DialogWrapper(type) {
  this.showbuttons = true;
  this.offsetTop = 0;
  this.viewTop = 50;
  this.className = 'kfm_dialog';
  this.size = 'kfm_small';
  this.okimg = false;
  this.cancelimg = false;
  this.type = type;
  this.context = null;
  this.visibility = true;
}
DialogWrapper.DIALOG_POP = 0;
DialogWrapper.DIALOG_CONTEXTUAL = 1;
DialogWrapper.confirm = function(title,content,confirm_func) {
  var d = new Dialog();
  d.onconfirm = confirm_func;
  d.showChoice(title,content);
}
DialogWrapper.prototype = {
  setContext: function(elem) {
    this.context = elem;
    if(this.dom) {
      this.reposition();
    }
    return this;
  },
  showMessage: function(title,content,okbutton) {
    okbutton = okbutton?okbutton:'Ok';
    this._generateDialog(title,content,okbutton);
    return this;
  },
  showChoice: function(title,content,okbutton,cancelbutton) {
    okbutton = okbutton?okbutton:'Ok';
    cancelbutton = cancelbutton?cancelbutton:'Cancel';
    this._generateDialog(title,content,okbutton,cancelbutton);
    return this;
  },
  _generateDialog: function(title,content,okbutton,cancelbutton) {
    if(!this.dom) {
      var d = this;
      
      this.dom = {};
      this.dom.dialog = document.createElement('div');
      this.dom.dialog.className = this.className;
      this.dom.dialog.style.position = 'absolute';
      this.dom.dialog.style.display = this.visibility ? '' : 'none';
      
			this.dom.dialog_top = document.createElement('div');
			this.dom.dialog_top.className = this.size+'dialogtop';
			this.dom.dialog.appendChild(this.dom.dialog_top);
		
			this.dom.dialog_bottom = document.createElement('div');
			this.dom.dialog_bottom.className = this.size+'dialogbottom';
			this.dom.dialog.appendChild(this.dom.dialog_bottom);
		
			this.dom.dialog_right = document.createElement('div');
			this.dom.dialog_right.className = this.size+'dialogright';
			this.dom.dialog.appendChild(this.dom.dialog_right);
		
			this.dom.dialog_left = document.createElement('div');
			this.dom.dialog_left.className = this.size+'dialogleft';
			this.dom.dialog.appendChild(this.dom.dialog_left);
      
      this.dom.dialog_inner = document.createElement('div');
      this.dom.dialog_inner.className = this.size+'dialog_inner';
      this.dom.dialog.appendChild(this.dom.dialog_inner);
      
      this.dom.dialog_title = document.createElement('div');
      this.dom.dialog_title.className = 'kfm_dialog_title';
      this.dom.dialog_inner.appendChild(this.dom.dialog_title);
      
      this.dom.dialog_content = document.createElement('div');
      this.dom.dialog_content.className = 'kfm_dialog_content';
      this.dom.dialog_content.id = 'kfm_dialog_content';
      this.dom.dialog_inner.appendChild(this.dom.dialog_content);
      
      this.dom.dialog_buttons = document.createElement('div');
      this.dom.dialog_buttons.className = this.size+'dialog_buttons';
      this.dom.dialog_inner.appendChild(this.dom.dialog_buttons);
      
      this.dom.dialog_button_ok = document.createElement('input');
      if (this.okimg) {
      	this.dom.dialog_button_ok.type = 'image';
      	this.dom.dialog_button_ok.src = this.okimg;
      }
      else {
      	this.dom.dialog_button_ok.type = 'button';
      }
      this.dom.dialog_button_ok.className = 'kfm_button kfm_dialog_button kfm_button_mode kfm_ok';
      this.dom.dialog_buttons.appendChild(this.dom.dialog_button_ok);
      Utils.addEventListener(this.dom.dialog_button_ok,'click',function() {
        d.confirm();
      });
      
      this.dom.dialog_button_cancel = document.createElement('input');
      this.dom.dialog_button_cancel.type = 'button';
      this.dom.dialog_button_cancel.className = 'kfm_button_ignore kfm_dialog_button kfm_button_mode kfm_cancel';
      this.dom.dialog_buttons.appendChild(this.dom.dialog_button_cancel);
      Utils.addEventListener(this.dom.dialog_button_cancel,'click',function() {
        d.cancel();
      });
      
      this.dom.overlay = document.createElement('div');
      this.dom.overlay.className = 'kfm_dialog_overlay';
      this.dom.overlay.style.position = 'fixed';
      this.dom.overlay.style.top = '0px';
      this.dom.overlay.style.width = '100%';
      this.dom.overlay.style.height = '100%';
      this.dom.overlay.style.display = this.visibility ? '' : 'none';
    }
    
    this.dom.dialog.className = this.className;
      
    this.dom.dialog_title.innerHTML = title;
    this.dom.dialog_content.innerHTML = content;
    
    this.dom.dialog_button_ok.value = okbutton;
    this.dom.dialog_button_ok.style.display = '';
    
    if(cancelbutton) {
      this.dom.dialog_button_cancel.value = cancelbutton;
      this.dom.dialog_button_cancel.style.display = '';
    }
    else {
      this.dom.dialog_button_cancel.style.display = 'none';
    }
    
    if(!this.showbuttons) {
      this.dom.dialog_button_ok.style.display = 'none';
      this.dom.dialog_button_cancel.style.display = 'none';
    }
    
    this.show();
  },
  confirm: function() {
    if(typeof this.onconfirm == 'function') {
      if(this.onconfirm()!==false) {
        this.hide();
      }
    }
    else {
      this.hide();
    }
  },
  cancel: function() {
    this.hide();
    if(typeof this.oncancel == 'function') {
      this.oncancel();
    }
  },
  reposition: function(){
    var d = document.documentElement ? document.documentElement : document.body;
    var scrolls = {
      x:(window.pageXOffset || d.scrollLeft) - (d.clientLeft || 0),
      y:(window.pageYOffset || d.scrollTop)  - (d.clientTop || 0)
    };
    //var scrolls = window.getScroll();
    //var sizes = window.getSize();
    
    var sizes = {
      x:window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
      y:window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    };
    
    var width = sizes.x;
    var height = sizes.y;
    if(document.body && document.body.offsetWidth) {
      width = Math.max(width,document.body.offsetWidth);
    }
    if(document.body && document.body.offsetHeight) {
      height = Math.max(height,document.body.offsetHeight);
    }
    if(document.documentElement && document.documentElement.offsetWidth) {
      width = Math.max(width,document.documentElement.offsetWidth);
    }
    if(document.documentElement && document.documentElement.offsetHeight) {
      height = Math.max(height,document.documentElement.offsetHeight);
    } 
    switch(this.type) {
      case DialogWrapper.DIALOG_CONTEXTUAL:
        if(this.context) {
          var contextCoords = Utils.getCoordinates(this.context);
          var domCoords = Utils.getCoordinates(this.dom.dialog);
          this.dom.dialog.style.top = (contextCoords.top - domCoords.height)+'px';
          this.dom.dialog.style.left = contextCoords.right + 'px';
          break; //break inside here, so if no context, falls through to default
        }
      default:
        this.dom.dialog.style.top = (scrolls.y+this.viewTop+this.offsetTop)+'px';
    }
    
    //this.dom.overlay.style.width = width+'px';
    //this.dom.overlay.style.height = height+'px';
  },
  show: function() {
    if(this.dom) {
      this.dom.dialog.style.display = this.visibility ? '' : 'none';
      this.reposition();
      var d = this;
      this.showInterval = setInterval(function(){
        d.reposition();
      },10);      
      document.body.appendChild(this.dom.overlay);
      document.body.appendChild(this.dom.dialog);
      if (typeof FB != "undefined" && FB.Canvas && FB.Canvas.getPageInfo) {
	      FB.Canvas.getPageInfo(function(info) {
	        if(info && info.scrollTop) {
    	      d.offsetTop = parseInt(info.scrollTop);
    	      d.reposition();
    	    }
  	      d.dom.dialog.style.display = d.visibility ? '' : 'none';
	      });
	      setTimeout(function(){
	    		d.dom.dialog.style.display = d.visibility ? '' : 'none';
	    	},1000);
	    }
      else if(typeof FB != "undefined" && FB.CanvasClient && FB.CanvasClient.getCanvasInfo) {
      	this.dom.dialog.style.display = 'none';
	    	FB.CanvasClient.getCanvasInfo(function(info) {
	    		d.offsetTop = parseInt(info.scrollPos.y);
	    		d.reposition();
	    		d.dom.dialog.style.display = d.visibility ? '' : 'none';;
	    	});
	    	setTimeout(function(){
	    		d.dom.dialog.style.display = d.visibility ? '' : 'none';;
	    	},1000);
	    }
    }
  },
  hide: function() {
    if(this.dom) {
      if(this.showInterval) {
        clearInterval(this.showInterval);
        this.showInterval = false;
      }
      if(this.dom.dialog.parentNode) {
        this.dom.dialog.parentNode.removeChild(this.dom.dialog);
      }
      if(this.dom.overlay.parentNode) {
        this.dom.overlay.parentNode.removeChild(this.dom.overlay);
      }
    }
  },
  set_visibility: function(visible) {
    this.visibility = visible ? true : false;
    if(this.dom) {
      if(this.dom.dialog) {
        this.dom.dialog.style.display = visible ? '' : 'none';
      }
      if(this.dom.overlay) {
        this.dom.overlay.style.display = visible ? '' : 'none';
      }
    }
  }
}
MobileApp = {
  callback_counter: 0,
  callbacks: {},
  js_poll_interval: false,
  mobile_queue:[],
  on_ready_callbacks:[],
  ready_interval: false,
  document_interval: false,
  document_callbacks: [],
  focus_callbacks: [],
  focus_initialized: false,
  exists: function() {
    return typeof mobileApp != 'undefined';
  },
  onReady: function(callback) {
    if(callback && typeof callback == 'function') {
      if(!MobileApp.exists()) {
        MobileApp.on_ready_callbacks[MobileApp.on_ready_callbacks.length] = callback;
        MobileApp.checkReady();
      }
      else {
        setTimeout(callback,0);
      }
    }
  },
  checkReady: function() {
    if(!MobileApp.ready_interval) {
      MobileApp.ready_interval = setInterval(function() {
        if(MobileApp.exists()) {
          MobileApp.setReady();
        }
      },100);
    }
  },
  setReady: function() {
    if(MobileApp.ready_interval) {
      clearInterval(MobileApp.ready_interval);
      MobileApp.ready_interval = false;
      while(MobileApp.on_ready_callbacks.length > 0) {
        var callback = MobileApp.on_ready_callbacks.shift();
        setTimeout(callback,0);
      }
    }
  },
  isDocumentReady: function() {
    return (document && window && document.body) ? true : false;
  },
  onDocumentReady: function(callback) {
    if(callback && typeof callback == 'function') {
      if(!MobileApp.isDocumentReady()) {
        MobileApp.document_callbacks[MobileApp.document_callbacks.length] = callback;
        MobileApp.checkDocumentReady();
      }
      else {
        setTimeout(callback,0);
      }
    }
  },
  checkDocumentReady: function() {
    if(!MobileApp.document_interval) {
      MobileApp.document_interval = setInterval(function() {
        if(MobileApp.isDocumentReady()) {
          MobileApp.setDocumentReady();
        }
      },100);
    }
  },
  setDocumentReady: function() {
    if(MobileApp.document_interval) {
      clearInterval(MobileApp.document_interval);
      MobileApp.document_interval = false;
      while(MobileApp.document_callbacks.length > 0) {
        var callback = MobileApp.document_callbacks.shift();
        setTimeout(callback,0);
      }
    }
  },
  create_callback: function(callback) {
    if(typeof callback == 'function') {
      var idx = MobileApp.callback_counter++;
      MobileApp.callbacks[idx] = callback;
      return "MobileApp.get_callback("+idx+")";
    }
    else {
      return callback;
    }
  },
  get_callback: function(idx) {
    var func = MobileApp.callbacks[idx];
    delete MobileApp.callbacks[idx];
    return func;
  },
  handle_url: function(url) {
    window.location.href=url;
  },
  handle_data: function(data,userAction) {
    
  },
  poll_for_javascript: function(interval) {
    MobileApp.onReady(function() {
      if(MobileApp.exists() && (mobileApp.getJavascriptQueue || mobileApp.getJavascriptQueueAsync)) {
        clearInterval(MobileApp.js_poll_interval);
        MobileApp.js_poll_interval = setInterval(function() {
          MobileApp.check_javascript_queue();
        },interval);
      }
    });
  },
  check_javascript_queue: function() {
    var result = 0;
    if(mobileApp.getJavascriptQueue) {
      var json = mobileApp.getJavascriptQueue();
      if(json && json.length > 0) {
        var cmds = JSON.decode(json);
        result += MobileApp.process_javascript_queue(cmds);
      }
    }
    else if (mobileApp.getJavascriptQueueAsync) {
      mobileApp.getJavascriptQueueAsync('MobileApp.process_javascript_queue');
    }
    return result;
  },
  process_javascript_queue: function(commands) {
    var result = 0;
    if(commands instanceof Array) {
      result += commands.length;
      while(commands && commands.length > 0) {
        var cmd = commands.shift();
        if(cmd) {
          try {
            //setTimeout(function(){
              eval(cmd);
            //},0);
          }catch(e){}
        }
      }
    }
    return result;
  },
  call_mobile_function: function(name,args) {
    var url = "jsintercept://"+encodeURIComponent(name);
    var params = [];
    if(args) {
      for(var i = 0 ; i < args.length ; i++) {
        params[i] = args[i];
      }
    }
    url += "?args="+encodeURIComponent(JSON.encode(params));    
    MobileApp.mobile_queue[MobileApp.mobile_queue.length] = [name,params];
    window.location.href = "jsintercept://checkQueue";
  },
  handle_focus: function() {
    for(var i = 0 ; i < MobileApp.focus_callbacks.length ; i++) {
      var callback = MobileApp.focus_callbacks[i];
      setTimeout(callback,0);
    }
  },
  check_focus: function() {
    var now = new Date().getTime();
    if(!MobileApp.last_focus || now - MobileApp.last_focus > 2000) {
      MobileApp.last_focus = now;
      MobileApp.handle_focus();
    }
  },
  onFocus: function(callback) {
    if(typeof callback == 'function' && MobileApp.focus_callbacks.indexOf(callback)==-1) {
      MobileApp.focus_callbacks[MobileApp.focus_callbacks.length] = callback;
    }
    if(!MobileApp.focus_initialized) {
      MobileApp.focus_initialized = true;
      MobileApp.onDocumentReady(function() {
        if(window.Touch) {
          MobileApp.focus_interval = setInterval(function() {
            var now = new Date().getTime();
            var runFocus = false;
            if(!MobileApp.last_script) {
              runFocus = true;
            }
            else {
              var elapsed = now - MobileApp.last_script;
              if(elapsed > 1000) {
                runFocus = true;
              }
            }
            MobileApp.last_script = now;
            if(runFocus) {
              setTimeout(MobileApp.check_focus,0);
            }
          },200);
        }
        else {
          MobileApp.check_focus();
        }
        Utils.addEventListener(window,'focus',function(){MobileApp.check_focus()});
      });
    }
  },
  setupDateInput: function(input) {
    if(input) {
      if(!window.Touch) {
        Utils.addEventListener(input,'focus',function(event) {
          if(MobileApp.exists() && mobileApp.pickDate && !input.pickingDate && !input.disabled) {
            input.pickingDate = true;
            input.disabled = true;
            input.blur();
            mobileApp.pickDate(MobileApp.create_callback(function(value) {
              var originalValue = input.value;
              if(typeof value == 'string') {
                input.value = value;
              }
              
              input.blur();
              //input.disabled = false;
              setTimeout(function() {
                input.pickingDate = false;
                input.disabled = false;
                input.blur();
              },10);
              if(originalValue != input.value) {
                var evt = document.createEvent('HTMLEvents');
        			  evt.initEvent('change', true, true);
                input.dispatchEvent(evt);
              }
              
            }),input.value);
          }
          if(event) {
            event.preventDefault();
          }
          return false;
        });
      }
    }
  }
}
MobileApp.localStorage = {
  supported: function() {
    return window.localStorage ? true : false;
  },
  length: function(callback) {
    if(MobileApp.exists() && mobileApp.localStorageLength) {
      mobileApp.localStorageLength(MobileApp.create_callback(callback));
    }
    else if(window.localStorage) {
      if(typeof callback == 'function') {
        callback(window.localStorage.length);
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(false);
      }
    }
  },
  setItem: function(key,value,callback) {
    if(MobileApp.exists() && mobileApp.localStorageSetItem) {
      mobileApp.localStorageSetItem(key,value,MobileApp.create_callback(callback));
      try {
        if(window.localStorage) {
          window.localStorage.setItem(key,value);
        }
      }catch(e){}
    }
    else if(window.localStorage) {
      var result = false;
      try {
        result = window.localStorage.setItem(key,value);
      }catch(e){}
      if(typeof callback == 'function') {
        callback(result);
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(false);
      }
    }
  },
  getItem: function(key,callback) {
    if(MobileApp.exists() && mobileApp.localStorageGetItem) {
      mobileApp.localStorageGetItem(key,MobileApp.create_callback(callback));
    }
    else if(window.localStorage) {
      if(typeof callback == 'function') {
        callback(window.localStorage.getItem(key));
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(null);
      }
    }
  },
  removeItem: function(key,callback) {
    if(MobileApp.exists() && mobileApp.localStorageRemoveItem) {
      mobileApp.localStorageRemoveItem(key,MobileApp.create_callback(callback));
      try {
        if(window.localStorage) {
          window.localStorage.removeItem(key);
        }
      }catch(e){}
    }
    else if(window.localStorage) {
      var result = false;
      try {
        result = window.localStorage.removeItem(key);
      }catch(e){}
      if(typeof callback == 'function') {
        callback(result);
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(false);
      }
    }
  },
  clear: function(callback) {
    if(MobileApp.exists() && mobileApp.localStorageClear) {
      mobileApp.localStorageClear(MobileApp.create_callback(callback));
    }
    else if(window.localStorage) {
      var result = false;
      try {
        result = window.localStorage.clear();
      }catch(e){}
      if(typeof callback == 'function') {
        callback(result);
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(false);
      }
    }
  },
  key: function(index,callback) {
    if(MobileApp.exists() && mobileApp.localStorageKey) {
      mobileApp.localStorageKey(index,MobileApp.create_callback(callback));
    }
    else if(window.localStorage) {
      if(typeof callback == 'function') {
        callback(window.localStorage.key(index));
      }
    }
    else {
      if(typeof callback == 'function') {
        callback(null);
      }
    }
  }
};