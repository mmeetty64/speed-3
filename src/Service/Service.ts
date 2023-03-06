import Web3 from "web3";
import ABI from "./ABI.json"

class Service{
    web3 = new Web3('http://localhost:8545');
    contract = new this.web3.eth.Contract(ABI as any, "0x6C654C76ef06cE4146F2724F451DA6fEbe09C6D5")
    Owner = "0x9072437Ac1512c86fE19256f21136667878B5278"
    
    async Auth (login: string, password: string, address: string){
        try {
            return await this.contract.methods.auth(login, password).call({from: address})
        } catch (error) {
            console.log(error);      
        }
    }
    async Reg(login: string, password: string, address: string){
        try {
            return await this.contract.methods.reg(login, password).send({from: address})
        } catch (error) {
            console.log(error);      
        } 
    }
    async timeStart(){
        try {
            return await this.contract.methods.timeStart().call({from: this.Owner})
        } catch (error) {
            console.log(error);
        }
    }
    async systemTime(){
        try {
            return await this.contract.methods.systemTime().call({from: this.Owner})            
        } catch (error) {
            console.log(error)
        }
    }
    async reqWhiteList(name: string, address: string){
        try {
            return await this.contract.methods.reqWhiteList(name).send({from: address})
        } catch (error) {
            console.log(error)
        }
    }
    async applyReqWL(id: number, answer: boolean, address: string){
        try {
            return await this.contract.methods.applyReqWL(id, answer).send({from: address});            
        } catch (error) {
            console.log(error)
        }
    }
    async viewReqWL(address: string){
        try {
            return await this.contract.methods.viewReqWL().call({from: address})
        } catch (error) {
            console.log(error);
        }
    }
    async privateSale(amount: number, address: string, tokenPrice: number){
        try{
            return await this.contract.methods.privateSale(amount).send({from: address, value: amount*tokenPrice})
        }catch (error) {
            console.log(error)
        }
    }
    async viewTokenPrice(address: string){
        try {
            return await this.contract.methods.viewTokenPrice().call({from: address})
        } catch (error) {
            console.log(error)
        }
    }
    async publicSale(amount: number, address: string, tokenPrice: number){
        try{
            return await this.contract.methods.publicSale(amount).send({from: address, value: amount*tokenPrice})
        }catch (error) {
            console.log(error)
        }
    }
}
export default new Service()