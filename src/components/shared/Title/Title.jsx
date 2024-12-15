const Title = ({ title, center = false, id }) => {
    return (
        <h1 className={`text-[2rem] font-bold mb-5 ${center? 'text-center':''}`} id={id}>{title}</h1>
    )
}

export default Title