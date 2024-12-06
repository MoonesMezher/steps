const Extra = ({ xPoint, yPoint, size }) => {
    return (
        <div className={`absolute shadow-md scale-50 md:scale-100 rounded-full ${xPoint} ${yPoint} bg-white ${size} z-1`}/>
    )
}

export default Extra