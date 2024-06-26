'use strict'

const btn1=document.querySelector('.btn1')
const btn2=document.querySelector('.btn2')
const btn3=document.querySelector('.btn3')
const allBtn=document.querySelectorAll('.btn')
const listContainer=document.querySelector('.content-list')

const btnContainer=document.querySelector('menu')
// const allBtn
const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ]
];

  let contentList=' '



btnContainer.addEventListener('click',(e)=>{
  // console.log(e.target.className);
  if(e.target.className==='btn-menu')return

  allBtn.forEach((btn,i)=>{btn.classList.remove('active') ;
    btn.setAttribute('num',i)
    // console.log(btn); 
  })
 
  e.target.className='active'
  const clickedBtn=e.target.getAttribute('num')

let contentList=' '
listContainer.innerHTML=''
content[parseFloat(clickedBtn)].forEach(item=>{
  // console.log(item);
  
 contentList += `<li>${item}</li>`
//  console.log(contentList);
 
})
listContainer.innerHTML=contentList

})