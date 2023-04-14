import { SectionStatistics } from "./SectionStatistics.styled";


export const Statistics = ({ title,  stats  }) => {
    return (
        <SectionStatistics>
            <h2>{title}</h2>
            <ul>
                {stats.map(stat => (
                    <li key={stat.id}><span>{stat.label}</span><span>{ stat.percentage }</span></li>
                ))}
            </ul>
            
        </SectionStatistics>
    );
};



// .statList {
//   display: flex;
//   width: 100%;
//   margin: 0;
//   padding: 0;
//   list-style: none;
// }

// .item {
//   text-align: center;
//   padding: 30px;
//   text-align: center;
// }

// .label {
//   color: white;
//   display: block;
//   text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
// }
// .percentage {
//   color: white;
//   text-shadow: 1px 1px 2px rgb(106, 106, 106), -1px -1px 2px rgb(106, 106, 106);
// }