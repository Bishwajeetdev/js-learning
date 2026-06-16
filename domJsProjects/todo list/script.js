const form = document.querySelector('form');

const allTask = document.querySelector('#allTask');
const input =document.querySelector('input');


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    const text = input.value.trim();

    if(text==''){
        return
    }

    const parent = document.createElement('div');
    const task = document.createElement('span');

    parent.style.border="2px solid white"
    parent.style.margin="10px 20px"
    parent.style.padding="10px 20px"


    task.textContent =text;
     task.style.marginRight ='50px'

    const deleteBtn = document.createElement('button')
    deleteBtn.textContent='Delete'
    
    deleteBtn.style.widows ='30px'

    
    const doneBtn = document.createElement('button')
    doneBtn.textContent='Done';
 doneBtn.style.widows ='30px'
    doneBtn.style.marginRight ='50px'


    parent.append(task,doneBtn,deleteBtn)

allTask.append(parent);

deleteBtn.addEventListener('click',()=>{
    parent.remove();
})


doneBtn.addEventListener('click',()=>{
    task.style.textDecoration='line-through';
    task.style.color='grey';
})

form.reset();

})