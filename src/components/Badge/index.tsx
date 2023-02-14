import './Badge.css';

const Badge = (title : string) => {
    return <div className='badge'>
        <p className='title'>{title}</p>
    </div>
}

export default Badge;