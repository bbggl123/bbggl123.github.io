import{g as Le,s as Oe,o as Ve,n as Ne,a as Re,b as Pe,_ as o,c as lt,j as pt,d as We,l as rt,k as ze,H as Ye,p as Be,x as qe}from"./mermaid.core-CwO-91nn.js";import{K as de,L as He,M as fe,N as he,O as ke,Q as It,S as Xe,U as je,V as Ue,W as Ge,l as Ke,Y as N,Z as te,_ as ee,$ as Ze,a0 as Qe,a1 as Je,a2 as $e,a3 as ti,a4 as ei,a5 as ii,a6 as ie,a7 as ne,a8 as re,a9 as ae,aa as se,ab as ni,ac as ri,ad as ai,ae as si}from"./index-EGnzCaED.js";const ci=Math.PI/180,li=180/Math.PI,wt=18,me=.96422,ye=1,ge=.82521,pe=4/29,ot=6/29,ve=3*ot*ot,oi=ot*ot*ot;function Te(t){if(t instanceof Q)return new Q(t.l,t.a,t.b,t.opacity);if(t instanceof it)return xe(t);t instanceof de||(t=He(t));var e=Lt(t.r),i=Lt(t.g),n=Lt(t.b),a=At((.2225045*e+.7168786*i+.0606169*n)/ye),h,k;return e===i&&i===n?h=k=a:(h=At((.4360747*e+.3850649*i+.1430804*n)/me),k=At((.0139322*e+.0971045*i+.7141733*n)/ge)),new Q(116*a-16,500*(h-a),200*(a-k),t.opacity)}function ui(t,e,i,n){return arguments.length===1?Te(t):new Q(t,e,i,n??1)}function Q(t,e,i,n){this.l=+t,this.a=+e,this.b=+i,this.opacity=+n}fe(Q,ui,he(ke,{brighter(t){return new Q(this.l+wt*(t??1),this.a,this.b,this.opacity)},darker(t){return new Q(this.l-wt*(t??1),this.a,this.b,this.opacity)},rgb(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,i=isNaN(this.b)?t:t-this.b/200;return e=me*Ft(e),t=ye*Ft(t),i=ge*Ft(i),new de(Mt(3.1338561*e-1.6168667*t-.4906146*i),Mt(-.9787684*e+1.9161415*t+.033454*i),Mt(.0719453*e-.2289914*t+1.4052427*i),this.opacity)}}));function At(t){return t>oi?Math.pow(t,1/3):t/ve+pe}function Ft(t){return t>ot?t*t*t:ve*(t-pe)}function Mt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function Lt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function di(t){if(t instanceof it)return new it(t.h,t.c,t.l,t.opacity);if(t instanceof Q||(t=Te(t)),t.a===0&&t.b===0)return new it(NaN,0<t.l&&t.l<100?0:NaN,t.l,t.opacity);var e=Math.atan2(t.b,t.a)*li;return new it(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function Nt(t,e,i,n){return arguments.length===1?di(t):new it(t,e,i,n??1)}function it(t,e,i,n){this.h=+t,this.c=+e,this.l=+i,this.opacity=+n}function xe(t){if(isNaN(t.h))return new Q(t.l,0,0,t.opacity);var e=t.h*ci;return new Q(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}fe(it,Nt,he(ke,{brighter(t){return new it(this.h,this.c,this.l+wt*(t??1),this.opacity)},darker(t){return new it(this.h,this.c,this.l-wt*(t??1),this.opacity)},rgb(){return xe(this).rgb()}}));function fi(t){return function(e,i){var n=t((e=Nt(e)).h,(i=Nt(i)).h),a=It(e.c,i.c),h=It(e.l,i.l),k=It(e.opacity,i.opacity);return function(D){return e.h=n(D),e.c=a(D),e.l=h(D),e.opacity=k(D),e+""}}}const hi=fi(Xe);function ki(t){return t}var Tt=1,Ot=2,Rt=3,vt=4,ce=1e-6;function mi(t){return"translate("+t+",0)"}function yi(t){return"translate(0,"+t+")"}function gi(t){return e=>+t(e)}function pi(t,e){return e=Math.max(0,t.bandwidth()-e*2)/2,t.round()&&(e=Math.round(e)),i=>+t(i)+e}function vi(){return!this.__axis}function be(t,e){var i=[],n=null,a=null,h=6,k=6,D=3,E=typeof window<"u"&&window.devicePixelRatio>1?0:.5,O=t===Tt||t===vt?-1:1,I=t===vt||t===Ot?"x":"y",P=t===Tt||t===Rt?mi:yi;function _(p){var X=n??(e.ticks?e.ticks.apply(e,i):e.domain()),W=a??(e.tickFormat?e.tickFormat.apply(e,i):ki),S=Math.max(h,0)+D,J=e.range(),j=+J[0]+E,U=+J[J.length-1]+E,G=(e.bandwidth?pi:gi)(e.copy(),E),B=p.selection?p.selection():p,q=B.selectAll(".domain").data([null]),R=B.selectAll(".tick").data(X,e).order(),$=R.exit(),K=R.enter().append("g").attr("class","tick"),m=R.select("line"),v=R.select("text");q=q.merge(q.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),R=R.merge(K),m=m.merge(K.append("line").attr("stroke","currentColor").attr(I+"2",O*h)),v=v.merge(K.append("text").attr("fill","currentColor").attr(I,O*S).attr("dy",t===Tt?"0em":t===Rt?"0.71em":"0.32em")),p!==B&&(q=q.transition(p),R=R.transition(p),m=m.transition(p),v=v.transition(p),$=$.transition(p).attr("opacity",ce).attr("transform",function(g){return isFinite(g=G(g))?P(g+E):this.getAttribute("transform")}),K.attr("opacity",ce).attr("transform",function(g){var y=this.parentNode.__axis;return P((y&&isFinite(y=y(g))?y:G(g))+E)})),$.remove(),q.attr("d",t===vt||t===Ot?k?"M"+O*k+","+j+"H"+E+"V"+U+"H"+O*k:"M"+E+","+j+"V"+U:k?"M"+j+","+O*k+"V"+E+"H"+U+"V"+O*k:"M"+j+","+E+"H"+U),R.attr("opacity",1).attr("transform",function(g){return P(G(g)+E)}),m.attr(I+"2",O*h),v.attr(I,O*S).text(W),B.filter(vi).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===Ot?"start":t===vt?"end":"middle"),B.each(function(){this.__axis=G})}return _.scale=function(p){return arguments.length?(e=p,_):e},_.ticks=function(){return i=Array.from(arguments),_},_.tickArguments=function(p){return arguments.length?(i=p==null?[]:Array.from(p),_):i.slice()},_.tickValues=function(p){return arguments.length?(n=p==null?null:Array.from(p),_):n&&n.slice()},_.tickFormat=function(p){return arguments.length?(a=p,_):a},_.tickSize=function(p){return arguments.length?(h=k=+p,_):h},_.tickSizeInner=function(p){return arguments.length?(h=+p,_):h},_.tickSizeOuter=function(p){return arguments.length?(k=+p,_):k},_.tickPadding=function(p){return arguments.length?(D=+p,_):D},_.offset=function(p){return arguments.length?(E=+p,_):E},_}function Ti(t){return be(Tt,t)}function xi(t){return be(Rt,t)}var Pt=(function(){var t=o(function(y,s,d,f){for(d=d||{},f=y.length;f--;d[y[f]]=s);return d},"o"),e=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],n=[1,27],a=[1,28],h=[1,29],k=[1,30],D=[1,31],E=[1,32],O=[1,33],I=[1,34],P=[1,9],_=[1,10],p=[1,11],X=[1,12],W=[1,13],S=[1,14],J=[1,15],j=[1,16],U=[1,19],G=[1,20],B=[1,21],q=[1,22],R=[1,23],$=[1,25],K=[1,35],m={trace:o(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:o(function(s,d,f,u,C,r,w){var l=r.length-1;switch(C){case 1:return r[l-1];case 2:this.$=[];break;case 3:r[l-1].push(r[l]),this.$=r[l-1];break;case 4:case 5:this.$=r[l];break;case 6:case 7:this.$=[];break;case 8:u.setWeekday("monday");break;case 9:u.setWeekday("tuesday");break;case 10:u.setWeekday("wednesday");break;case 11:u.setWeekday("thursday");break;case 12:u.setWeekday("friday");break;case 13:u.setWeekday("saturday");break;case 14:u.setWeekday("sunday");break;case 15:u.setWeekend("friday");break;case 16:u.setWeekend("saturday");break;case 17:u.setDateFormat(r[l].substr(11)),this.$=r[l].substr(11);break;case 18:u.enableInclusiveEndDates(),this.$=r[l].substr(18);break;case 19:u.TopAxis(),this.$=r[l].substr(8);break;case 20:u.setAxisFormat(r[l].substr(11)),this.$=r[l].substr(11);break;case 21:u.setTickInterval(r[l].substr(13)),this.$=r[l].substr(13);break;case 22:u.setExcludes(r[l].substr(9)),this.$=r[l].substr(9);break;case 23:u.setIncludes(r[l].substr(9)),this.$=r[l].substr(9);break;case 24:u.setTodayMarker(r[l].substr(12)),this.$=r[l].substr(12);break;case 27:u.setDiagramTitle(r[l].substr(6)),this.$=r[l].substr(6);break;case 28:this.$=r[l].trim(),u.setAccTitle(this.$);break;case 29:case 30:this.$=r[l].trim(),u.setAccDescription(this.$);break;case 31:u.addSection(r[l].substr(8)),this.$=r[l].substr(8);break;case 33:u.addTask(r[l-1],r[l]),this.$="task";break;case 34:this.$=r[l-1],u.setClickEvent(r[l-1],r[l],null);break;case 35:this.$=r[l-2],u.setClickEvent(r[l-2],r[l-1],r[l]);break;case 36:this.$=r[l-2],u.setClickEvent(r[l-2],r[l-1],null),u.setLink(r[l-2],r[l]);break;case 37:this.$=r[l-3],u.setClickEvent(r[l-3],r[l-2],r[l-1]),u.setLink(r[l-3],r[l]);break;case 38:this.$=r[l-2],u.setClickEvent(r[l-2],r[l],null),u.setLink(r[l-2],r[l-1]);break;case 39:this.$=r[l-3],u.setClickEvent(r[l-3],r[l-1],r[l]),u.setLink(r[l-3],r[l-2]);break;case 40:this.$=r[l-1],u.setLink(r[l-1],r[l]);break;case 41:case 47:this.$=r[l-1]+" "+r[l];break;case 42:case 43:case 45:this.$=r[l-2]+" "+r[l-1]+" "+r[l];break;case 44:case 46:this.$=r[l-3]+" "+r[l-2]+" "+r[l-1]+" "+r[l];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:n,14:a,15:h,16:k,17:D,18:E,19:18,20:O,21:I,22:P,23:_,24:p,25:X,26:W,27:S,28:J,29:j,30:U,31:G,33:B,35:q,36:R,37:24,38:$,40:K},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:36,11:17,12:i,13:n,14:a,15:h,16:k,17:D,18:E,19:18,20:O,21:I,22:P,23:_,24:p,25:X,26:W,27:S,28:J,29:j,30:U,31:G,33:B,35:q,36:R,37:24,38:$,40:K},t(e,[2,5]),t(e,[2,6]),t(e,[2,17]),t(e,[2,18]),t(e,[2,19]),t(e,[2,20]),t(e,[2,21]),t(e,[2,22]),t(e,[2,23]),t(e,[2,24]),t(e,[2,25]),t(e,[2,26]),t(e,[2,27]),{32:[1,37]},{34:[1,38]},t(e,[2,30]),t(e,[2,31]),t(e,[2,32]),{39:[1,39]},t(e,[2,8]),t(e,[2,9]),t(e,[2,10]),t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),{41:[1,40],43:[1,41]},t(e,[2,4]),t(e,[2,28]),t(e,[2,29]),t(e,[2,33]),t(e,[2,34],{42:[1,42],43:[1,43]}),t(e,[2,40],{41:[1,44]}),t(e,[2,35],{43:[1,45]}),t(e,[2,36]),t(e,[2,38],{42:[1,46]}),t(e,[2,37]),t(e,[2,39])],defaultActions:{},parseError:o(function(s,d){if(d.recoverable)this.trace(s);else{var f=new Error(s);throw f.hash=d,f}},"parseError"),parse:o(function(s){var d=this,f=[0],u=[],C=[null],r=[],w=this.table,l="",V=0,c=0,T=2,x=1,A=r.slice.call(arguments,1),b=Object.create(this.lexer),M={yy:{}};for(var F in this.yy)Object.prototype.hasOwnProperty.call(this.yy,F)&&(M.yy[F]=this.yy[F]);b.setInput(s,M.yy),M.yy.lexer=b,M.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var kt=b.yylloc;r.push(kt);var Dt=b.options&&b.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Me(Y){f.length=f.length-2*Y,C.length=C.length-Y,r.length=r.length-Y}o(Me,"popStack");function Jt(){var Y;return Y=u.pop()||b.lex()||x,typeof Y!="number"&&(Y instanceof Array&&(u=Y,Y=u.pop()),Y=d.symbols_[Y]||Y),Y}o(Jt,"lex");for(var z,nt,H,St,st={},yt,tt,$t,gt;;){if(nt=f[f.length-1],this.defaultActions[nt]?H=this.defaultActions[nt]:((z===null||typeof z>"u")&&(z=Jt()),H=w[nt]&&w[nt][z]),typeof H>"u"||!H.length||!H[0]){var Et="";gt=[];for(yt in w[nt])this.terminals_[yt]&&yt>T&&gt.push("'"+this.terminals_[yt]+"'");b.showPosition?Et="Parse error on line "+(V+1)+`:
`+b.showPosition()+`
Expecting `+gt.join(", ")+", got '"+(this.terminals_[z]||z)+"'":Et="Parse error on line "+(V+1)+": Unexpected "+(z==x?"end of input":"'"+(this.terminals_[z]||z)+"'"),this.parseError(Et,{text:b.match,token:this.terminals_[z]||z,line:b.yylineno,loc:kt,expected:gt})}if(H[0]instanceof Array&&H.length>1)throw new Error("Parse Error: multiple actions possible at state: "+nt+", token: "+z);switch(H[0]){case 1:f.push(z),C.push(b.yytext),r.push(b.yylloc),f.push(H[1]),z=null,c=b.yyleng,l=b.yytext,V=b.yylineno,kt=b.yylloc;break;case 2:if(tt=this.productions_[H[1]][1],st.$=C[C.length-tt],st._$={first_line:r[r.length-(tt||1)].first_line,last_line:r[r.length-1].last_line,first_column:r[r.length-(tt||1)].first_column,last_column:r[r.length-1].last_column},Dt&&(st._$.range=[r[r.length-(tt||1)].range[0],r[r.length-1].range[1]]),St=this.performAction.apply(st,[l,c,V,M.yy,H[1],C,r].concat(A)),typeof St<"u")return St;tt&&(f=f.slice(0,-1*tt*2),C=C.slice(0,-1*tt),r=r.slice(0,-1*tt)),f.push(this.productions_[H[1]][0]),C.push(st.$),r.push(st._$),$t=w[f[f.length-2]][f[f.length-1]],f.push($t);break;case 3:return!0}}return!0},"parse")},v=(function(){var y={EOF:1,parseError:o(function(d,f){if(this.yy.parser)this.yy.parser.parseError(d,f);else throw new Error(d)},"parseError"),setInput:o(function(s,d){return this.yy=d||this.yy||{},this._input=s,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:o(function(){var s=this._input[0];this.yytext+=s,this.yyleng++,this.offset++,this.match+=s,this.matched+=s;var d=s.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),s},"input"),unput:o(function(s){var d=s.length,f=s.split(/(?:\r\n?|\n)/g);this._input=s+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var u=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var C=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===u.length?this.yylloc.first_column:0)+u[u.length-f.length].length-f[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[C[0],C[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},"unput"),more:o(function(){return this._more=!0,this},"more"),reject:o(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:o(function(s){this.unput(this.match.slice(s))},"less"),pastInput:o(function(){var s=this.matched.substr(0,this.matched.length-this.match.length);return(s.length>20?"...":"")+s.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:o(function(){var s=this.match;return s.length<20&&(s+=this._input.substr(0,20-s.length)),(s.substr(0,20)+(s.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:o(function(){var s=this.pastInput(),d=new Array(s.length+1).join("-");return s+this.upcomingInput()+`
`+d+"^"},"showPosition"),test_match:o(function(s,d){var f,u,C;if(this.options.backtrack_lexer&&(C={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(C.yylloc.range=this.yylloc.range.slice(0))),u=s[0].match(/(?:\r\n?|\n).*/g),u&&(this.yylineno+=u.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:u?u[u.length-1].length-u[u.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+s[0].length},this.yytext+=s[0],this.match+=s[0],this.matches=s,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(s[0].length),this.matched+=s[0],f=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var r in C)this[r]=C[r];return!1}return!1},"test_match"),next:o(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var s,d,f,u;this._more||(this.yytext="",this.match="");for(var C=this._currentRules(),r=0;r<C.length;r++)if(f=this._input.match(this.rules[C[r]]),f&&(!d||f[0].length>d[0].length)){if(d=f,u=r,this.options.backtrack_lexer){if(s=this.test_match(f,C[r]),s!==!1)return s;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(s=this.test_match(d,C[u]),s!==!1?s:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:o(function(){var d=this.next();return d||this.lex()},"lex"),begin:o(function(d){this.conditionStack.push(d)},"begin"),popState:o(function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:o(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:o(function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},"topState"),pushState:o(function(d){this.begin(d)},"pushState"),stateStackSize:o(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:o(function(d,f,u,C){switch(u){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return y})();m.lexer=v;function g(){this.yy={}}return o(g,"Parser"),g.prototype=m,m.Parser=g,new g})();Pt.parser=Pt;var bi=Pt;N.extend(ni);N.extend(ri);N.extend(ai);var le={friday:5,saturday:6},Z="",Bt="",qt=void 0,Ht="",dt=[],ft=[],Xt=new Map,jt=[],_t=[],ht="",Ut="",we=["active","done","crit","milestone","vert"],Gt=[],ct="",mt=!1,Kt=!1,Zt="sunday",Ct="saturday",Wt=0,wi=o(function(){jt=[],_t=[],ht="",Gt=[],xt=0,Yt=void 0,bt=void 0,L=[],Z="",Bt="",Ut="",qt=void 0,Ht="",dt=[],ft=[],mt=!1,Kt=!1,Wt=0,Xt=new Map,ct="",Be(),Zt="sunday",Ct="saturday"},"clear"),_i=o(function(t){ct=t},"setDiagramId"),Ci=o(function(t){Bt=t},"setAxisFormat"),Di=o(function(){return Bt},"getAxisFormat"),Si=o(function(t){qt=t},"setTickInterval"),Ei=o(function(){return qt},"getTickInterval"),Ii=o(function(t){Ht=t},"setTodayMarker"),Ai=o(function(){return Ht},"getTodayMarker"),Fi=o(function(t){Z=t},"setDateFormat"),Mi=o(function(){mt=!0},"enableInclusiveEndDates"),Li=o(function(){return mt},"endDatesAreInclusive"),Oi=o(function(){Kt=!0},"enableTopAxis"),Vi=o(function(){return Kt},"topAxisEnabled"),Ni=o(function(t){Ut=t},"setDisplayMode"),Ri=o(function(){return Ut},"getDisplayMode"),Pi=o(function(){return Z},"getDateFormat"),_e=o((t,e)=>{const i=e.toLowerCase().split(/[\s,]+/).filter(n=>n!=="");return[...new Set([...t,...i])]},"mergeTokens"),Wi=o(function(t){dt=_e(dt,t)},"setIncludes"),zi=o(function(){return dt},"getIncludes"),Yi=o(function(t){ft=_e(ft,t)},"setExcludes"),Bi=o(function(){return ft},"getExcludes"),qi=o(function(){return Xt},"getLinks"),Hi=o(function(t){ht=t,jt.push(t)},"addSection"),Xi=o(function(){return jt},"getSections"),ji=o(function(){let t=oe();const e=10;let i=0;for(;!t&&i<e;)t=oe(),i++;return _t=L,_t},"getTasks"),Ce=o(function(t,e,i,n){const a=t.format(e.trim()),h=t.format("YYYY-MM-DD");return n.includes(a)||n.includes(h)?!1:i.includes("weekends")&&(t.isoWeekday()===le[Ct]||t.isoWeekday()===le[Ct]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(a)||i.includes(h)},"isInvalidDate"),Ui=o(function(t){Zt=t},"setWeekday"),Gi=o(function(){return Zt},"getWeekday"),Ki=o(function(t){Ct=t},"setWeekend"),De=o(function(t,e,i,n){if(!i.length||t.manualEndTime)return;let a;t.startTime instanceof Date?a=N(t.startTime):a=N(t.startTime,e,!0),a=a.add(1,"d");let h;t.endTime instanceof Date?h=N(t.endTime):h=N(t.endTime,e,!0);const[k,D]=Zi(a,h,e,i,n);t.endTime=k.toDate(),t.renderEndTime=D},"checkTaskDates"),Zi=o(function(t,e,i,n,a){let h=!1,k=null;const D=e.add(1e4,"d");for(;t<=e;){if(h||(k=e.toDate()),h=Ce(t,i,n,a),h&&(e=e.add(1,"d"),e>D))throw new Error("Failed to find a valid date that was not excluded by `excludes` after 10,000 iterations.");t=t.add(1,"d")}return[e,k]},"fixTaskDates"),zt=o(function(t,e,i){if(i=i.trim(),o(D=>{const E=D.trim();return E==="x"||E==="X"},"isTimestampFormat")(e)&&/^\d+$/.test(i))return new Date(Number(i));const h=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(h!==null){let D=null;for(const O of h.groups.ids.split(" ")){let I=at(O);I!==void 0&&(!D||I.endTime>D.endTime)&&(D=I)}if(D)return D.endTime;const E=new Date;return E.setHours(0,0,0,0),E}let k=N(i,e.trim(),!0);if(k.isValid())return k.toDate();{rt.debug("Invalid date:"+i),rt.debug("With date format:"+e.trim());const D=new Date(i);if(D===void 0||isNaN(D.getTime())||D.getFullYear()<-1e4||D.getFullYear()>1e4)throw new Error("Invalid date:"+i);return D}},"getStartDate"),Se=o(function(t){const e=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return e!==null?[Number.parseFloat(e[1]),e[2]]:[NaN,"ms"]},"parseDuration"),Ee=o(function(t,e,i,n=!1){i=i.trim();const h=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(h!==null){let I=null;for(const _ of h.groups.ids.split(" ")){let p=at(_);p!==void 0&&(!I||p.startTime<I.startTime)&&(I=p)}if(I)return I.startTime;const P=new Date;return P.setHours(0,0,0,0),P}let k=N(i,e.trim(),!0);if(k.isValid())return n&&(k=k.add(1,"d")),k.toDate();let D=N(t);const[E,O]=Se(i);if(!Number.isNaN(E)){const I=D.add(E,O);I.isValid()&&(D=I)}return D.toDate()},"getEndDate"),xt=0,ut=o(function(t){return t===void 0?(xt=xt+1,"task"+xt):t},"parseId"),Qi=o(function(t,e){let i;e.substr(0,1)===":"?i=e.substr(1,e.length):i=e;const n=i.split(","),a={};Qt(n,a,we);for(let k=0;k<n.length;k++)n[k]=n[k].trim();let h="";switch(n.length){case 1:a.id=ut(),a.startTime=t.endTime,h=n[0];break;case 2:a.id=ut(),a.startTime=zt(void 0,Z,n[0]),h=n[1];break;case 3:a.id=ut(n[0]),a.startTime=zt(void 0,Z,n[1]),h=n[2];break}return h&&(a.endTime=Ee(a.startTime,Z,h,mt),a.manualEndTime=N(h,"YYYY-MM-DD",!0).isValid(),De(a,Z,ft,dt)),a},"compileData"),Ji=o(function(t,e){let i;e.substr(0,1)===":"?i=e.substr(1,e.length):i=e;const n=i.split(","),a={};Qt(n,a,we);for(let h=0;h<n.length;h++)n[h]=n[h].trim();switch(n.length){case 1:a.id=ut(),a.startTime={type:"prevTaskEnd",id:t},a.endTime={data:n[0]};break;case 2:a.id=ut(),a.startTime={type:"getStartDate",startData:n[0]},a.endTime={data:n[1]};break;case 3:a.id=ut(n[0]),a.startTime={type:"getStartDate",startData:n[1]},a.endTime={data:n[2]};break}return a},"parseData"),Yt,bt,L=[],Ie={},$i=o(function(t,e){const i={section:ht,type:ht,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:e},task:t,classes:[]},n=Ji(bt,e);i.raw.startTime=n.startTime,i.raw.endTime=n.endTime,i.id=n.id,i.prevTaskId=bt,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.vert=n.vert,i.vert?i.order=-1:(i.order=Wt,Wt++);const a=L.push(i);bt=i.id,Ie[i.id]=a-1},"addTask"),at=o(function(t){const e=Ie[t];return L[e]},"findTaskById"),tn=o(function(t,e){const i={section:ht,type:ht,description:t,task:t,classes:[]},n=Qi(Yt,e);i.startTime=n.startTime,i.endTime=n.endTime,i.id=n.id,i.active=n.active,i.done=n.done,i.crit=n.crit,i.milestone=n.milestone,i.vert=n.vert,Yt=i,_t.push(i)},"addTaskOrg"),oe=o(function(){const t=o(function(i){const n=L[i];let a="";switch(L[i].raw.startTime.type){case"prevTaskEnd":{const h=at(n.prevTaskId);n.startTime=h.endTime;break}case"getStartDate":a=zt(void 0,Z,L[i].raw.startTime.startData),a&&(L[i].startTime=a);break}return L[i].startTime&&(L[i].endTime=Ee(L[i].startTime,Z,L[i].raw.endTime.data,mt),L[i].endTime&&(L[i].processed=!0,L[i].manualEndTime=N(L[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),De(L[i],Z,ft,dt))),L[i].processed},"compileTask");let e=!0;for(const[i,n]of L.entries())t(i),e=e&&n.processed;return e},"compileTasks"),en=o(function(t,e){let i=e;lt().securityLevel!=="loose"&&(i=Ye.sanitizeUrl(e)),t.split(",").forEach(function(n){at(n)!==void 0&&(Fe(n,()=>{window.open(i,"_self")}),Xt.set(n,i))}),Ae(t,"clickable")},"setLink"),Ae=o(function(t,e){t.split(",").forEach(function(i){let n=at(i);n!==void 0&&n.classes.push(e)})},"setClass"),nn=o(function(t,e,i){if(lt().securityLevel!=="loose"||e===void 0)return;let n=[];if(typeof i=="string"){n=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let h=0;h<n.length;h++){let k=n[h].trim();k.startsWith('"')&&k.endsWith('"')&&(k=k.substr(1,k.length-2)),n[h]=k}}n.length===0&&n.push(t),at(t)!==void 0&&Fe(t,()=>{qe.runFunc(e,...n)})},"setClickFun"),Fe=o(function(t,e){Gt.push(function(){const i=ct?`${ct}-${t}`:t,n=document.querySelector(`[id="${i}"]`);n!==null&&n.addEventListener("click",function(){e()})},function(){const i=ct?`${ct}-${t}`:t,n=document.querySelector(`[id="${i}-text"]`);n!==null&&n.addEventListener("click",function(){e()})})},"pushFun"),rn=o(function(t,e,i){t.split(",").forEach(function(n){nn(n,e,i)}),Ae(t,"clickable")},"setClickEvent"),an=o(function(t){Gt.forEach(function(e){e(t)})},"bindFunctions"),sn={getConfig:o(()=>lt().gantt,"getConfig"),clear:wi,setDateFormat:Fi,getDateFormat:Pi,enableInclusiveEndDates:Mi,endDatesAreInclusive:Li,enableTopAxis:Oi,topAxisEnabled:Vi,setAxisFormat:Ci,getAxisFormat:Di,setTickInterval:Si,getTickInterval:Ei,setTodayMarker:Ii,getTodayMarker:Ai,setAccTitle:Pe,getAccTitle:Re,setDiagramTitle:Ne,getDiagramTitle:Ve,setDiagramId:_i,setDisplayMode:Ni,getDisplayMode:Ri,setAccDescription:Oe,getAccDescription:Le,addSection:Hi,getSections:Xi,getTasks:ji,addTask:$i,findTaskById:at,addTaskOrg:tn,setIncludes:Wi,getIncludes:zi,setExcludes:Yi,getExcludes:Bi,setClickEvent:rn,setLink:en,getLinks:qi,bindFunctions:an,parseDuration:Se,isInvalidDate:Ce,setWeekday:Ui,getWeekday:Gi,setWeekend:Ki};function Qt(t,e,i){let n=!0;for(;n;)n=!1,i.forEach(function(a){const h="^\\s*"+a+"\\s*$",k=new RegExp(h);t[0].match(k)&&(e[a]=!0,t.shift(1),n=!0)})}o(Qt,"getTaskTags");N.extend(si);var cn=o(function(){rt.debug("Something is calling, setConf, remove the call")},"setConf"),ue={monday:ii,tuesday:ei,wednesday:ti,thursday:$e,friday:Je,saturday:Qe,sunday:Ze},ln=o((t,e)=>{let i=[...t].map(()=>-1/0),n=[...t].sort((h,k)=>h.startTime-k.startTime||h.order-k.order),a=0;for(const h of n)for(let k=0;k<i.length;k++)if(h.startTime>=i[k]){i[k]=h.endTime,h.order=k+e,k>a&&(a=k);break}return a},"getMaxIntersections"),et,Vt=1e4,on=o(function(t,e,i,n){const a=lt().gantt;n.db.setDiagramId(e);const h=lt().securityLevel;let k;h==="sandbox"&&(k=pt("#i"+e));const D=h==="sandbox"?pt(k.nodes()[0].contentDocument.body):pt("body"),E=h==="sandbox"?k.nodes()[0].contentDocument:document,O=E.getElementById(e);et=O.parentElement.offsetWidth,et===void 0&&(et=1200),a.useWidth!==void 0&&(et=a.useWidth);const I=n.db.getTasks(),P=I.filter(m=>!m.vert);let _=[];for(const m of P)_.push(m.type);_=K(_);const p={};let X=2*a.topPadding;if(n.db.getDisplayMode()==="compact"||a.displayMode==="compact"){const m={};for(const g of P)m[g.section]===void 0?m[g.section]=[g]:m[g.section].push(g);let v=0;for(const g of Object.keys(m)){const y=ln(m[g],v)+1;v+=y,X+=y*(a.barHeight+a.barGap),p[g]=y}}else{X+=P.length*(a.barHeight+a.barGap);for(const m of _)p[m]=P.filter(v=>v.type===m).length}O.setAttribute("viewBox","0 0 "+et+" "+X);const W=D.select(`[id="${e}"]`),S=je().domain([Ue(I,function(m){return m.startTime}),Ge(I,function(m){return m.endTime})]).rangeRound([0,et-a.leftPadding-a.rightPadding]);function J(m,v){const g=m.startTime,y=v.startTime;let s=0;return g>y?s=1:g<y&&(s=-1),s}o(J,"taskCompare"),I.sort(J),j(I,et,X),We(W,X,et,a.useMaxWidth),W.append("text").text(n.db.getDiagramTitle()).attr("x",et/2).attr("y",a.titleTopMargin).attr("class","titleText");function j(m,v,g){const y=a.barHeight,s=y+a.barGap,d=a.topPadding,f=a.leftPadding,u=Ke().domain([0,_.length]).range(["#00B9FA","#F95002"]).interpolate(hi);G(s,d,f,v,g,m,n.db.getExcludes(),n.db.getIncludes()),q(f,d,v,g),U(m,s,d,f,y,u,v),R(s,d),$(f,d,v,g)}o(j,"makeGantt");function U(m,v,g,y,s,d,f){m.sort((c,T)=>c.vert===T.vert?0:c.vert?1:-1);const u=m.filter(c=>!c.vert),r=[...new Set(u.map(c=>c.order))].map(c=>u.find(T=>T.order===c));W.append("g").selectAll("rect").data(r).enter().append("rect").attr("x",0).attr("y",function(c,T){return T=c.order,T*v+g-2}).attr("width",function(){return f-a.rightPadding/2}).attr("height",v).attr("class",function(c){for(const[T,x]of _.entries())if(c.type===x)return"section section"+T%a.numberSectionStyles;return"section section0"}).enter();const w=W.append("g").selectAll("rect").data(m).enter(),l=n.db.getLinks();if(w.append("rect").attr("id",function(c){return e+"-"+c.id}).attr("rx",3).attr("ry",3).attr("x",function(c){return c.milestone?S(c.startTime)+y+.5*(S(c.endTime)-S(c.startTime))-.5*s:S(c.startTime)+y}).attr("y",function(c,T){return T=c.order,c.vert?a.gridLineStartPadding:T*v+g}).attr("width",function(c){return c.milestone?s:c.vert?.08*s:S(c.renderEndTime||c.endTime)-S(c.startTime)}).attr("height",function(c){return c.vert?u.length*(a.barHeight+a.barGap)+a.barHeight*2:s}).attr("transform-origin",function(c,T){return T=c.order,(S(c.startTime)+y+.5*(S(c.endTime)-S(c.startTime))).toString()+"px "+(T*v+g+.5*s).toString()+"px"}).attr("class",function(c){const T="task";let x="";c.classes.length>0&&(x=c.classes.join(" "));let A=0;for(const[M,F]of _.entries())c.type===F&&(A=M%a.numberSectionStyles);let b="";return c.active?c.crit?b+=" activeCrit":b=" active":c.done?c.crit?b=" doneCrit":b=" done":c.crit&&(b+=" crit"),b.length===0&&(b=" task"),c.milestone&&(b=" milestone "+b),c.vert&&(b=" vert "+b),b+=A,b+=" "+x,T+b}),w.append("text").attr("id",function(c){return e+"-"+c.id+"-text"}).text(function(c){return c.task}).attr("font-size",a.fontSize).attr("x",function(c){let T=S(c.startTime),x=S(c.renderEndTime||c.endTime);if(c.milestone&&(T+=.5*(S(c.endTime)-S(c.startTime))-.5*s,x=T+s),c.vert)return S(c.startTime)+y;const A=this.getBBox().width;return A>x-T?x+A+1.5*a.leftPadding>f?T+y-5:x+y+5:(x-T)/2+T+y}).attr("y",function(c,T){return c.vert?a.gridLineStartPadding+u.length*(a.barHeight+a.barGap)+60:(T=c.order,T*v+a.barHeight/2+(a.fontSize/2-2)+g)}).attr("text-height",s).attr("class",function(c){const T=S(c.startTime);let x=S(c.endTime);c.milestone&&(x=T+s);const A=this.getBBox().width;let b="";c.classes.length>0&&(b=c.classes.join(" "));let M=0;for(const[kt,Dt]of _.entries())c.type===Dt&&(M=kt%a.numberSectionStyles);let F="";return c.active&&(c.crit?F="activeCritText"+M:F="activeText"+M),c.done?c.crit?F=F+" doneCritText"+M:F=F+" doneText"+M:c.crit&&(F=F+" critText"+M),c.milestone&&(F+=" milestoneText"),c.vert&&(F+=" vertText"),A>x-T?x+A+1.5*a.leftPadding>f?b+" taskTextOutsideLeft taskTextOutside"+M+" "+F:b+" taskTextOutsideRight taskTextOutside"+M+" "+F+" width-"+A:b+" taskText taskText"+M+" "+F+" width-"+A}),lt().securityLevel==="sandbox"){let c;c=pt("#i"+e);const T=c.nodes()[0].contentDocument;w.filter(function(x){return l.has(x.id)}).each(function(x){var A=T.querySelector("#"+CSS.escape(e+"-"+x.id)),b=T.querySelector("#"+CSS.escape(e+"-"+x.id+"-text"));const M=A.parentNode;var F=T.createElement("a");F.setAttribute("xlink:href",l.get(x.id)),F.setAttribute("target","_top"),M.appendChild(F),F.appendChild(A),F.appendChild(b)})}}o(U,"drawRects");function G(m,v,g,y,s,d,f,u){if(f.length===0&&u.length===0)return;let C,r;for(const{startTime:x,endTime:A}of d)(C===void 0||x<C)&&(C=x),(r===void 0||A>r)&&(r=A);if(!C||!r)return;if(N(r).diff(N(C),"year")>5){rt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const w=n.db.getDateFormat(),l=[];let V=null,c=N(C);for(;c.valueOf()<=r;)n.db.isInvalidDate(c,w,f,u)?V?V.end=c:V={start:c,end:c}:V&&(l.push(V),V=null),c=c.add(1,"d");W.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",x=>e+"-exclude-"+x.start.format("YYYY-MM-DD")).attr("x",x=>S(x.start.startOf("day"))+g).attr("y",a.gridLineStartPadding).attr("width",x=>S(x.end.endOf("day"))-S(x.start.startOf("day"))).attr("height",s-v-a.gridLineStartPadding).attr("transform-origin",function(x,A){return(S(x.start)+g+.5*(S(x.end)-S(x.start))).toString()+"px "+(A*m+.5*s).toString()+"px"}).attr("class","exclude-range")}o(G,"drawExcludeDays");function B(m,v,g,y){if(g<=0||m>v)return 1/0;const s=v-m,d=N.duration({[y??"day"]:g}).asMilliseconds();return d<=0?1/0:Math.ceil(s/d)}o(B,"getEstimatedTickCount");function q(m,v,g,y){const s=n.db.getDateFormat(),d=n.db.getAxisFormat();let f;d?f=d:s==="D"?f="%d":f=a.axisFormat??"%Y-%m-%d";let u=xi(S).tickSize(-y+v+a.gridLineStartPadding).tickFormat(te(f));const r=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(n.db.getTickInterval()||a.tickInterval);if(r!==null){const w=parseInt(r[1],10);if(isNaN(w)||w<=0)rt.warn(`Invalid tick interval value: "${r[1]}". Skipping custom tick interval.`);else{const l=r[2],V=n.db.getWeekday()||a.weekday,c=S.domain(),T=c[0],x=c[1],A=B(T,x,w,l);if(A>Vt)rt.warn(`The tick interval "${w}${l}" would generate ${A} ticks, which exceeds the maximum allowed (${Vt}). This may indicate an invalid date or time range. Skipping custom tick interval.`);else switch(l){case"millisecond":u.ticks(se.every(w));break;case"second":u.ticks(ae.every(w));break;case"minute":u.ticks(re.every(w));break;case"hour":u.ticks(ne.every(w));break;case"day":u.ticks(ie.every(w));break;case"week":u.ticks(ue[V].every(w));break;case"month":u.ticks(ee.every(w));break}}}if(W.append("g").attr("class","grid").attr("transform","translate("+m+", "+(y-50)+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),n.db.topAxisEnabled()||a.topAxis){let w=Ti(S).tickSize(-y+v+a.gridLineStartPadding).tickFormat(te(f));if(r!==null){const l=parseInt(r[1],10);if(isNaN(l)||l<=0)rt.warn(`Invalid tick interval value: "${r[1]}". Skipping custom tick interval.`);else{const V=r[2],c=n.db.getWeekday()||a.weekday,T=S.domain(),x=T[0],A=T[1];if(B(x,A,l,V)<=Vt)switch(V){case"millisecond":w.ticks(se.every(l));break;case"second":w.ticks(ae.every(l));break;case"minute":w.ticks(re.every(l));break;case"hour":w.ticks(ne.every(l));break;case"day":w.ticks(ie.every(l));break;case"week":w.ticks(ue[c].every(l));break;case"month":w.ticks(ee.every(l));break}}}W.append("g").attr("class","grid").attr("transform","translate("+m+", "+v+")").call(w).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}o(q,"makeGrid");function R(m,v){let g=0;const y=Object.keys(p).map(s=>[s,p[s]]);W.append("g").selectAll("text").data(y).enter().append(function(s){const d=s[0].split(ze.lineBreakRegex),f=-(d.length-1)/2,u=E.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",f+"em");for(const[C,r]of d.entries()){const w=E.createElementNS("http://www.w3.org/2000/svg","tspan");w.setAttribute("alignment-baseline","central"),w.setAttribute("x","10"),C>0&&w.setAttribute("dy","1em"),w.textContent=r,u.appendChild(w)}return u}).attr("x",10).attr("y",function(s,d){if(d>0)for(let f=0;f<d;f++)return g+=y[d-1][1],s[1]*m/2+g*m+v;else return s[1]*m/2+v}).attr("font-size",a.sectionFontSize).attr("class",function(s){for(const[d,f]of _.entries())if(s[0]===f)return"sectionTitle sectionTitle"+d%a.numberSectionStyles;return"sectionTitle"})}o(R,"vertLabels");function $(m,v,g,y){const s=n.db.getTodayMarker();if(s==="off")return;const d=W.append("g").attr("class","today"),f=new Date,u=d.append("line");u.attr("x1",S(f)+m).attr("x2",S(f)+m).attr("y1",a.titleTopMargin).attr("y2",y-a.titleTopMargin).attr("class","today"),s!==""&&u.attr("style",s.replace(/,/g,";"))}o($,"drawToday");function K(m){const v={},g=[];for(let y=0,s=m.length;y<s;++y)Object.prototype.hasOwnProperty.call(v,m[y])||(v[m[y]]=!0,g.push(m[y]));return g}o(K,"checkUnique")},"draw"),un={setConf:cn,draw:on},dn=o(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done task text displayed outside the bar sits against the diagram background,
     not against the done-task bar, so it must use the outside/contrast color. */
  .doneText0.taskTextOutsideLeft,
  .doneText0.taskTextOutsideRight,
  .doneText1.taskTextOutsideLeft,
  .doneText1.taskTextOutsideRight,
  .doneText2.taskTextOutsideLeft,
  .doneText2.taskTextOutsideRight,
  .doneText3.taskTextOutsideLeft,
  .doneText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  /* Done-crit task text outside the bar — same reasoning as doneText above. */
  .doneCritText0.taskTextOutsideLeft,
  .doneCritText0.taskTextOutsideRight,
  .doneCritText1.taskTextOutsideLeft,
  .doneCritText1.taskTextOutsideRight,
  .doneCritText2.taskTextOutsideLeft,
  .doneCritText2.taskTextOutsideRight,
  .doneCritText3.taskTextOutsideLeft,
  .doneCritText3.taskTextOutsideRight {
    fill: ${t.taskTextOutsideColor} !important;
  }

  .vert {
    stroke: ${t.vertLineColor};
  }

  .vertText {
    font-size: 15px;
    text-anchor: middle;
    fill: ${t.vertLineColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),fn=dn,mn={parser:bi,db:sn,renderer:un,styles:fn};export{mn as diagram};
