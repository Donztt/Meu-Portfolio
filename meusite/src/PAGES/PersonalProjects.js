import React, { Suspense } from 'react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import '../CSS/PersonalProjects.css';
import PersonagemPhoto from '../Photos/GameImages/Rpg Game Photo.png';
import MonsterPhoto from '../Photos/GameImages/Rpg Game Monster.png';
import MonsterPhoto2 from '../Photos/GameImages/Rpg Game Monster2.png';
import Zoom from 'react-reveal/Zoom';
import ImageGallery from 'react-image-gallery';
import Image1 from '../Photos/GameImages/Image1.PNG';
import Image2 from '../Photos/GameImages/Image2.PNG';
import Image3 from '../Photos/GameImages/Image3.PNG';
import Image4 from '../Photos/GameImages/Image4.PNG';
import Image5 from '../Photos/GameImages/Image5.PNG';
import { Canvas } from '@react-three/fiber'
import {  OrbitControls, PerspectiveCamera, Stars } from '@react-three/drei'
import {BeholderModel,MouseModel,LobModel,PilarModel,GreatSwordModel} from '../Models3D/ModelsGame';

const imagesGallery = [
    {
        original: Image1,
    },
    {
        original: Image2,
    },
    {
        original: Image3,
    },
    {
        original: Image4,
    },
    {
        original: Image5,
    },
];

function ConfigModels(props) {

    return (
        <group>
            <ambientLight intensity={0.7} />
            <spotLight intensity={3} angle={10} penumbra={1} position={[-15, 80, 0]} receiveShadow castShadow/>
            <PerspectiveCamera {...props} />
            <OrbitControls />
        </group>
    )
}

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
                                            <img src={MonsterPhoto} class="rounded mx-auto d-block" alt=""></img>
                                        </div>
                                        <div class="col align-self-center">
                                            <img src={PersonagemPhoto} class="rounded mx-auto d-block" alt=""></img>
                                        </div>
                                        <div class="col align-self-end">
                                            <img src={MonsterPhoto2} class="rounded mx-auto d-block" alt=""></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="Gallery">
                                <ImageGallery items={imagesGallery} showThumbnails={false} showBullets={true} />;
                            </div>
                            <div id="Videos">
                                <div id="Video1">
                                    <h3>Visão Geral do jogo</h3>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe class="embed-responsive-item" src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6800416080004190208?compact=1" title="Demo Jogo" height="284" width="504" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                                <div id="Video2">
                                    <h3>Update: Sistema de Crafting</h3>
                                    <div class="embed-responsive embed-responsive-16by9">
                                        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6801603672020160512?compact=1" title="Sistema Crafting" height="284" width="504" allowfullscreen=""></iframe>
                                    </div>
                                </div>
                            </div>
                        </Zoom>
                        <div id="Models3D">
                            <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 35, 70], fov: 50 }} shadowMap>
                                <ConfigModels />
                                <Stars radius={500} depth={150} count={5000} factor={20} saturation={0} fade />
                                <Suspense fallback={null}>
                                    <MouseModel position={[0, 6, 0]} />
                                    <BeholderModel position={[-28, 20, 0]} />
                                    <LobModel position={[28, 6, -2]}/>
                                    <GreatSwordModel position={[0, -5, 8]}/>
                                    <PilarModel position={[0, -5, 0]}/>
                                    <PilarModel position={[-28, -5, 0]}/>
                                    <PilarModel position={[28, -5, 0]}/> 
                                </Suspense>
                            </Canvas>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
//<ModelViewer type="obj" src={modelPath} />
export default PersonalProjects;