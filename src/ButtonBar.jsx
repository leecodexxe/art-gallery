export default function ButtonBar(props) {
    let ArtNum = 0
    return(
        <nav>
            <button value={-5}onClick={props.updateID}>Way Previous</button>
            <button value={-1}onClick={props.updateID}>Previous</button>
            <button value={1} onClick={props.updateID}>Next</button>
            <button value={5} onClick={props.updateID}>Bit Next</button>
            <form>
                <input type="text" id="ArtId" onChange={e=> {
                    return ArtNum = Number(e.target.value)
                    }}/>
                <button type="submit" value={ArtNum} onSubmit={props.updateID}>Go</button>
            </form>
        </nav>
    )
}