let btn = document.querySelector("button");

btn.addEventListener("click", async () =>{
    let fact = await getFact();
    console.log(fact);
    let p = document.querySelector("#fact");
    p.innerText = fact;
});


let url = "https://api.adviceslip.com/advice";

async function getFact()
{
    try{
        let res = await axios.get(url);
        return res.data.slip.advice;
    }catch (e){
        console.log("error - ", e);
        return "no fact !";
    }
}