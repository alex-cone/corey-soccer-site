(this["webpackJsonpcorey-soccer-site"]=this["webpackJsonpcorey-soccer-site"]||[]).push([[0],{145:function(e,t,a){e.exports=a(287)},150:function(e,t,a){},151:function(e,t,a){},152:function(e,t,a){},268:function(e,t,a){e.exports=a.p+"static/media/pic1.f706760f.jpg"},269:function(e,t,a){e.exports=a.p+"static/media/pic2.2bf9c010.jpg"},270:function(e,t,a){e.exports=a.p+"static/media/pic3.a70f2ef0.jpg"},271:function(e,t,a){e.exports=a.p+"static/media/profile.7ab3518b.jpg"},287:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(31),i=a.n(l),c=(a(150),a(135)),o=a(84),s=a.n(o),u=a(134),m=a(298),d=a(293),h=a(297),p=a(295),f=(a(151),a(123)),v=a(124),g=a(136),w=a(137),E=a(299),y=a(59),k=a(296),b=(a(152),function(e){Object(w.a)(a,e);var t=Object(g.a)(a);function a(e){var n;return Object(f.a)(this,a),(n=t.call(this,e)).state={currentIndex:0},n}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.duration&&(this.interval=setInterval((function(){e.nextSlide();try{e.props.onSlideChange(e.state.currentIndex,e.props.elements[e.state.currentIndex])}catch(t){}}),this.props.duration))}},{key:"componentWillUnmount",value:function(){this.props.duration&&clearInterval(this.interval)}},{key:"nextSlide",value:function(){this.setState({currentIndex:(this.state.currentIndex+1)%this.props.elements.length})}},{key:"prevSlide",value:function(){this.setState({currentIndex:(this.state.currentIndex-1)%this.props.elements.length<0?this.props.elements.length-1:(this.state.currentIndex-1)%this.props.elements.length})}},{key:"gotToSlide",value:function(e){this.props.duration&&clearInterval(this.interval),this.setState({currentIndex:e})}},{key:"nextClicked",value:function(){this.props.duration&&clearInterval(this.interval),this.nextSlide()}},{key:"prevClicked",value:function(){this.props.duration&&clearInterval(this.interval),this.prevSlide()}},{key:"render",value:function(){var e=this;return r.a.createElement(d.a,{fluid:!0,className:"carousel-container"},r.a.createElement(p.a.Content,{className:"carousel"},this.props.elements.map((function(t,a){return e.state.currentIndex===a?r.a.createElement(E.a,{key:"index_".concat(+new Date),transitionOnMount:!0,visible:!0,duration:750,animation:e.props.animation},e.props.elements[a].render()):null})),r.a.createElement("div",{className:"carousel-indicators"},this.props.showIndicators?this.props.elements.map((function(t,a){return e.state.currentIndex===a?r.a.createElement("a",null,r.a.createElement(y.a,{onClick:function(){return e.gotToSlide(a)},circular:!0,color:"black",empty:!0})):r.a.createElement("a",null,r.a.createElement(y.a,{onClick:function(){return e.gotToSlide(a)},circular:!0,color:"grey",empty:!0}))})):null),this.props.showNextPrev?r.a.createElement(k.a,{className:"prev",onClick:function(){return e.prevClicked()},icon:"caret left"}):null,this.props.showNextPrev?r.a.createElement(k.a,{className:"next",onClick:function(){return e.nextClicked()},icon:"caret right"}):null))}}]),a}(r.a.Component)),x=[{title:"Shots on Goal:",value:" 23"},{title:"Saved:",value:" 21"},{title:"Allowed:",value:" 2"}],S=[{title:"GAA:",value:" 0.3"},{title:"Total Goals Against:",value:" 2"},{title:"Total Shutouts:",value:" 6"},{title:"Total Save Percentage:",value:" 91.3%"},{title:"Best Mile:",value:" 6:22"}],I=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),x.map((function(e){return r.a.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap"}},r.a.createElement("b",{style:{paddingLeft:"5%"}},e.title),r.a.createElement("p",{style:{float:"right",overflow:"hidden",whiteSpace:"nowrap",paddingRight:"5%"}},e.value),r.a.createElement("hr",null))})),S.map((function(e){return r.a.createElement("div",{style:{overflow:"hidden",whiteSpace:"nowrap"}},r.a.createElement("b",{style:{paddingLeft:"5%"}},e.title),r.a.createElement("p",{style:{float:"right",overflow:"hidden",whiteSpace:"nowrap",paddingRight:"5%"}},e.value),r.a.createElement("hr",null))})))},C=[{title:"Height:",value:" 5' 5\" 1/4"},{title:"Weight:",value:" 108 lbs."}],A=function(){return r.a.createElement("div",null,C.map((function(e){return r.a.createElement("span",null,r.a.createElement("b",null,e.title),e.value,r.a.createElement("br",null))})))},B=a(268),N=a(269),j=a(270),P=a(271),W=s.a.duration(s.a.now()-11372328e5).years(),G=[{render:function(){return r.a.createElement(u.a,{src:B})}},{render:function(){return r.a.createElement(u.a,{src:N})}},{render:function(){return r.a.createElement(u.a,{src:j})}}];if(document.location.hash){var O=document.location.hash.replace("#","").replace("/",""),F=document.getElementById(O);F&&F.scrollIntoView()}var T=function(){var e=Object(n.useState)(document.location.hash.replace("#","").replace("/","")),t=Object(c.a)(e,2),a=t[0],l=t[1];return r.a.createElement(m.a,null,r.a.createElement(m.a.Row,null,r.a.createElement(d.a,{style:{width:"50%"}},r.a.createElement(h.a,{widths:6,stackable:!0,fluid:!0},r.a.createElement(h.a.Item,{href:"#profile",key:"profile",active:"profile"===a,name:"Profile",onClick:function(){return l("profile")}}),r.a.createElement(h.a.Item,{href:"#highlights",key:"highlights",active:"highlights"===a,name:"Highlights",onClick:function(){return l("highlights")}}),r.a.createElement(h.a.Item,{href:"#breakaways",key:"breakaways",active:"breakaways"===a,name:"Breakaways",onClick:function(){return l("breakaways")}}),r.a.createElement(h.a.Item,{href:"#catching",key:"catching",active:"catching"===a,name:"Catching",onClick:function(){return l("catching")}}),r.a.createElement(h.a.Item,{href:"#goalkicks",key:"goalkicks",active:"goalkicks"===a,name:"Goal Kicks",onClick:function(){return l("goalkicks")}}),r.a.createElement(h.a.Item,{href:"#punts",key:"punts",active:"punts"===a,name:"Punts",onClick:function(){return l("punts")}})),r.a.createElement(b,{elements:G,duration:3e3,showNextPrev:!1,showIndicators:!0}),r.a.createElement(p.a.Group,{id:"profile",fluid:!0,itemsPerRow:2},r.a.createElement(p.a,{style:{width:"50%"},image:P,header:"Corey Chachere",meta:"".concat(W," years old (Born 01/14/2006)"),description:A}),r.a.createElement(p.a,{style:{width:"44%"},header:"Goalkeeper Stats",meta:r.a.createElement("div",null,"Fall 2019 Season",r.a.createElement("br",null),r.a.createElement("br",null)),description:I})),r.a.createElement(p.a,{id:"highlights",style:{textAlign:"center"},fluid:!0,header:"Highlights",description:r.a.createElement("div",{style:{textAlign:"center"},className:"videoWrapper"},r.a.createElement("br",null),r.a.createElement("iframe",{title:"Highlights",frameBorder:"0",width:"640",height:"360",src:"https://www.dailymotion.com/embed/video/x7sz239?queue-enable=false",allowFullScreen:!0}))}),r.a.createElement(p.a,{id:"breakaways",style:{textAlign:"center"},fluid:!0,header:"Breakaways",description:r.a.createElement("div",{style:{textAlign:"center"},className:"videoWrapper"},r.a.createElement("br",null),r.a.createElement("iframe",{title:"Breakaways",frameBorder:"0",width:"640",height:"360",src:"https://www.dailymotion.com/embed/video/x7sz1po?queue-enable=false",allowFullScreen:!0}))}),r.a.createElement(p.a,{id:"catching",style:{textAlign:"center"},fluid:!0,header:"Catching",description:r.a.createElement("div",{style:{textAlign:"center"},className:"videoWrapper"},r.a.createElement("br",null),r.a.createElement("iframe",{title:"Catching",frameBorder:"0",width:"640",height:"360",src:"https://www.dailymotion.com/embed/video/x7sz235?queue-enable=false",allowFullScreen:!0}))}),r.a.createElement(p.a,{id:"goalkicks",style:{textAlign:"center"},fluid:!0,header:"Goal Kicks",description:r.a.createElement("div",{style:{textAlign:"center"},className:"videoWrapper"},r.a.createElement("br",null),r.a.createElement("iframe",{title:"Goal Kicks",frameBorder:"0",width:"640",height:"360",src:"https://www.dailymotion.com/embed/video/x7sz23a?queue-enable=false",allowFullScreen:!0}))}),r.a.createElement(p.a,{id:"punts",style:{textAlign:"center"},fluid:!0,header:"Punts",description:r.a.createElement("div",{style:{textAlign:"center"},className:"videoWrapper"},r.a.createElement("br",null),r.a.createElement("iframe",{title:"Punts",frameBorder:"0",width:"640",height:"360",src:"https://www.dailymotion.com/embed/video/x7sz23b?queue-enable=false",allowFullScreen:!0}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[145,1,2]]]);
//# sourceMappingURL=main.de880bf2.chunk.js.map