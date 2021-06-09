import React from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/PersonalProjects.css';
import PersonagemPhoto from '../Photos/GameImages/Rpg Game Photo.png';
import MonsterPhoto from '../Photos/GameImages/Rpg Game Monster.png';
import MonsterPhoto2 from '../Photos/GameImages/Rpg Game Monster2.png';
import Zoom from 'react-reveal/Zoom';
import {Gallery} from '../Components/Gallery';
import ModelViewer from 'react-model-viewer';
import modelPath from '../Models3D/Rato2.obj';


function PersonalProjects() {
    return (
        <div>
            <NavBar />
            <div id="Personal-Content">
                <div className="container-md">
                    <div id="Project">
                        <h3>RPG Survival Game</h3>
                        <p>Projeto feito na engine Unity 3D na linguagem C#.</p>
                        <p>Jogo com a temática medieval de fantasia sendo baseado em formas Cartoon, e Inspirado em Terraria e Dark Souls.</p>
                        <p>Possuindo o sistema de inventário, montagem de itens (Crafting) e sistema de equipamentos</p>
                        <p>
                            O jogo será altamente focado na exploração de mapas e saque de monstros,
                            onde terá uma vasta quantidade de recursos espalhadas para que sejam usadas para a criação
                            de novos equipamentos que auxiliam na sobrevivência e exploração do personagem.
                        </p>
                        <p>
                            Também irá contar com uma quantidade grande de equipamentos que o personagem irá conseguir utilizar para se proteger de ataque de monstros
                            espalhados pelo mapa, entre elas armas normais e armas mágicas que possuem ataque especiais.
                        </p>
                        <Zoom top>
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
                            <div id = "Gallery">
                                <Gallery/>
                            </div>
                            <div id = "Videos">
                                <div id = "Video1">
                                    <h3>Visão Geral do jogo</h3>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6800416080004190208?compact=1" height="284" width="504"  allowfullscreen = ""></iframe>
                                    </div>
                                </div>
                                <div id = "Video2">
                                    <h3>Update: Sistema de Crafting</h3>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6801603672020160512?compact=1" height="284" width="504" allowfullscreen=""></iframe>           
                                    </div> 
                                </div> 
                            </div>
                            <div id="Models3D">
                                
                            </div>          
                        </Zoom>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
//<ModelViewer type="obj" src={modelPath} />
export default PersonalProjects;