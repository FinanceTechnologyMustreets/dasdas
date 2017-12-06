export const select =(menu) =>{
    alert ('Now car is: '+ menu.discsas);
    return{
        type:'CAR_SELECTED',
        payload:menu,
    }
};