




// This is the array that will hold the todo list items

let todoInput = [];
//function addtodo
function addTodo(text){
    const todo ={
        text, id: Date.now(),
    };
    
     todoInput.push(todo);
    // console.log(todoInput);
  

}
function actionTodo() {
    

    // select the text input
    const input = document.getElementById('getTodo');
   
    const text = input.value.trim();
  
  if (text !== '' ) {
   
    addTodo(text);
    input.value = '';
    input.focus();
  } 
  
  for(let index = 0;index < todoInput.length;index++){
    if(todoInput[index].text === text  )
       var displayValue= todoInput[index].text;
  }
if(displayValue !== '' && displayValue === text)
   myDisplay(displayValue)

}
function myDisplay(value) {
  var ul = document.createElement("ul.strul");
  var li = document.createElement("li");
  var todoList= document.createElement("p");

  var list = ul.innerText=(li);

  li.innerText = (  todoList.innerText=(value));
  var viewOnsrceen= document.getElementById("displayTodo");
  
 
 viewOnsrceen.appendChild(list);
  
  }

  function clearArray() {
    document.getElementById("displayTodo").innerHTML="";
  
    }