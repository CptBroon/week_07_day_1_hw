const Films = ({name, url}) => {
    return (
        <>
            <li>
                <a href={url} className="film-link">{name}</a>
            </li>
        </>
    )
};

export default Films;