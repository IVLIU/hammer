// (()=>{
//     //let target=document.querySelector('.circle');
//     document/addEventListener('mousemove',e=>{
//         let target=document.querySelector('.circle');
//         target.style.left=e.clientX+'px';
//         target.style.top=e.clientY+'px';
//     })
// })();

(()=>{
    let DragDrop=()=>{
        let dragging=null;
        let diffX=0;
        let diffY=0;
        let handleEvent=event=>{
            let target=event.target;
            switch(event.type){
                case 'mousedown':
                    dragging=target;
                    diffX=event.clientX-target.offsetLeft;
                    diffY=event.clientY-target.offsetTop;
                    break;
                case 'mousemove':
                    dragging.style.left=(event.clientX-diffX)+'px';
                    dragging.style.top=(event.clientY-diffY)+'px';
                    break;
                case 'mouseup':
                    dragging=null;
                    break;
            }
        }
        return {
            enable:()=>{
                document.addEventListener('mousedown',handleEvent),
                document.addEventListener('mousemove',handleEvent),
                document.addEventListener('mouseup',handleEvent)
            }
        }
    }
    DragDrop().enable();
})();
