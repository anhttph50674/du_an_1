export const danhsach = async ()=> {
  try {
    const re= await fetch(`http://localhost:3000/users`)
    const data= re.json()
    return data
  } catch (error) {
    alert("loi")
  }
}
export const xoa = async (id)=> {
  try {
    const re= await fetch(`http://localhost:3000/users/${id}`,
      {method: "delete"}
    )
  } catch (error) {
    alert("loi")
  }
}
