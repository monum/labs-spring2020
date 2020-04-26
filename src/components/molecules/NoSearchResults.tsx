import React from 'react';
import noResults from '../../images/search/noresults.svg';
import Card from '../atoms/Card';
import styled from '../../styles/theme/Theme';
import { H5 } from '../atoms/Typography';
import TextList from '../atoms/List';
import devices from '../../styles/variables/breakpoints';

interface INoSearchResultsProps {
    header: string;
    alternateOptions: string[];
}

const NoResultsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    padding: 3em;
    width: 100%;
    height: fit-content;
    text-align: left;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 4em;

    @media ${devices.tablet} {
        margin: 0;
        width: 100%;
    }
`

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;

    & img {
        height: 12em;
    }

    @media ${devices.tablet} {
        width: 100%;
        margin-bottom: 3em;
    }
`

const NoSearchResults: React.FC<INoSearchResultsProps> = props => {
    return (
        <Card>
            <NoResultsWrapper>
                <ImageWrapper>
                    <img src={noResults} alt='Sad person that is looking for something but cannot find it'/>
                </ImageWrapper>
                <TextWrapper>
                    <H5> {props.header} </H5>
                    <TextList items={props.alternateOptions}/>
                </TextWrapper>
            </NoResultsWrapper>
        </Card>
    )
}

export default NoSearchResults;