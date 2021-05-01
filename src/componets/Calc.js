import React, { useState } from 'react'
import Buton from './Buton';
import './Calc.css';
//import Content from './Contentdisplay';


const Calc = () => {

    
const [view,setView] = useState('');
const [operator,setOp] = useState('');
const [op2,setOp2] =useState('');
const [answer,setAnswer]=useState('');
    const onClick =(e)=>{
    //console.log(e.target.value);
       if (e.target.value ==='.'||e.target.value ==='0'|| e.target.value === '1'||e.target.value === '2'||e.target.value === '3'||e.target.value === '4'||e.target.value === '5'||e.target.value === '6'||e.target.value === '7'||e.target.value === '8'||e.target.value === '9') {

        if (operator === '' ){
            setView(view+(e.target.value)); 
             
        } else {
           
            setOp2(op2+(e.target.value))
        }

        
       }
       else if(e.target.value === "AC"){
        setView('');
        setOp('');
        setOp2('');
        setAnswer('');
       }
       else if(e.target.value ==="+" ||e.target.value ==="-" ||e.target.value ==="*" ||e.target.value ==="/"){
                setOp(e.target.value);
             
       }
      
    }
    const Countit =()=>{
        let num1 =parseFloat(view);
        let num2 = parseFloat(op2);
        if(operator==="+"){let ans = num1+num2; setAnswer(` ${''}  = ${ans}`); console.log(ans);}
        else if (operator ==="-" ){ let ans= num1-num2;setAnswer( ` ${' '} = ${ans}`); console.log(ans);}
        else if (operator ==="*" ){ let ans= num1*num2;setAnswer(` ${' '} = ${ans}`); console.log(ans);}
        else if (operator ==="/" ){ let ans= num1/num2;setAnswer(` ${' '} = ${ans}`); console.log(ans);}
        else{
            console.log('nothing')
        }


    }
    return (
        <div className='calculator'>
            <h1>Simple Calculator</h1>
            <table>
                <tbody>
                    <tr>
                        <td colSpan="4"><div className="ans"> <div>{view}</div><div>{operator}</div><div>{op2}</div>
                            
                            <div>{answer}</div>

                        </div>
                        </td>
                     
                    </tr>
                    <tr>
                        <td><Buton  value="AC" onClick={onClick}/></td>
                        <td><Buton  value="C" onClick={onClick}/></td>
                        <td><Buton  value="/" onClick={onClick}/></td>
                        <td><Buton  value="*" onClick={onClick}/></td>
                    </tr>
                    <tr>
                        <td><Buton  value="1" onClick={onClick}/></td>
                        <td><Buton  value="2" onClick={onClick}/></td>
                        <td><Buton  value="3"  onClick={onClick}/></td>
                        <td ><Buton  value="-" onClick={onClick}/></td>
                    </tr>
                    <tr>
                        <td><Buton  value="4" onClick={onClick}/></td>
                        <td><Buton  value="5" onClick={onClick}/></td>
                        <td><Buton  value="6" onClick={onClick}/></td>
                        <td ><Buton  value="+" onClick={onClick}/></td>
                    </tr>
                    <tr>
                        <td><Buton  value="7" onClick={onClick}/></td>
                        <td><Buton  value="8" onClick={onClick} /></td>
                        <td><Buton  value="9" onClick={onClick}/></td>
                        <td rowSpan='2'><Buton  value="=" onClick={Countit} /></td>
                    </tr>
                    <tr>
                      
                        <td colSpan='2'><Buton  value="0" onClick={onClick}/></td>
                        <td ><Buton  value="." onClick={onClick} /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Calc
