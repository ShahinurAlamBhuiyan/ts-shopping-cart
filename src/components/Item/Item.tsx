import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

// Types
import { CartItemType } from '../../pages/Home/Home';
import { Wrapper, ButtonContainer } from './Item.styles';

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {

    const history = useHistory();

    const truncate = (text: string, n: number) => {
        return text?.length > n ? text.substr(0, n - 1) + " ..." : text;
    }

    const handleDetails = () => {
        history.push(`/details/${item.id}`);
    }

    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{truncate(item.description, 60)}</p>
                <h3>Price: ${item.price}</h3>
            </div>
            <ButtonContainer>
                <Button onClick={handleDetails} variant="contained" color="primary" >Details</Button>
                <Button onClick={() => handleAddToCart(item)} variant="contained" color="secondary" >Add to cart</Button>
            </ButtonContainer>
        </Wrapper>
    )
};

export default Item;