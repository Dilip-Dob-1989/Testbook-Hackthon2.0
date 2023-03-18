const item=document.querySelector("#item");
const toDoBox=document.querySelector("#todo-box");

item.addEventListener(
    "keyup",
    function(event){
       if(event.key=="Enter"){
        addToDo(this.value);
        this.value="";
       }
    }
)

const addToDo=(item)=>{
    const listItem=document.createElement("li");
    listItem.innerHTML=`
    ${item}
    <i class="fa-solid fa-x"></i>
    `;

    listItem.querySelector("i").addEventListener(
        "click",
        function(){
            listItem.remove();
        }
    )

    toDoBox.appendChild(listItem)

}