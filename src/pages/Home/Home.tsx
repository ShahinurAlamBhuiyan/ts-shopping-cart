import { useState } from 'react';
import { useQuery } from 'react-query';
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import  AddShoppingCartIcon  from '@material-ui/icons/AddShoppingCart';
import Item from '../../components/Item/Item';
import Cart from '../../components/Cart/Cart';
import { StyledButton, Wrapper } from './Home.styles';
// Types
export type CartItemType = {
  id: number;
  title: string;
  category: string;
  price: number;
  description: string;
  image: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();


const Home = () => {
    const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>("products", getProducts);
  
  const getTotalItems = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartItemType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);
      if(isItemInCart) {
        return prev.map(item => (
          item.id === clickedItem.id ? { ...item, amount: item.amount + 1 } : item
        ));
      };
      return [...prev, { ...clickedItem, amount: 1 }]
    })
  };
  
  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => 
      prev.reduce((ack, item) => {
        if(item.id === id) {
          if(item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        }else{
          return [...ack, item]
        }
      },  [] as CartItemType[])
    );
  };

  if(isLoading) return <LinearProgress />

  if(error) return <div>something went wrong...</div>
  
  return (
    <>
      <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart 
          cartItems={cartItems} 
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
           />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)} >
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
    </>
  );
}

export default Home;