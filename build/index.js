const CAT_URL = 'https://api.thecatapi.com/v1/images/search'
const catContainer = document.getElementById('cat-img')
const generateButton = document.getElementById('btn') 
const loader = document.getElementById('loader')

async function getCatImage(){

    try{
        catContainer.style.display  = 'none'
        loader.style.display = 'flex';
        const response = await fetch(CAT_URL)
        const data = await response.json()
        return data[0].url
    }catch(err){
        console.log(err)
    }
}





generateButton.addEventListener('click', async () => {
 
    const [catImage] = await Promise.all([getCatImage(), new Promise(resolve => setTimeout(resolve, 1000))])
    console.log(catImage)
    if(catImage){
        catContainer.src = catImage
        catContainer.style.display  = 'block'
        catContainer.onload = () => loader.style.display = 'none';
    }
})