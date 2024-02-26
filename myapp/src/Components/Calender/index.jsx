import './index.css';

export default function Category({ title, workTime, workDate, bgCategory }) {
    return (
        <div className='category-background'>
            {bgCategory}
            <div className='content'>
                <p>{title}</p>
                <h1>{workTime}</h1>
                <span>{workDate}</span>
            </div>
        </div>
    );
}
