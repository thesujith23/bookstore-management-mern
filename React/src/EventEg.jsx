export function EventEg(){
    function toggle(){
        alert("U Clicked ME")
    }
    return(
        <>
        <button onClick={()=>alert("U CLICKED ME")}>Click Me</button>
        </>
    )
}
