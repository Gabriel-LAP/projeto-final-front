// import styled from 'styled-components';
// import Button from '../Button';
// import { colors } from '../../colors';
// import { InfoContainer } from '../Info';
// import { Orders } from '../../types/Orders';
// import { useOrders } from '../../Hooks';
// import { useEffect } from 'react';

// type OrderContainerProps = {
//   display?: string;
// };

// const OrderContainer = styled.div<OrderContainerProps>`
//   display: 'flex';
//   flex-direction: column;
//   align-items: center;
//   gap: 4rem;
//   width: 100%;
//   height: 100%;
//   padding: 3rem 0 0 0;

//   .buttonWrapper {
//     display: flex;
//     justify-content: space-between;
//     width: 50rem;

// `;

// const OrderPanel = ({ order }: { order: Orders }) => {
// //   const { setDisplay, setDisplayOC, DisplayOC, display } = useOrders();
//   //   console.log(selectedOrder);

//   //   const [DisplayOC, setDisplayOC] = useState('none');

//   const handleClick = () => {
//     setDisplayOC('none');
//     setDisplay('grid');
//   };

//   useEffect(() => {
//     display;
//     DisplayOC;
//   }, [display, DisplayOC]);

//   return (
//     <OrderContainer display={DisplayOC}>
//       <div className='buttonWrapper'>
//         <Button
//           type='button'
//           onClick={() => handleClick()}
//           text='Fechar'
//           width='200px'
//           height='40px'
//           backgroundcolor={colors.purple}
//           activebgcolor={colors.blue}
//           color={colors.ice}
//           boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
//         />
//         <Button
//           type='button'
//           text='Editar'
//           width='200px'
//           height='40px'
//           backgroundcolor={colors.purple}
//           activebgcolor={colors.blue}
//           color={colors.ice}
//           boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
//         />
//         <Button
//           type='submit'
//           text='Salvar'
//           width='200px'
//           height='40px'
//           backgroundcolor={colors.purple}
//           activebgcolor={colors.blue}
//           color={colors.ice}
//           boxshadow='0px 5px 10px rgba(0, 0, 0, 60)'
//         />
//       </div>

//       <InfoContainer height='20rem'>
//         <span>Aparelho: {order.device}</span>
//         <span>Dono: {order.owner.name}</span>
//         <span>Defeito: {order.faulty}</span>
//         <span>Peça: {order.parts}</span>
//         <span>Preço: {order.price}</span>
//         <span>Garantia: {order.guarantee}</span>
//       </InfoContainer>
//     </OrderContainer>
//   );
// };

// export default OrderPanel;
