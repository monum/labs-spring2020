import React from 'react';
import { H5, P } from '../../atoms/typography/Typography';
import { CardWrapper, CardBody, CardImage } from './styled';

interface IImageCardProps {
    imageUrl: string;
    cardTitle?: string;
    cardBody?: string;
}

const ImageCard: React.FC<IImageCardProps> = props => {
    let { imageUrl, cardTitle, cardBody } = props;

    return (
        <CardWrapper>
            <CardImage src={imageUrl}/>
            <CardBody>
                <H5>{cardTitle}</H5>
                <P>{cardBody}</P>
            </CardBody>
        </CardWrapper>
    )
}

export default ImageCard;