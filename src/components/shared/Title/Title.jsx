const Title = ({ title, center = false }) => {
    return (
        <h1 className={`text-[2rem] font-bold mb-5 ${center? 'text-center':''}`}>{title}</h1>
    )
}

export default Title