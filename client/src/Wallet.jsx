import server from "./server";

function Wallet({ address, setAddress, balance, setBalance }){
    async function onChange(evt){
        const address = evt.tagret.value;
        setAddress(address);
        if(address){
            const{
                data: { balance },
            } = await server.get(`balance/${address}`);
            setBalance(balance);       
        } else{
            setBalance(0);
        }
    }

    return (
        <div className="container wallet">
            <h1>Your Wallet</h1>
            
            <label>
                <input placeholder="Type an address, for example 0x1" value={addr
                } onChange = {onChange} />
            </label>
        <div className="balance">Balance: {balance} </div>
        </div>
    );
}

export default Wallet;