// imported components
import { Backdrop, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

// imported services
import { client } from '../axios';

// imported assets
import BadgeIcon from '@mui/icons-material/Badge';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CommentIcon from '@mui/icons-material/Comment';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

export default function EvaluateOptions() {
    const [aboutRole, setAboutRole] = useState("")
    const [aboutProblem, setAboutProblem] = useState("")
    const [aboutList, setAboutList] = useState("")
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visibilityCards, setVisibilityCards] = useState({
        role: true,
        problem: false,
        list: false,
        prompt: false,
        generation: false
    })

    const jsonString = JSON.stringify(response, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const params = {
        model: "gpt-3.5-turbo-1106",
        messages: prompt,
        response_format: { "type": "json_object" }
    }

    function generatePrompt() {
        let promptPergunta = "Eu, como um " + aboutRole + ", preciso " + aboutProblem + ", quais poderiam ser as melhores visualizações de dados para isso?"
        setPrompt([
            {
                "role": "system",
                "content": "Você como um assistente no processo de design de visualização de dados, deverá avaliar as possibilidades de resposta e responder com uma classificação de qual seria a mais indicada em formato JSON"
            },
            {
                "role": "user",
                "content": "Cada item da lista de sugestões deverá receber uma posição sendo a primeira a melhor e responder no seguinte formato: {/tipo: [tipo da visualuação de dados], nota: [uma nota de 1-5 para a visualização], motivo: [descrever o motivo da nota em relação as demais opções] }/"
            },
            {
                "role": "user",
                "content": 'pergunta: ' + promptPergunta + ', avalie as seguintes opções: ' + aboutList
            }
        ]
        )
    }

    function executePrompt() {
        setLoading(true)
        client.post(
            'https://api.openai.com/v1/chat/completions',
            params
        ).then(result => {
            setResponse(result.data.choices[0].message.content)
            setLoading(false)
        }
        ).catch(
            err => console.log(err)
        )
    }

    return (
        <Grid container item gap={2} flexDirection={'column'} justifyContent={'flex-start'} xl={8} md={12}>

            <Typography variant='h1'>
                Avaliar opções
            </Typography>

            <Grid container item flexDirection='row' p={4} className='backgroundWhite borderRadius shadow'>

                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.role ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: true, problem: false, list: false, prompt: false, generation: false })}>
                    <BadgeIcon />
                    <Typography>Cargo</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.problem ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: true, list: false, prompt: false, generation: false })}>
                    <CrisisAlertIcon />
                    <Typography>Objetivo</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.list ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, list: true, prompt: false, generation: false })}>
                    <ListAltIcon />
                    <Typography>Possibilidades</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.prompt ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, list: false, prompt: true, generation: false })}>
                    <CommentIcon />
                    <Typography>Comando</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.generation ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, list: false, prompt: false, generation: true })}>
                    <QuestionAnswerIcon />
                    <Typography>Resultados</Typography>
                </Grid>

            </Grid>

            <Grid sx={{ display: visibilityCards.role ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Sobre o seu trabalho</Typography>
                <Typography>Descreva o seu cargo ou função</Typography>
                <Typography variant='caption'>Ex.: gerente de marketing de uma loja de móveis</Typography>
                <TextField
                    multiline
                    onChange={(e) => setAboutRole(e.target.value)}
                    placeholder='Eu, como um ...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutRole("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => setVisibilityCards({ ...visibilityCards, problem: true, role: false })}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.problem ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Sobre o objetivo</Typography>
                <Typography>Descreva o seu problema a ser resolvido na visualização</Typography>
                <Typography variant='caption'>Ex.: apresentar a quantidade de venda de sofás por loja no último semestre.</Typography>
                <TextField
                    multiline
                    onChange={(e) => setAboutProblem(e.target.value)}
                    placeholder='Preciso apresentar os dados para...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutProblem("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => setVisibilityCards({ ...visibilityCards, list: true, problem: false })}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.list ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Lista de possibilidades</Typography>
                <Typography>Adicione a lista de ideias de visualização dados para o problema, coloque o nome da visualização e as informações que achar necessário</Typography>
                <Typography variant='caption'>Ex.: mapa de calor com o mapa geográfico, gráfico de linhas com cada loja sendo uma linha, gráfico de barras com cada loja sendo uma barra</Typography>
                <TextField
                    multiline
                    onChange={(e) => setAboutList(e.target.value)}
                    placeholder='Gráfico de linha, gráfico de barras, ...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutList("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => { setVisibilityCards({ ...visibilityCards, prompt: true, list: false }); generatePrompt() }}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.prompt ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Confira as informações do comando</Typography>
                <Typography variant='caption'>Caso necessário, volte até o módulo que deseje ajustar para alterar.</Typography>
                <TextField
                    multiline
                    value={prompt !== null ? JSON.stringify(prompt, null, 2).replace(/"([^"]+)":/g, '$1:') : ""}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary">Limpar</Button>
                    <Button variant='contained' onClick={() => { setVisibilityCards({ ...visibilityCards, generation: true, prompt: false }); executePrompt() }}>Executar</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.generation ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow' position={'relative'}>
                <TextField
                    multiline
                    disabled={response === null}
                    value={response !== null ? response.replace(/"([^"]+)":/g, '$1:') : ''}
                    onChange={(e) => setResponse(e.target.value)}
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setVisibilityCards({ ...visibilityCards, prompt: true, generation: false })}>Voltar</Button>
                    <Button variant='contained' href={url} download='response.json'>Baixar resultados</Button>
                </Grid>

                <Backdrop
                    sx={{
                        color: '#fff',
                        zIndex: (theme) => theme.zIndex.drawer + 1,
                        position: "absolute",
                    }}
                    className='borderRadius'
                    open={loading}
                >
                    <CircularProgress color="inherit" />
                    <Typography>Gerando resultados</Typography>
                </Backdrop>
            </Grid>

        </Grid>
    )
}
