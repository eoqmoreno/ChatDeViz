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
                    O ChatDeViz é um sistema que permite utilizar as capacidades do Large Language Model (LLM) da OpenAI por meio do seu chat, o ChatGPT, para gerar e avaliar respostas no processo inicial de um processo de design de visualização de dados. Esse sistema utiliza o modelo para recuperar as informações adicionadas no treinamento para ajudar a usuários não especialistas da área de visualização de dados a realizarem pesquisas e avaliações de possibilidades de resposta de visualização de dados.
                    <br /><br />
                    O ChatDeViz permite que usuários não especialistas em visualização de dados possam por meio de um caminho guiado pelo sistema, coletar informações sobre como e quais visualizações utilizar para possivelmente resolver os seus problemas de visuaização de dados.
                    <br /><br />
                    Neste sistema o usuário poderá inseir o possível usuário da visualização, a sua definição do problema e esperar que o sistema gere as possibilidades de resposta. Em outro fluxo, o usuário também poderá pedir ao sistema para avaliar a qualidade e indicar qual dentre elas pode melhor ajudar no seu problema.
                    <br /><br />
                    Por se tratar de usuários não especialistas em visualização de dados, esse sistema buscou embutir em uma interface de interação comandos padrão para gerar e avaliar as visualizações de dados
                    <br /><br />
                    Esses usuários podem ser gerentes de loja que desejam apresentar o quantitativo de venda de uma loja em relação a um determinado período de tempo, ou um professor que deseja mostrar em uma aula de biologia o desmatamento da Amazonia em relação os governos federais.
                    <br /><br />
                    O sistema ainda está em construção pois parte de um recorte do meu trabalho de discertação. O trabalho busca avaliar a capacidade do ChatGPT para ajudar no processo de desing de visualização de dados, avaliando o modelo em cada uma das possiveis etapas do processo.
                </Typography>
            </Grid>
        </Grid>
    )
}
