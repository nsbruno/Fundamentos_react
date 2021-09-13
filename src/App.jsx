import './App.css'
import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from "./components/basicos/Famila";
import Card from "./components/layout/Card";
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParOuImpar from './components/condicional/ParOuImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';
import Input from './components/formulario/Input';
import Contador from './components/contador/Contador';
import Mega from './components/mega/Mega';

// eslint-disable-next-line import/no-anonymous-default-export
export default (_) => (
  <div className="App">
    <h1>Fundamentos React</h1>
    <div className="Cards">

    <Card titulo="#13 - Mega" color="#b9006f9e">
      <Mega qtde={8}></Mega>
    </Card>
    
    <Card titulo="#12 - Contador" color="#424242">
      <Contador numeroInicial={15}></Contador>
    </Card>

    <Card titulo="#11 - Componente Controlado" color="#E45F56">
      <Input></Input>
    </Card>

    <Card titulo="#10 - Comunicação Indireta" color="#8BAD39">
      <IndiretaPai></IndiretaPai>
    </Card>

   
    <Card titulo="#09 - Comunicação Direta" color="#59323C">
      <DiretaPai></DiretaPai>
    </Card>

    <Card titulo="#08 - Renderização Condicional" color="#098">
      <ParOuImpar numero={21}></ParOuImpar>
      <UsuarioInfo usuario={{ nome: 'Fernando'}}></UsuarioInfo>
    </Card>

    <Card titulo="#07 - Desafio Repetição" color="#3A9AD9">
      <TabelaProdutos></TabelaProdutos>
    </Card>
   
    <Card titulo="#06 - Repetição" color="#FF4C65">
      <ListaAlunos />
    </Card>
      
      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
            <FamiliaMembro nome="Pedro" />
            <FamiliaMembro nome="Ana" />
            <FamiliaMembro nome="Gustavo"/>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio minimo={1} maximo={10} />
      </Card>

      <Card titulo="#03 - Fragmento"  color="#E94CF6">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro"  color="#E8B71A">
        <ComParametro titulo="Situação do Aluno" aluno="Bruno" nota={9.3} />
        <ComParametro titulo="Situação do Aluno" aluno="João" nota={6} />
      </Card>

      <Card titulo="#01 - Fragmento"  color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);