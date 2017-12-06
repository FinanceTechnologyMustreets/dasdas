import React,{ Component } from "react";


class ModelTitle extends Component
{
    render()
    {
        return (
            <div className="row using-head__margin"><div className="col col__small_4">
                    <img src="https://uttoken.io/static/media/application@2x.0f1c3051.png 2x," alt=""></img>
                    </div>
                    
                    <div className="col col__small_11">
                    <p className="font-size_large margin_no">Токен легален так же, как подарочная карта в магазине. Токен 
                      — продуктовый токен (оценка теста Хоуи: 20).</p></div>
                      <div className="col col__small_5 col__small-offset-4">
                      <span className="font-size_default margin_no">Подробности о применении токенов читайте или&nbsp;слушайте <span>
                        <span className="tip link_text"><span>Whitepaper</span></span>.</span></span></div></div>
        );
    }
}
export default ModelTitle;


