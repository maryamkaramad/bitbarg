import React from 'react'

import { Grid, Typography } from '@mui/material';
import { handelget24hr } from '../axios/api';
import { useEffect } from 'react';
import { useState } from 'react';
import Inputslive from '../components/pricelive/Inputslive';
import TableHeader from '../components/pricelive//TableHeader';
import TableCurrencylive from '../components/pricelive/TableCurrencylive';



const LivePrice = () => {
    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(false);
    const [infoCurrencys, setInfoCurrencys] = useState([])
    const [favorite, setfavorit] = useState(false)
    const [unit, setUnit] = useState("تومان")
    const handlesortmor = () => {
        const t = infoCurrencys?.sort((a, b) => a.price - b.price);
        setInfoCurrencys(t);
    }

    const handlesortles = () => {
        const t = infoCurrencys?.sort((a, b) => a.price - b.price);
        setInfoCurrencys(t);
    }
    const handelget24 = async () => {
        const data = await handelget24hr()
        setInfoCurrencys(data)
    };
    useEffect(() => {
        handelget24();
        handlesortmor();
        handlesortles();

    }, []);


    return (
        <Grid container xs={12} p={5} >
            <Grid item p={2} display={"flex"} my={2}>
                <Typography variant='h2'>قیمت لحظه ای</Typography>
                <Typography> {infoCurrencys.length} ارز دیجیتال</Typography></Grid>



            <Inputslive infoCurrencys={infoCurrencys} setInfoCurrencys={setInfoCurrencys} setUnit={setUnit} selected={selected} setSelected={setSelected} search={search} setSearch={setSearch} handlesortmor={handlesortmor} handlesortles={handlesortles} />


            <TableHeader />


            <TableCurrencylive infoCurrencys={infoCurrencys} favorite={favorite} setfavorit={setfavorit} unit={unit} setInfoCurrencys={setInfoCurrencys} selected={selected} search={search} />



        </Grid>
    )
}

export default LivePrice