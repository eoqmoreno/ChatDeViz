// imported compenents
import { Grid, Typography } from '@mui/material'

// imported assets
import banner from '../assets/banner.png'

export default function Home() {
    return (
        <Grid container item gap={2} flexDirection={'column'} justifyContent={'flex-start'} xl={8} md={12}>
            <img src={banner} alt='Baner com o texto ChatDeViz, o nome do site' className='imgBanner borderRadius shadow' />

            <Grid container item flexDirection='column' p={4} gap={2} className='backgroundWhite borderRadius shadow'>
                <Typography variant='subtitle1'>
                    Sobre o sistema
                </Typography>
                <Typography p>
                    O ChatDeViz é um sistema que permite utilizar as capacidades do Large Language Model (LLM) da OpenAI por meio do seu chat, o ChatGPT, para gerar e avaliar respostas no processo inicial de design de visualização de dados. Esse sistema utiliza o modelo para recuperar as informações adicionadas no treinamento e a gerar novas informações para ajudar a usuários não especialistas da área de visualização de dados a realizarem pesquisas e avaliações de possibilidades de resposta de visualização de dados.
                    <br /><br />
                    O ChatDeViz permite que usuários não especialistas em visualização de dados possam, por meio de um caminho guiado pelo sistema, coletar informações sobre como e quais visualizações utilizar para possivelmente resolver os seus problemas de visualização de dados.
                    <br /><br />
                    Neste sistema o usuário poderá inserir o possível consumidor da visualização, o seu objetivo e esperar que o sistema gere as possibilidades de resposta. Em outro fluxo, o usuário também poderá pedir ao sistema para avaliar a qualidade de algumas visualizações com relação a um determinado objetivo e indicar qual dentre elas é a mais adequada.
                    <br /><br />
                    Por se tratar de usuários não especialistas em visualização de dados, esse sistema buscou embutir em uma interface de interação comandos padrão para gerar e avaliar as visualizações de dados
                    <br /><br />
                    Por exemplo, esses usuários podem ser gerentes de loja que desejam apresentar o quantitativo de venda de uma loja em relação a um determinado período de tempo, ou um professor que deseja mostrar em uma aula de biologia o desmatamento da Amazônia em relação aos governos federais.
                    <br /><br />
                    O sistema ainda está em construção pois parte de um recorte do meu trabalho de dissertação. O trabalho busca avaliar a capacidade do ChatGPT para ajudar no processo de design de visualização de dados, avaliando o modelo em cada uma das possíveis etapas do processo.
                </Typography>
            </Grid>
        </Grid>
    )
}
