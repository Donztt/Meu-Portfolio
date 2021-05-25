import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/PersonalProjects.css';
import PersonagemPhoto from '../Photos/Rpg Game Photo.png';
import MonsterPhoto from '../Photos/Rpg Game Monster.png';
import MonsterPhoto2 from '../Photos/Rpg Game Monster2.png';

function PersonalProjects(){
    return(
        <div>
            <NavBar/>
                <div id="Personal-Content">
                    <div className="container-md">
                        <div id="Project">
                            <h3>RPG Survival Game</h3>
                            <p>Projeto feito na engine Unity 3D na linguagem C#.</p>
                            <p>Jogo com a temática medieval de fantasia sendo baseado em formas Cartoon, e Inspirado em Terraria e Dark Souls.</p>
                            <p>Possuíndo o sistema de inventário, montagem de itens (Crafting) e sistema de equipamentos</p>
                            <p>
                               O jogo será altamente focado na exploração de mapas e saque de monstros,
                               onde terá uma vasta quantidade de recursos espalhadas para que sejam usadas para a criação
                               de novos equipamentos que auxiliam na sobrevivência e exploração do personagem.
                            </p>
                            <p>
                                Também irá contar com uma quantidade grande de equipamentos que o personagem irá conseguir utilizar para se proteger de ataque de monstros
                                espalhados pelo mapa, entre elas armas normais e armas mágicas que possuem ataque especiais.
                            </p>
                            <div id="Project-Photo">
                                <div class="container">
                                    <div class="row">
                                        <div class="col align-self-start">
                                            <img src={MonsterPhoto} class="rounded mx-auto d-block"></img>
                                        </div>
                                        <div class="col align-self-center">
                                            <img src={PersonagemPhoto} class="rounded mx-auto d-block"></img>
                                        </div>
                                        <div class="col align-self-end">
                                            <img src={MonsterPhoto2} class="rounded mx-auto d-block"></img>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default PersonalProjects;