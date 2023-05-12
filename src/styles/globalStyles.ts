import { createGlobalStyle, DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle<{ theme: DefaultTheme }>`

*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Poppins, sans-serif;
}

button{
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    cursor: pointer;
}

a, li, ul{
    text-decoration: none;
}

.active-modal {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-width: 684px;
        background: ${({ theme }) => theme.colors.backgroundLight};
        border-radius: 5px;
        margin: 25% auto;
        padding: 0;
  }

  .active-modal-delete {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 604px;
        height: 80px;
        background: ${({ theme }) => theme.colors.backgroundLight};
        border-radius: 5px;
        margin: 25% auto;
        padding: 0;
  }

  .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
  }


`