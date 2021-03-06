import React from 'react'
import {connect} from 'react-redux'
import {setCountry} from '../../redux/actions/search'

function CountrySelect({setCountry}) {
    const onChange = e => {
        setCountry(e.target.value);
    }
    return (
        <select onChange={onChange} defaultValue="in">
            <option value="ar">Argentina</option>
            <option value="au">Australia</option>
            <option value="at">Austria</option>
            <option value="be">Belgium</option>
            <option value="br">Brazil</option>
            <option value="bg">Bulgaria</option>
            <option value="ca">Canada</option>
            <option value="cn">China</option>
            <option value="co">Colombia</option>
            <option value="cu">Cuba</option>
            <option value="cz">Czech Republic</option>
            <option value="eg">Egypt</option>
            <option value="fr">France</option>
            <option value="de">Germany</option>
            <option value="gr">Greece</option>
            <option value="hk">Hong kong</option>
            <option value="hu">Hungary</option>
            <option value="in">India</option>
            <option value="id">Indonesia</option>
            <option value="ie">Israel</option>
            <option value="it">Italy</option>
            <option value="jp">Japan</option>
            <option value="lv">Latvia</option>
            <option value="lt">Lithuania</option>
            <option value="my">Malaysia</option>
            <option value="mx">Mexico</option>
            <option value="ma">Morocco</option>
            <option value="nl">Netherlands</option>
            <option value="nz">New Zealand</option>
            <option value="ng">Nigeria</option>
            <option value="no">Norway</option>
            <option value="ph">Philippins</option>
            <option value="pl">Poland</option>
            <option value="pt">Portgul</option>
            <option value="ro">Romania</option>
            <option value="ru">Russia</option>
            <option value="sa">Saudi Arab</option>
            <option value="rs">Serbia</option>
            <option value="sg">Singapore</option>
            <option value="sk">Slovakia</option>
            <option value="si">Slovenia</option>
            <option value="za">South Africa</option>
            <option value="kr">South Korea</option>
            <option value="se">Sweden</option>
            <option value="ch">Switzerland</option>
            <option value="tw">Taiwan</option>
            <option value="th">Thailand</option>
            <option value="tr">Turkey</option>
            <option value="ae">UAE</option>
            <option value="ua">Ukraine</option>
            <option value="gb">United Kingdom</option>
            <option value="us">United States</option>
            <option value="ve">Venuzuela</option>
        </select>
    )
}
export default connect(null,{setCountry})(CountrySelect)