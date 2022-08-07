let firstday
let today=new Date()
function genCelender(){
    
    let parent=document.getElementById("contain")
    while(parent.firstChild!=null){
      parent.removeChild(parent.firstChild)
    }
    firstday =new Date(document.getElementById("monselector").value)
    var startDay=firstday.getDay()
    //console.log(firstday.getDay())
    table=document.getElementById("contain")
    let last=document.createElement('tr')
    table.appendChild(last)
    for(let i=0;i<startDay;i++){
      let tmp=document.createElement('td')
      tmp.innerHTML ="   "
      last.appendChild(tmp)
    }
    for(let i=1;i<=bigSmallMonth[firstday.getMonth()];i++){
      if((i+startDay-1)%7==0){
       
        last=table.appendChild(document.createElement('tr'))
      }
      
      let tmpparent=document.createElement('td')
      tmpparent.width="14.4%"
      tmp=document.createElement('button')
      tmpparent.appendChild(tmp)
      tmp.style="padding: 0;      border: none;    background:none; "
      console.log(today.getDate())
      if(i==today.getDate()){
        let child=document.createElement("u")
        tmp.id+="under-line"
        tmp.style="padding: 0;      border: none;    background:none;  background-color:#c7d4f2"
        tmp.innerHTML="<u>"+i<10?"&nbsp;"+String(i)+"&nbsp;":String(i)+"</u>"
        // tmp.appendChild(child)
        console.log(today.getDate()+"YAYA")
      }else{
        
        tmp.innerHTML =i<10?"&nbsp;"+String(i)+"&nbsp;":String(i)
      }
      
      tmp.id=firstday.getFullYear()+"-"+firstday.getMonth()+"-"+String(i)
      last.appendChild(tmpparent)
      tmp.addEventListener("click",()=>getDateEvent(event))
    }
    document.getElementById("title").innerText=firstday.getMonth()+1
    document.getElementById("showEvent").innerText=showMonthEvent()
  }
function showMonthEvent(){
  bigSmallMonth=[31,28,31,30,31,30,31,31,30,31,30,31]
  let thisMonth=tempDay.getMonth()
  let monthEvent=""
  for(let j=1;j<=bigSmallMonth[thisMonth];j++){
    dateEvent=localStorage.getItem(firstday.getFullYear()+"-"+firstday.getMonth()+"-"+j)
    //console.log(firstday.getFullYear()+"-"+((firstday.getMonth()+1)<10?'0'+String(firstday.getMonth()+1):String(firstday.getMonth()+1))+"-"+((j)<10?'0'+String(j):String(j)))
    //console.log(dateEvent);
    if(dateEvent!=null){
      monthEvent+=firstday.getMonth()+1+"/"+j+" : "+dateEvent+"\n"
    }
  }
  return monthEvent
}
function getDateEvent(event){
  if(nowSelectID==event.currentTarget.id){
    nowSelectID=null
    event.currentTarget.style="border-radius: 35%;padding: 0 ;      border: none;      background: none;ont-color:black;"
    document.getElementById("showEvent").innerText=showMonthEvent()

  }else{
  // console.log(event.currentTarget.id);
  if(nowSelectID!=null){
    lastSelectID=nowSelectID
  }
  
  nowSelectID=event.currentTarget.id
  if(lastSelectID!=null&&document.getElementById(lastSelectID)){
    document.getElementById(lastSelectID).style="border-radius: 35%;padding: 0;      border: none;      background: none;ont-color:black;"
   
  }
  
  // event.currentTarget.style="padding: 0;      border: none; bg-color=blue;"
  event.currentTarget.style="border-radius: 35%;background-color: #03c6fc;padding: 0;      border: none; color:white;"
  event.currentTarget.class="btn btn-primary"
  console.log(event.currentTarget.class)
  document.getElementById(event.currentTarget.id).class="btn btn-primary"
  if(localStorage.getItem(nowSelectID)==null){
    document.getElementById("showEvent").innerText=""
  }else{
    document.getElementById("showEvent").innerText=localStorage.getItem(nowSelectID)
  }
}
}
function setDateEvent(){
  if(eventInput.value!=""){
    if(nowSelectID!=null){
      localStorage.setItem(nowSelectID,eventInput.value)
      document.getElementById("showEvent").innerText=localStorage.getItem(nowSelectID)
    }
   
  }
}
  