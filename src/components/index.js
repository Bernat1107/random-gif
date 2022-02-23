export default function SchoolLabel
( { schoolName = 'Salesians', schoolDirection = 'C migdia'}) {

    const [backgroundColor, setBackgroundColor ] = useState 

    return (

        <div>
        <button>Click me!</button>
        <h1> {schoolName} </h1>
        <p> {schoolDirection} </p>
        </div>

    )


}