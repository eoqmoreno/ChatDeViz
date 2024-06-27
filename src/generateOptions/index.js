// imported components
import { Backdrop, Button, CircularProgress, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

// imported services
import { client } from '../axios';

// imported assets
import BadgeIcon from '@mui/icons-material/Badge';
import BarChartIcon from '@mui/icons-material/BarChart';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import CommentIcon from '@mui/icons-material/Comment';


export default function GenerateOptions() {
    const [aboutRole, setAboutRole] = useState("")
    const [aboutProblem, setAboutProblem] = useState("")
    const [aboutUser, setAboutUser] = useState("")
    const [prompt, setPrompt] = useState(null)
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [visibilityCards, setVisibilityCards] = useState({
        role: true,
        problem: false,
        user: false,
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
        setPrompt([
            {
                role: "system",
                content: "Você, como um assistente no processo de design de visualização de dados, deverá responder a pergunta com uma lista de possibilidades de forma de visualização de dados como resposta e retornar em uma lista no formato JSON"
            },
            {
                role: "user",
                content: "Cada item da lista de sugestões deve vir no formato: {/tipo: [tipo da visualuação de dados], descrição: [descrição clara do motivo de usar com pelo menos 50 palavras], variáveis: [lista com as variáveis necessárias para usar essa visualização e como usar a variável] }/"
            },
            {
                role: "user",
                content: "Eu, como um " + aboutRole + ", preciso " + aboutProblem + " para um(a) " + aboutUser + ", quais poderiam ser as melhores visualizações de dados para isso?"
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
                Gerar opções
            </Typography>

            <Grid container item flexDirection='row' p={4} className='backgroundWhite borderRadius shadow'>

                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.role ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: true, problem: false, user: false, prompt: false, generation: false })}>
                    <BadgeIcon />
                    <Typography>Trabalho</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.problem ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: true, user: false, prompt: false, generation: false })}>
                    <BarChartIcon />
                    <Typography>Problema</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.user ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, user: true, prompt: false, generation: false })}>
                    <QueryStatsIcon />
                    <Typography>Visualizador</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.prompt ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, user: false, prompt: true, generation: false })}>
                    <CommentIcon />
                    <Typography>Comando</Typography>
                </Grid>
                <Grid container item md={2.4} alignItems={'center'} flexDirection='column' sx={{ cursor: 'pointer', color: visibilityCards.generation ? '#EA5B0C' : '#676c6f' }} onClick={() => setVisibilityCards({ role: false, problem: false, user: false, prompt: false, generation: true })}>
                    <QuestionAnswerIcon />
                    <Typography>Resultados</Typography>
                </Grid>

            </Grid>

            <Grid sx={{ display: visibilityCards.role ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Sobre o seu trabalho</Typography>
                <Typography>Descreva o seu trabalho/cargo</Typography>
                <TextField
                    multiline
                    focused
                    onChange={(e) => setAboutRole(e.target.value)}
                    placeholder='Eu, como um ...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutRole("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => setVisibilityCards({ ...visibilityCards, problem: true, role: false })}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.problem ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Sobre o problema</Typography>
                <Typography>Descreva o seu problema a ser resolvido na visualização</Typography>
                <TextField
                    multiline
                    focused
                    onChange={(e) => setAboutProblem(e.target.value)}
                    placeholder='Preciso apresentar os dados para...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutProblem("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => setVisibilityCards({ ...visibilityCards, user: true, problem: false })}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.user ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Sobre o visualizador</Typography>
                <Typography>Descreva o destinatário da sua visualização de dados</Typography>
                <TextField
                    multiline
                    focused
                    onChange={(e) => setAboutUser(e.target.value)}
                    placeholder='A pessoa que terá acesso será um(a)...'
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary" onClick={() => setAboutUser("")}>Limpar</Button>
                    <Button variant='contained' onClick={() => { setVisibilityCards({ ...visibilityCards, prompt: true, user: false }); generatePrompt() }}>Próximo</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.prompt ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>Confira as informções do comando</Typography>
                <TextField
                    multiline
                    focused
                    value={prompt !== null ? JSON.stringify(prompt, null, 2).replace(/"([^"]+)":/g, '$1:') : ""}
                />
                <Grid item container flexDirection={'row'} justifyContent={'flex-end'} gap={1}>
                    <Button color="secondary">Limpar</Button>
                    <Button variant='contained' onClick={() => { setVisibilityCards({ ...visibilityCards, generation: true, prompt: false }); executePrompt() }}>Executar</Button>
                </Grid>
            </Grid>

            <Grid sx={{ display: visibilityCards.generation ? 'flex' : 'none' }} container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow' position={'relative'}>
                <TextField
                    multiline
                    focused
                    disabled = {response === null}
                    value={response !== null ? response.replace(/"([^"]+)":/g, '$1:') : ''}
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
