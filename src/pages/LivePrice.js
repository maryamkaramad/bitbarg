import React from 'react'
import Continer from './../components/Continer/Continer';
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
    const handelget24 = async () => {
        const data = await handelget24hr()
        setInfoCurrencys(data)
    };


    useEffect(() => {
        handelget24();
    }, []);
    return (
        <Continer>
            <Grid container bgcolor={"white"} mt={10} boxShadow={4} borderRadius={"10px"}>
                <Grid item p={6} display={"flex"} flexDirection={"column"} gap={4} width={"100%"}>
                    <Grid container item display={"flex"} alignItems={"flex-start"} gap={4}>
                        <Typography variant='h2'>قیمت لحظه ای</Typography>
                        <Typography> {infoCurrencys.length} ارز دیجیتال</Typography>
                    </Grid>
                    <Grid container item width={"100%"}>
                        <Inputslive infoCurrencys={infoCurrencys} setInfoCurrencys={setInfoCurrencys} setUnit={setUnit} selected={selected} setSelected={setSelected} search={search} setSearch={setSearch} />
                    </Grid>
                    <Grid sx={{ bgcolor: 'rgb(242,242,242)', padding: 2 }} borderRadius={3} mt={6}>
                        <TableHeader />
                    </Grid>
                    <Grid>
                        <TableCurrencylive infoCurrencys={infoCurrencys} favorite={favorite} setfavorit={setfavorit} unit={unit} setInfoCurrencys={setInfoCurrencys} selected={selected} search={search} />
                    </Grid>
                </Grid>
            </Grid>
        </Continer>
    )
}

export default LivePrice