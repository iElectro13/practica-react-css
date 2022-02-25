import Card from './Card'


const Cards = ( {currentItems} ) => {

    const [items, setItems] = useState([])

    async function traerPersonajes(){
        const resp = await fetch('http://hp-api.herokuapp.com/api/characters')
        const data = await resp.json()
        setItems(data)
    }
  
    useEffect(()=>{
      traerPersonajes()
    })


    /*const personajes = [
        {
            name: "Harry Potter",
            house: "Gryffindor",
            image: "http://hp-api.herokuapp.com/images/harry.jpg"
        },
        {
            name: "Hermione Granger",
            house: "Gryffindor",
            image: "http://hp-api.herokuapp.com/images/hermione.jpeg"
        },
        {
            name: 	"Ron Weasley",
            house: "Gryffindor",
            image: "http://hp-api.herokuapp.com/images/ron.jpg"
        },
        {
            name: "Draco Malfoy",
            house: "Slytherin",
            image: "http://hp-api.herokuapp.com/images/draco.jpg"
        }
    ]*/


    return (
        <div className='Cards'>
            {
                currentItems.map(item => (
                <Card name={item.name} house={item.house} image={item.image} colorPelo={item.hairColour}/>
                ))
            }
        </div>
    )
}

export default Cards