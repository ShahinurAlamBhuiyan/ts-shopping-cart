
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { CartItemType } from '../Home/Home';
import { Button, LinearProgress } from '@material-ui/core';
import { Wrapper, Content } from './ProductDetails.styles';

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

type QuizParams = {
    productId: string;
}

const ProductDetails = () => {
    const { productId } = useParams<QuizParams>();
    const { data, isLoading } = useQuery<CartItemType[]>("products", getProducts);

    if (isLoading) return <LinearProgress />

    const product = data?.find(({ id }) => id === Number(productId));

    return (
        <Wrapper >
            <Content>
                <div>
                    <img src={product?.image} alt={product?.title} />
                    <>
                        <h3>{product?.title}</h3>
                        <p>{product?.description}</p>
                        <h3>Price: ${product?.price}</h3>
                    </>
                </div>
                <Button variant="contained" color="secondary" >Add to cart</Button>
            </Content>
        </Wrapper>
    );
};

export default ProductDetails;

// onClick={() => handleAddToCart(item)}