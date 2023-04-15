import PropTypes from 'prop-types';
import { SectionStatistics } from "./SectionStatistics.styled";
import { Title } from "./Title.styled";
import { List } from "./List.styled";
import { Item } from "./Item.styled";
import { Label } from "./Label.styled";
import { Percentage } from "./Percentage.styled";


export const Statistics = ({title, data  }) => {
    return (
        <SectionStatistics>
            {{ title }.length > 0 && <Title>{title}</Title>}
            <List>
                {data.map(stat => (
                    <Item key={stat.id}><Label>{stat.label}</Label><Percentage>{ stat.percentage }</Percentage></Item>
                ))}
            </List>
            
        </SectionStatistics>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })).isRequired,
};
