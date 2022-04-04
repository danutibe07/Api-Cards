const Home = () => {
    const cards = ([
    {id: "1",title: "Steam",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "2",title: "Apple Universal",currencies: ["usd ", "gbp ", "eur ", "aud ", "cad ", "nzd ", "chf "],},
    {id: "3",title: "iTunes",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","grc ","prt ","nld ","bel ","fin ","sgd ","ger ","aut ","fra ","itl ","esp ", "irl ","hkd ","dmk ","pln ","rub ","tur ","brl ","nok ","swe ","zar ","mxn ","twd ","jpy ",],},
    {id: "4",title: "Google Play",currencies: ["usd ","gbp ","eur","aud ","cad ","nzd ","chf ","sgd ","jpy ","brl ","pln ", "mxn ","zar ","hkd ","idr ","thb ","myr ","tur ","krw "],}, 
    {id: "5",title: "Amazon",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ", ],},
    {id: "6",title: "Ebay",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ", "chf ","brl ","pol ","hkd ",],},
    {id: "7",title: "Sephora",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "8",title: "American Express",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "9",title: "Vanilla",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "10",title: "Walmart",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "11",title: "Nordstrom",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "12",title: "Target",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "13",title: "Offgamers",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "14",title: "Xbox",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "15",title: "Macy’s",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "16",title: "Razer Gold",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "17",title: "JCPenny",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "18",title: "Foot Locker",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "19",title: "Nike",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "20",title: "Visa",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "21",title: "Target Visa",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "22",title: "Walmart Visa",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "23",title: "Greendot",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "24",title: "Best Buy ",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "25",title: "Play Station",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",], },
    {id: "26",title: "Home Depot",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd "],},
    {id: "27",title: "Starbucks",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ", "chf ","brl ","pol ","hkd ",],},
    {id: "28",title: "Netflix",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol","hkd ",],},
    {id: "29",title: "Happy",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "30",title: "Lowe’s",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",], },
    {id: "31",title: "Gamestop",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "32",title: "Uber",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "33",title: "Adiddas",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "34",title: "G2A",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "35",title: "Hotels",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    {id: "36",title: "Finish Line",currencies: ["usd ","gbp ","eur ","aud ","cad ","nzd ","chf ","brl ","pol ","hkd ",],},
    ]);
    return (
    <div className="home">
        {cards.map((card)=>(
            <div className="card-preview" key = {card.id}>
                <h2 className="info-1">{card.title}</h2>
                <h3 className="info-2">{card.currencies}</h3>
            </div>
        ))}
    </div>
    );};
export default Home;
