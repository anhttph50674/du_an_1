
import { danhsach, xoa } from "./service.js";
  
const app ={
  danhsach: async function(){
    const data=await  danhsach() 
        const tr= data?.map((item,index)=>{
          return`
           <tr>
              <th scope="row">${++index}</th>
              <td>${item.username}</td>
              <td><img width="200" height="200" src="${item.avatar}" alt=""></td>
              <td>${item.age}</td>
              <td>${item.note}</td>
              <td><button type="button" data-id="${item.id}" class="btn xoa btn-danger">Danger</button></td>
            </tr>
          `
        }).join("")
        document.querySelector("tbody").innerHTML = tr;
        this.hDelete()
  },
  hDelete: function(){
document.querySelectorAll(".xoa").forEach((item)=>{
  item.addEventListener("click", async ()=>{
    const id = item.getAttribute("data-id")
    if(window.confirm("ban co muon xoa k?")){
      await xoa(id);
    }
  })
})
  },
    start: function(){
      this.danhsach()
        
    }
}

app.start();