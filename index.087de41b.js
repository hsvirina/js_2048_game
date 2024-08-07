var t={};class e{static Status={idle:"idle",playing:"playing",win:"win",lose:"lose"};constructor(t=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.status=e.Status.idle,this.initialState=t,this.state=JSON.parse(JSON.stringify(t)),this.score=0}moveLeft(){if(this.getStatus()===e.Status.playing){let t=[];for(let e=0;e<this.state.length;e++){let s=this.state[e];s=this.move(s),t[e]=s}this.checkPossibilityOfMerging(t)&&(this.state=[...t],this.checkIsWin(),this.putNewGameNumber()),this.checkStatusLose(t)}}moveRight(){if(this.getStatus()===e.Status.playing){let t=[];for(let e=0;e<this.state.length;e++){let s=[...this.state[e]];s.reverse(),(s=this.move(s)).reverse(),t[e]=s}this.checkPossibilityOfMerging(t)&&(this.state=[...t],this.checkIsWin(),this.putNewGameNumber()),this.checkStatusLose(t)}}moveUp(){if(this.getStatus()===e.Status.playing){let t=[void 0,void 0,void 0,void 0].map(()=>[,,,,].fill(0));for(let e=0;e<this.state.length;e++){let s=[this.state[0][e],this.state[1][e],this.state[2][e],this.state[3][e]];s=this.move(s);for(let i=0;i<this.state.length;i++)t[i][e]=s[i]}this.checkPossibilityOfMerging(t)&&(this.state=[...t],this.checkIsWin(),this.putNewGameNumber()),this.checkStatusLose(t)}}moveDown(){if(this.getStatus()===e.Status.playing){let t=[void 0,void 0,void 0,void 0].map(()=>[,,,,].fill(0));for(let e=0;e<this.state.length;e++){let s=[this.state[0][e],this.state[1][e],this.state[2][e],this.state[3][e]].reverse();s=(s=this.move(s)).reverse();for(let i=0;i<this.state.length;i++)t[i][e]=s[i]}this.checkPossibilityOfMerging(t)&&(this.state=[...t],this.checkIsWin(),this.putNewGameNumber()),this.checkStatusLose(t)}}getScore(){return this.score}getState(){return this.state}getStatus(){return this.status}start(){this.status=e.Status.playing,this.putNewGameNumber(),this.putNewGameNumber()}restart(){this.score=0,this.status=e.Status.idle,this.state=JSON.parse(JSON.stringify(this.initialState))}checkIsWin(){for(let t=0;t<this.state.length;t++)for(let s=0;s<this.state[t].length;s++)if(2048===this.state[t][s]){this.status=e.Status.win;return}}checkPossibilityOfMerging(t){return JSON.stringify(this.state)!==JSON.stringify(t)}checkPossibilityOfMoving(){let t=this.state.length;for(let e=0;e<t;e++)for(let s=0;s<t;s++)if(s<t-1&&this.state[e][s]===this.state[e][s+1]||e<t-1&&this.state[e][s]===this.state[e+1][s])return!0;return!1}checkStatusLose(){0!==this.getEmptyCells().length||this.checkPossibilityOfMoving()||(this.status=e.Status.lose)}move(t){let e=t.filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,e[t+1]=0,this.score+=e[t]);let s=e.filter(t=>0!==t);for(;s.length<4;)s.push(0);return s}getEmptyCells(){let t=[];for(let e=0;e<this.state.length;e++)for(let s=0;s<this.state[e].length;s++)0===this.state[e][s]&&t.push([e,s]);return t}putNewGameNumber(){let t=this.getEmptyCells();if(0!==t.length){let e=Math.floor(Math.random()*t.length),s=t[e][0],i=t[e][1];this.state[s][i]=Math.random()>=.9?4:2}}}const s=new(t=e),i=document.querySelector(".start"),a=document.querySelector(".game-score"),h=document.querySelector(".message-start"),r=document.querySelector(".message-win"),l=document.querySelector(".message-lose");function o(){let t=[...document.querySelectorAll(".field-row")].map(t=>[...t.children]);s.getState().forEach((e,s)=>{e.forEach((e,i)=>{let a=t[s][i];a.className=e?`field-cell field-cell--${e}`:"field-cell",a.innerHTML=e||""})})}i.addEventListener("click",t=>{i.classList.contains("start")?(i.classList.replace("start","restart"),i.textContent="Restart",h.classList.add("hidden"),s.start(),o()):(i.classList.replace("restart","start"),i.textContent="Start",h.classList.remove("hidden"),r.classList.add("hidden"),l.classList.add("hidden"),s.restart(),o(),a.textContent=s.getScore())}),document.addEventListener("keydown",e=>{switch(e.key){case"ArrowRight":s.moveRight();break;case"ArrowLeft":s.moveLeft();break;case"ArrowUp":s.moveUp();break;case"ArrowDown":s.moveDown()}s.getStatus()===t.Status.lose&&l.classList.remove("hidden"),s.getStatus()===t.Status.win&&r.classList.remove("hidden"),o(),a.textContent=s.getScore()});
//# sourceMappingURL=index.087de41b.js.map
